import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { JsonpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent }   from './app.component';
import { HeaderComponent, FooterComponent, HeaderImageComponent, FacebookShareComponent } from './shared';
import { MoviesComponent }   from './movies';
import { UpcomingMoviesComponent }   from './movies/upcoming-movies';
import { MovieDetailComponent }   from './movies/movie-detail';

import { MovieService } from './movies/shared/movie.service';

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        FooterComponent, 
        HeaderImageComponent, 
        FacebookShareComponent, 
        MoviesComponent,
        UpcomingMoviesComponent,
        MovieDetailComponent
    ],
    imports:      [BrowserModule, JsonpModule, routing],
    bootstrap:    [AppComponent],
    providers:    [MovieService]
})
export class AppModule {}