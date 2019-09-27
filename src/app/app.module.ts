import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { RightMenuComponent } from './right-menu/right-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    RightMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
