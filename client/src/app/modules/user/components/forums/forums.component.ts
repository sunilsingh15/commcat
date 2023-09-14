import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ForumsService } from 'src/app/forums.service';
import { Threads } from 'src/app/models/threads';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {

  isLoading: boolean = true;
  threads: Threads[] = [];

  threadsSub$: Subscription;
  service = inject(ForumsService);
  router = inject(Router);

  ngOnInit(): void {

    if (!StorageService.isUserLoggedIn()) {
      this.router.navigate(['/forbidden']);
    }

    this.threadsSub$ = this.service.getThreads().subscribe({
      next: (result) => {
        if (result != null) {
          this.threads = result.map((item: any) => ({
            id: item._id,
            username: item.username,
            title: item.title,
            comments: item.comments,
            timestamp: item.timestamp
          }));
          this.isLoading = false;
        }
      },
      error: (err) => { console.log(err); },
      complete: () => { this.threadsSub$.unsubscribe(); }

    });

  }

}
