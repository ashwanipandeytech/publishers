import { Component } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'call-management';
  allowaccess = false;
  constructor(private router: Router,


  ) {
    router.events.subscribe((event: RouterEvent) => {

      if (event instanceof NavigationEnd) {

        if (this.router.url === '/login' || this.router.url === '/' || this.router.url === '/pagenotfound') {

          this.allowaccess = false;


        } else {
          this.allowaccess = true;

        }
      }
    })

  }
}
