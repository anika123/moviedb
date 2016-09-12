import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies';
import { UpcomingMoviesComponent } from './movies/upcoming-movies';
import { MovieDetailComponent } from './movies/movie-detail';

const appRoutes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent
  },
  {
    path: 'upcoming-movies',
    component: UpcomingMoviesComponent
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);