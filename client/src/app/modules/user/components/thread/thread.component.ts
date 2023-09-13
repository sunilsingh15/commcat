import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ForumsService } from 'src/app/forums.service';
import { Thread } from 'src/app/models/thread';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  service = inject(ForumsService);
  router = inject(Router);

  @ViewChild('comment')
  comment: ElementRef;

  threadId: string = this.activatedRoute.snapshot.params['threadId'];
  threadSub$: Subscription;
  commentSub$: Subscription;
  isLoading: boolean = true;
  title = inject(Title);
  thread: Thread = {
    id: '',
    username: '',
    title: '',
    text: '',
    timestamp: '',
    comments: []
  };

  ngOnInit(): void {
    this.threadSub$ = this.service.getThread(this.threadId).subscribe({
      next: (result) => {
        this.thread.title = result.title;
        this.thread.text = result.text;
        this.thread.username = result.username;
        this.thread.timestamp = result.timestamp;
        this.thread.comments = result.comments.map(comment => ({
          id: comment._id,
          username: comment.username,
          text: comment.text,
          timestamp: comment.timestamp
        }));
        this.title.setTitle(this.thread.title + ' | Commcat');
        this.isLoading = false;
      },
      error: (err) => { console.log(err); },
      complete: () => { this.threadSub$.unsubscribe(); }
    })
  }

  postComment() {
    this.commentSub$ = this.service.postComment(this.threadId, this.comment.nativeElement.value).subscribe({
      next: (result) => {
        window.location.reload();
      },
      error: (err) => { console.log(err); },
      complete: () => { this.commentSub$.unsubscribe(); }
    });
  }

}
