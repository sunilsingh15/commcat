import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  service = inject(AuthService);
  registerForm!: FormGroup;
  builder = inject(FormBuilder);

  ngOnInit(): void {
    this.registerForm = this.initializeForm();
  }

  initializeForm(): FormGroup {
    return this.builder.group({
      username: this.builder.control<string>('', [Validators.required, Validators.minLength(3)]),
      email: this.builder.control<string>('', [Validators.required, Validators.email]),
      password: this.builder.control<string>('', [Validators.required]),
      confirmPassword: this.builder.control<string>('', [Validators.required])
    },
      {
        validator: passwordMatchValidator()
      })

    function passwordMatchValidator(): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        const password = control.get('password')?.value;
        const confirmPassword = control.get('confirmPassword')?.value;

        if (password !== confirmPassword) {
          return { passwordMismatch: true };
        }

        return null;
      };
    }
  }

  register() {

    const details = {
      username: this.registerForm.value['username'],
      email: this.registerForm.value['email'],
      password: this.registerForm.value['password']
    }

    this.service.register(details).subscribe((res) => {
      if (res.id != null) {
        this.registerForm = this.initializeForm();
        const alert = document.getElementById('success-alert');
        alert?.classList.remove('hidden');
      }
    });
  }

}
