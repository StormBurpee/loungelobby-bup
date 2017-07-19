import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User, UserStatus } from '../../classes/user/user';

@Injectable()
export class UserService {

  private links = {
    loggedIn: "/api/user/loggedin",
    login: "/api/user/login",
    register: "/api/user/register",
    logout: "/api/user/logout",
    user: "/api/user/me"
  }

  constructor( private http: Http ) { }

  isLoggedIn(): Observable<UserStatus> {
    return this.http.get(this.links.loggedIn).map(this.extractData).catch(this.handleError);
  }

  login(username, password): Observable<object> {
    return this.http.post(this.links.login, {u: username, p: password}).map(this.extractData).catch(this.handleError);
  }

  register(username, password, email): Observable<object> {
    return this.http.post(this.links.login, {u: username, p: password, e: email}).map(this.extractData).catch(this.handleError);;
  }

  logout(): Observable<UserStatus> {
    return this.http.get(this.links.logout).map(this.extractData).catch(this.handleError);
  }

  me(): Observable<User> {
    return this.http.get(this.links.user).map(this.extractData).catch(this.handleError);;
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
