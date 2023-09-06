import { AfterViewInit, Component } from '@angular/core';

import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

ngAfterViewInit(): void {
  const typed = new Typed('#subtext', {
    strings: ['For our community cats that we love', 'For our community cats that we cherish', 'For our community cats that we dote on', 'For our community cats that we <i>sayang</i>.'],
    typeSpeed: 70,
    backSpeed: 70,
    showCursor: false,
    smartBackspace: true
  });
}

}
