import { Component, OnInit, ElementRef, ViewChild, } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent implements OnInit {
  title = 'LoungeLobby';
  private width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  private menuMode; // Where we'll store the resulting menu mode
  private opened;

  ngOnInit() {
    // Do your simple test on the container, for example
    if (this.width <= 600) {
        this.menuMode = "push";
        this.opened = "false";
    } else {
        this.menuMode = "side";
        this.opened = "true;"
    }
  }

  onResize(event) {
    this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (this.width <= 600) {
        this.menuMode = "push";
        this.opened = "false";
    } else {
        this.menuMode = "side";
        this.opened = "true;"
    }
    console.log("resize :)");
  }
}
