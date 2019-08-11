import { Component, OnInit } from '@angular/core';
import { MovieService} from '../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  // Permet de pouvoir utiliser le service Movie
  constructor(
    private movies: MovieService,
  ) {}

  ngOnInit() {
  }
// Vous devez écrire la fonction qui va vous permettre de demander au service de récupérer les film
//  Pour cela il vous faut récupérer les infos dans le champ Input du Html
//  et pouvoir ensuite les afficher en retour.
// Good luck ;)

}
