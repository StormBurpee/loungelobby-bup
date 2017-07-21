import { Component, OnInit, Input } from '@angular/core';

import { User, UserStatus } from '../../classes/user/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [ UserService ]
})
export class SidebarComponent implements OnInit {

  private errorMessage: string;
  private logoutResult: UserStatus;

  @Input()
  loggedIn: boolean;

  constructor( private userService: UserService ) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout().subscribe(
      uStatus => this.logoutResult = uStatus,
      error => this.errorMessage = <any>error,
      () => window.location.href = "/"
    );
  }

}
