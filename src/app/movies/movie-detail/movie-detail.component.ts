import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

import { MovieService } from '../shared/movie.service';

@Component({
  moduleId: module.id,
  selector: 'app-movie-detail',
  templateUrl: 'movie-detail.component.html',
  styleUrls: ['movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  private sub: Subscription;
  private movie;

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) {  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.movieService.fetchMovie(params['id']).subscribe(result => {
      this.movie = result;
    })
   });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
