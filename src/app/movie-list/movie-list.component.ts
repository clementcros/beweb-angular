import {Component, OnInit} from '@angular/core';
import { MovieService} from '../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(
    private movies: MovieService,
  ) {
  }
  filter = '';
  moviesList = [];

  ngOnInit() {
  }

  search(filter) {
    this.movies.search(filter)
      .subscribe(
        (response) => {
          console.log(response);
          this.moviesList = response['results'];
        }
      );
  }
}
