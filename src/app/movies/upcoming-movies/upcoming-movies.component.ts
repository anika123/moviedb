import { Component, OnInit } from '@angular/core';

import { MovieService } from '../shared/movie.service';

@Component({
  moduleId: module.id,
  selector: 'app-upcoming-movies',
  templateUrl: 'upcoming-movies.component.html',
  styleUrls: ['upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {
  private movies;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getUpcomingMovies().subscribe(result => {
      this.movies = result.results;
    });
  }

}
