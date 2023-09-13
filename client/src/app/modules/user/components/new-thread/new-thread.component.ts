import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ForumsService } from 'src/app/forums.service';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  builder = inject(FormBuilder);
  service = inject(ForumsService);
  router = inject(Router);
  newThreadForm: FormGroup;
  sub$: Subscription;

  ngOnInit(): void {
    this.newThreadForm = this.initializeForm();
  }

  initializeForm(): FormGroup {
    return this.builder.group({
      title: this.builder.control<string>('', [Validators.required, Validators.minLength(5)]),
      text: this.builder.control<string>('', [Validators.required, Validators.minLength(5)])
    });
  }

  addThread() {
    this.sub$ = this.service.postNewThread(this.newThreadForm).subscribe({
      next: (result) => { this.router.navigate(['/forums']); },
      error: (err) => { console.log(err); },
      complete: () => { this.sub$.unsubscribe(); }
    });
  }

}
