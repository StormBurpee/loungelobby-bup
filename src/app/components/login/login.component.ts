import { Component, OnInit } from '@angular/core';
import { MdCardModule, MdInputModule, MdButtonModule } from '@angular/material';

import { User, UserStatus } from '../../classes/user/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ UserService ]
})
export class LoginComponent implements OnInit {

  private errorMessage: string;
  private loginResult;

  constructor( private userService: UserService ) { }

  ngOnInit() {
  }

  doLogin(user, password) {
    this.userService.login(user, password).subscribe(
      user => this.loginResult = user,
      error => this.errorMessage = <any>error,
      () => this.processLogin()
    );
    //console.log(user, password);
  }

  processLogin() {
    if(this.loginResult.error && this.loginResult.error == true) {
      console.log(this.loginResult);
    }
  }

}
