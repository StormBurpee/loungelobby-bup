import { Component, OnInit } from '@angular/core';

import { Show, Episodes } from '../../classes/show/show';
import { ShowService } from '../../services/show/show.service';

import { MdButtonModule, MdCardModule, MdProgressSpinnerModule } from '@angular/material';

@Component({
  selector: 'app-myshows',
  templateUrl: './myshows.component.html',
  styleUrls: ['./myshows.component.scss'],
  providers: [ ShowService ]
})
export class MyshowsComponent implements OnInit {

  private myShows: any;
  private errorMessage;

  constructor( private showService: ShowService ) { }

  ngOnInit() {
    this.getMyShows();
  }

  getMyShows() {
    this.showService.getMyShows().subscribe(
      show => this.myShows = show,
      error => this.errorMessage = <any>error,
      () => null
    );
  }

}
