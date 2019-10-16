import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films } from './films';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

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
