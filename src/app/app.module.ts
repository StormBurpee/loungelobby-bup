import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLoggedinComponent } from './components/header-loggedin/header-loggedin.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLoggedinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
