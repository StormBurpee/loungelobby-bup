import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Show, MyShow, Episodes, EpisodeLink } from '../../classes/show/show';

@Injectable()
export class ShowService {

  private showUrl = "/api/show/";

  constructor( private http: Http ) { }

  getShow(id): Observable<Show> {
    return this.http.get(this.showUrl+(""+id)).map(this.extractData).catch(this.handleError);
  }

  isMyShow(id): Observable<MyShow> {
    return this.http.get("/api/myshows/"+id).map(this.extractData).catch(this.handleError);
  }

  addMyShow(id): Observable<MyShow> {
    return this.http.get("/api/myshows/add/"+id).map(this.extractData).catch(this.handleError);
  }

  removeMyShow(id): Observable<MyShow> {
    return this.http.get("/api/myshows/remove/"+id).map(this.extractData).catch(this.handleError);
  }

  getMyShows(): Observable<Show[]> {
    return this.http.get("/api/myshows/desc").map(this.extractData).catch(this.handleError);
  }

  search(term): Observable<any> {
    return this.http.get("/api/search/"+term).map(this.extractData).catch(this.handleError);
  }

  getEpisodes(id, seasoncount): Observable<Episodes> {
    return this.http.get("/api/show/"+id+"/episodes/"+seasoncount).map(this.extractData).catch(this.handleError);
  }

  getEpisodeLink(id, season, episode): Observable<EpisodeLink> {
    return this.http.get("/api/show/"+id+"/season/"+season+"/episode/"+episode+"/links").map(this.extractData).catch(this.handleError);
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
