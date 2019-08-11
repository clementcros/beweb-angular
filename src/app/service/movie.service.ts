import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = '?api_key=1bded0cf5ec81699b719a0ab217e461e';
  private apiUrl = 'https://api.themoviedb.org/';
  constructor(
    private http: HttpClient,
  ) { }

  search(query) {
    query = this.convertToSlug(query);
    return this.http.get(this.apiUrl + '3/search/movie' + this.apiKey + '&query=' + query );
  }


  // cette fonction permet de convertir les caractère dis spécial ( & , é, @ .... )
  convertToSlug(string) {
    string = string.toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '+')
      .replace(/-+/g, '+');
    return string;
  }
}
