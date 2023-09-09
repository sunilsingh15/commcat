import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommcatService } from 'src/app/commcat.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  submitForm!: FormGroup;
  builder = inject(FormBuilder);
  service = inject(CommcatService);
  sub$!: Subscription;
  router = inject(Router);

  @ViewChild('picture')
  picture!: ElementRef;

  ngOnInit(): void {
    this.submitForm = this.initializeForm();
  }

  initializeForm(): FormGroup {
    return this.builder.group({
      name: this.builder.control<string>('', [Validators.required]),
      gender: this.builder.control('male', [Validators.required]),
      community: this.builder.control('ang-mo-kio', [Validators.required]),
      picture: this.builder.control('', [Validators.required]),
      likes: this.builder.control<string>(''),
      dislikes: this.builder.control<string>(''),
      personality: this.builder.control<string>(''),
      other: this.builder.control<string>('')
    })
  }

  processForm() {
    this.sub$ = this.service.postForm(this.submitForm, this.picture).subscribe({
      next: (result) => { this.router.navigate(['/thanks']); },
      error: (err) => { console.log(err); },
      complete: () => { this.sub$.unsubscribe(); }
    });

  }

}
