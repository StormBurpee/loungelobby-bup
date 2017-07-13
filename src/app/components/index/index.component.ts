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

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "speed": 300,
    "dots": false,
    "autoplay": false,
    "autoplaySpeed": 5000,
    "responsive": [
      {
        "breakpoint": 1024,
        settings: {
          "slidesToShow": 3,
          "slidesToScroll": 3
        }
      },
      {
        "breakpoint": 800,
        settings: {
          "slidesToShow": 2,
          "slidesToScroll": 2
        }
      },
      {
        "breakpoint": 500,
        settings: {
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      }
    ]
  };
  featureConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "speed": 300,
    "dots": false,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "centerMode": true,
    "centerPadding": "60px",
    "responsive": [
      {
        "breakpoint": 1024,
        settings: {
          "slidesToShow": 3,
          "slidesToScroll": 1
        }
      },
      {
        "breakpoint": 800,
        settings: {
          "slidesToShow": 2,
          "slidesToScroll": 1,
          "centerMode": false
        }
      }
    ]
  };

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
