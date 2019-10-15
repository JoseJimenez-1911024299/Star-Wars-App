import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsServiceService {
  apisUrl = 'https://swapi.co/api/';
  // items = [];
  movies: any[] = [];
  constructor(private http: HttpClient) {

   }

   getFilms(){
    return this.http.get(this.apisUrl);
  }
}
