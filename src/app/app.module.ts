import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from "@angular/flex-layout";
import { SlickModule } from 'ngx-slick';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLoggedinComponent } from './components/header-loggedin/header-loggedin.component';

import { MaterialModule } from '@angular/material';

import 'hammerjs';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountComponent } from './components/account/account.component';
import { ShowComponent } from './components/show/show.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WatchComponent } from './components/watch/watch.component';
import { MyshowsComponent } from './components/myshows/myshows.component';


import { VgCoreModule} from 'videogular2/core';
import { VgControlsModule} from 'videogular2/controls';
import { VgOverlayPlayModule} from 'videogular2/overlay-play';
import { VgBufferingModule} from 'videogular2/buffering';
import { SearchComponent } from './components/search/search.component';

import { AdsenseModule } from 'ng2-adsense';

const appRoutes: Routes = [
  { path: "", component: IndexComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "account/:id", component: AccountComponent },
  { path: "show/:id", component: ShowComponent },
  { path: "watch/:id/:season/:episode", component: WatchComponent },
  { path: "myshows", component: MyshowsComponent },
  { path: "search", component: SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLoggedinComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    ShowComponent,
    SidebarComponent,
    WatchComponent,
    MyshowsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    SlickModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    AdsenseModule.forRoot({
      adClient: 'ca-pub-6794588189560732',
      adSlot: 5102778807
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
