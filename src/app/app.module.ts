import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { SearchbarComComponent } from './searchbar-com/searchbar-com.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    RightPanelComponent,
    SearchbarComComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
