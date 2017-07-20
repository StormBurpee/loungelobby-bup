import { Component, OnInit } from '@angular/core';

import { Show, Episodes } from '../../classes/show/show';
import { ShowService } from '../../services/show/show.service';
import { User, UserStatus } from '../../classes/user/user';
import { UserService } from '../../services/user/user.service';

import { ActivatedRoute } from '@angular/router';

import { MdButtonModule, MdCardModule, MdProgressSpinnerModule } from '@angular/material';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
  providers: [ ShowService, UserService ]
})
export class ShowComponent implements OnInit {

  private showId;
  private show: Show;
  private myShow: boolean;
  private errorMessage: string;
  private loggedIn: boolean;
  private episodes: Episodes;
  private today;

  constructor( private showService: ShowService, private userService: UserService, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.showId = this.route.snapshot.paramMap.get('id');
    this.loadShowDetails();
    this.isLoggedIn();
    let d = new Date();
    this.today = d.toLocaleDateString();
  }

  loadShowDetails() {
    this.showService.getShow(this.showId).subscribe(
      show => this.show = show,
      error => this.errorMessage = <any>error,
      () => this.loadEpisodes()
    );
  }

  loadEpisodes() {
    this.showService.getEpisodes(this.showId, this.show.number_of_seasons).subscribe(
      episodes => this.episodes = episodes,
      error => this.errorMessage = <any>error,
      () => console.log(this.episodes)
    );
  }

  isLoggedIn() {
    this.userService.isLoggedIn().subscribe(
      loggedIn => this.loggedIn = loggedIn.loggedin,
      error => this.errorMessage = <any>error,
      () => this.isMyShow()
    );
  }

  isMyShow() {
    if(this.loggedIn) {
      this.showService.isMyShow(this.showId).subscribe(
        myShow => this.myShow = myShow.myshow,
        error => this.errorMessage = <any>error
      );
    }
  }

}
