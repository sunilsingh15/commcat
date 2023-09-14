import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  service = inject(AuthService);
  loginForm!: FormGroup;
  builder = inject(FormBuilder);
  router = inject(Router);

  ngOnInit(): void {
    this.loginForm = this.initializeForm();
  }

  initializeForm(): FormGroup {
    return this.builder.group({
      username: this.builder.control<string>('', [Validators.required, Validators.minLength(3)]),
      password: this.builder.control<string>('', [Validators.required]),
    });
  }

  login() {
    this.service.login(this.loginForm.value).subscribe((res) => {
      if (res.userId != null) {
        const user = {
          id: res.userId,
          role: res.role,
          name: res.name
        };
        StorageService.saveToken(res.jwt);
        StorageService.saveUser(user);

        if (StorageService.isAdminLoggedIn()) {
          this.router.navigate(['/dashboard']);
        } else if (StorageService.isUserLoggedIn()) {
          this.router.navigate(['/forums']);
        }

        window.location.reload();

      } else {
        console.log('Wrong credentials!');
      }
    })
  }

}
