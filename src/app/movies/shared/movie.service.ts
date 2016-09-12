import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class MovieService {

  constructor(private jsonp:Jsonp) { }

  getPopularMovies(): Observable<any> {

    return this.jsonp.get('https://api.themoviedb.org/3/movie/popular?api_key=d1610e75d6045cf91414654b26f4aca2&callback=JSONP_CALLBACK&page=20').map(response => response.json());
  }


  getUpcomingMovies(): Observable<any> {
    return this.jsonp.get('https://api.themoviedb.org/3/movie/upcoming?api_key=d1610e75d6045cf91414654b26f4aca2&callback=JSONP_CALLBACK').map(response => response.json());
  }


  fetchMovie(movieId: number): Observable<any> {
    return this.jsonp.get('http://api.themoviedb.org/3/movie/'+movieId+'?api_key=d1610e75d6045cf91414654b26f4aca2&callback=JSONP_CALLBACK').map(response => response.json());
  }
}
