import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Subscription } from 'rxjs';
import { CommcatService } from 'src/app/commcat.service';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn();
  isUserLoggedIn: boolean = StorageService.isUserLoggedIn();
  service = inject(CommcatService);
  dashSub$: Subscription;
  submissions: number = 0;

  router = inject(Router);

  ngOnInit(): void {
    initFlowbite();

    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
        this.isUserLoggedIn = StorageService.isUserLoggedIn();
      }
    })

    this.dashSub$ = this.service.getSubmissions().subscribe({
      next: (result) => {
        if (result != null) {
          this.submissions = result.length;
        }
       },
      error: (err) => { console.log(err); },
      complete: () => { this.dashSub$.unsubscribe(); }
    });
  }

  logout() {
    StorageService.logout();
    this.router.navigate(['/']);
  }

}
