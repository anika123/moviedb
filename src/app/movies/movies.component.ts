import { Component } from '@angular/core';

import { MovieService } from './shared/movie.service';

@Component({
  moduleId: module.id,
  selector: 'app-movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css']
})
export class MoviesComponent {
  private movies;

  constructor(private movieService: MovieService) {

    this.movieService.getPopularMovies().subscribe(result => {
      this.movies = result.results;
    });
  }
}
