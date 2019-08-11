import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSaveComponent } from './movie-save/movie-save.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MovieListComponent,
    MovieSaveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
