import { Component, OnInit, ElementRef, ViewChild, } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';

import { User, UserStatus } from './classes/user/user';
import { UserService } from './services/user/user.service';

declare var ga:Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ UserService ],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

export class AppComponent implements OnInit {
  title = 'LoungeLobby';
  width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  menuMode; // Where we'll store the resulting menu mode
  opened;
  headerDisplay;

  loggedIn: boolean;
  errorMessage = "";

  currentRoute: string;

  constructor(private userService: UserService, _router: Router) {
    _router.events.distinctUntilChanged((previous: any, current: any) => {
            // Subscribe to any `NavigationEnd` events where the url has changed
            if(current instanceof NavigationEnd) {
                return previous.url === current.url;
            }
            return true;
        }).subscribe((x: any) => {
            ga('set', 'page', x.url);
            ga('send', 'pageview')
        });
  }

  ngOnInit() {
    // Do your simple test on the container, for example
    if (this.width <= 600) {
        this.menuMode = "push";
        this.opened = "false";
        this.headerDisplay = "false";
    } else {
        this.menuMode = "side";
        this.opened = "true;"
        this.headerDisplay = "true";
    }

    this.isLoggedIn();
  }

  isLoggedIn() {
    this.userService.isLoggedIn().subscribe(
      loggedIn => this.loggedIn = loggedIn.loggedin,
      error => this.errorMessage = <any>error);
  }

  onResize(event) {
    this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (this.width <= 600) {
        this.menuMode = "push";
        this.opened = "false";
        this.headerDisplay = "false";
    } else {
        this.menuMode = "side";
        this.opened = "true;"
        this.headerDisplay = "true";
    }
    console.log("resize :)");
  }
}
