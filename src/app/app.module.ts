import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { SearchbarComComponent } from './searchbar-com/searchbar-com.component';
import { FilmsComComponent } from './films-com/films-com.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { FilmsItemComponent } from './films-item/films-item.component';
import { PeopleComComponent } from './people-com/people-com.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    SearchbarComComponent,
    FilmsComComponent,
    MainComponent,
    FilmsItemComponent,
    PeopleComComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
