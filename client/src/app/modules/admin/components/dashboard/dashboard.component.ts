import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommcatService } from 'src/app/commcat.service';
import { Submission } from 'src/app/models/submission';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  router = inject(Router);
  service = inject(CommcatService);

  submissions: Submission[] = [];
  isLoading: boolean = true;
  getSub$: Subscription;
  approveSub$: Subscription;
  rejectSub$: Subscription;

  ngOnInit(): void {
    if (!StorageService.isAdminLoggedIn()) {
      this.router.navigate(['/forbidden']);
    }

    this.getSub$ = this.service.getSubmissions().subscribe({
      next: (result: any[]) => {
        if (result != null) {
          this.submissions = result.map((item: any) => ({
            catId: item._id,
            name: item.name,
            gender: item.gender,
            community: item.community,
            picture: item.picture,
            likes: item.likes,
            dislikes: item.dislikes,
            personality: item.personality,
            other: item.other,
            timestamp: item.timestamp
          }));
        }
        this.isLoading = false;
      },
      error: (err) => { console.log(err); },
      complete: () => { this.getSub$.unsubscribe(); }
    });
  }

  approve(catId: string) {

    this.approveSub$ = this.service.approveSubmission(catId).subscribe({
      next: (result) => {
        const alert = document.getElementById('approve-success-alert');
        alert?.classList.remove('hidden');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => { console.log(err); },
      complete: () => { this.approveSub$.unsubscribe(); }
    });

  }

  reject(catId: string) {

    this.rejectSub$ = this.service.rejectSubmission(catId).subscribe({
      next: (result) => {
        const alert = document.getElementById('reject-success-alert');
        alert?.classList.remove('hidden');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => { console.log(err); },
      complete: () => { this.rejectSub$.unsubscribe(); }
    });

  }



}
