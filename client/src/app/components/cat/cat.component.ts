import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommcatService } from 'src/app/commcat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  service = inject(CommcatService);
  catId: string = this.activatedRoute.snapshot.params['catId'];
  title = inject(Title);

  name: string = '';
  gender: string = '';
  picture: string = '';
  likes: string = '';
  dislikes: string = '';
  personality: string = '';
  other: string = '';

  sub$!: Subscription;
  isLoading: boolean = true;

  ngOnInit(): void {
    this.getCatInfo();
  }

  getCatInfo() {
    this.sub$ = this.service.getCatInfo(this.catId).subscribe({
      next: (result) => {
        this.title.setTitle(`${result.name} | Commcat`);
        this.name = result.name;
        this.gender = result.gender;
        this.picture = result.picture;
        this.likes = result.likes;
        this.dislikes = result.dislikes;
        this.personality = result.personality;
        this.other = result.other;
        this.isLoading = false;
      },
      error: (err) => { console.log(err); },
      complete: () => { this.sub$.unsubscribe(); }
    });
  }

}
