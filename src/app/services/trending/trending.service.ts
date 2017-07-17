import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Trending } from '../../classes/trending/trending';

@Injectable()
export class TrendingService {

  private trendingUrl = "/api/trending/12";
  private airingUrl = "/api/airing/15"
  private featuredUrl = "/api/featured";

  constructor( private http: Http ) { }

  getTrending(): Observable<Trending[]> {
    return this.http.get(this.trendingUrl).map(this.extractData).catch(this.handleError);
  }

  getAiring(): Observable<Trending[]> {
    return this.http.get(this.airingUrl).map(this.extractData).catch(this.handleError);
  }

  getFeatured(): Observable<Trending[]> {
    return this.http.get(this.featuredUrl).map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
