import { Component, OnInit } from '@angular/core';
import { Trending } from '../../classes/trending/trending';
import { TrendingService } from '../../services/trending/trending.service';
import { MdGridListModule } from '@angular/material';
import { MdCardModule } from '@angular/material';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ TrendingService ]
})
export class IndexComponent implements OnInit {

  errorMessage: string;
  trending: Trending[];
  airing: Trending[];
  featured: Trending[];

  slideConfig = { "slidesToShow": 3, "slidesToScroll": 3, "speed": 300, "dots": false, "autoplay": false, "autoplaySpeed": 5000 };
  featureConfig = { "slidesToShow": 3, "slidesToScroll": 1, "speed": 300, "dots": false, "autoplay": true, "autoplaySpeed": 5000, "centerMode": true, "centerPadding": "60px" };

  constructor(private trendingService: TrendingService) { }

  ngOnInit() {
    this.getTrending();
    this.getAiring();
    this.getFeatured();
  }

  getTrending() {
    this.trendingService.getTrending().subscribe(
      trending => this.trending = trending,
      error => this.errorMessage = <any>error);
  }

  getAiring() {
    this.trendingService.getAiring().subscribe(
      airing => this.airing = airing,
      error => this.errorMessage = <any>error);
  }

  getFeatured() {
    this.trendingService.getFeatured().subscribe(
      featured => this.featured = featured,
      error => this.errorMessage = <any>error);
  }

}
