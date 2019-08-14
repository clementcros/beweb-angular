import {Component, Input, OnInit, Output} from '@angular/core';
import { MovieService} from '../service/movie.service';
import {EventEmitter} from '@angular/core';
import {sample} from 'rxjs/operators';

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
  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();
  @Input() favorite = [];
  @Output() favoriteAdd = new EventEmitter<[]>();
  private saveFavorite: any;


  ngOnInit() {
  }

  search(filter) {
    this.movies.search(filter)
      .subscribe(
        (response) => {
          this.moviesList = response['results'];
        }
      );
  }

  addNewFavorite(image, title, resume) {

    this.counterChange.emit(++this.counter);
    this.saveFavorite = {image, title, resume};
    // @ts-ignore
    this.favoriteAdd.emit(this.favorite.push(this.saveFavorite));
  }
}
