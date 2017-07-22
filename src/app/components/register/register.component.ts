import { Component, OnInit } from '@angular/core';
import { MdCardModule, MdInputModule, MdButtonModule, MdProgressSpinnerModule } from '@angular/material';

import { User, UserStatus } from '../../classes/user/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ UserService ]
})

export class RegisterComponent implements OnInit {

  errorMessage: string;
  loginResult;

  loginError;
  loginMessage;

  constructor( private userService: UserService ) { }

  ngOnInit() {
  }

  doLogin(user, password, email) {
    this.userService.register(user, password, email).subscribe(
      uR => this.loginResult = uR,
      error => this.errorMessage = <any>error,
      () => this.processLogin()
    );
    //console.log(user, password);
  }

  processLogin() {
    if(this.loginResult.error && this.loginResult.error == true) {
      console.log(this.loginResult);
      this.loginError = true;
      this.loginMessage = this.loginResult.errormessage;
    } else {
      window.location.href = "/";
    }
  }

  keyup(event: any, u, p, e) {
    if(event.keyCode == 13) {
      this.doLogin(u, p, e);
    }
  }

}
