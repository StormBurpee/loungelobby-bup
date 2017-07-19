import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { EpisodeLink } from '../../classes/show/show';
import { ShowService } from '../../services/show/show.service';

import { MdButtonModule, MdCardModule } from '@angular/material';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
  providers: [ ShowService ]
})
export class WatchComponent implements OnInit {

  private errorMessage: string;

  private videosrc: EpisodeLink;
  private showId;
  private season;
  private episode;

  constructor( private showService: ShowService, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.showId = this.route.snapshot.paramMap.get('id');
    this.season = this.route.snapshot.paramMap.get('season');
    this.episode = this.route.snapshot.paramMap.get('episode');

    this.loadEpisode();
  }

  loadEpisode() {
    this.showService.getEpisodeLink(this.showId, this.season, this.episode).subscribe(
      link => this.videosrc = link,
      error => this.errorMessage = <any>error
    );
  }

}
