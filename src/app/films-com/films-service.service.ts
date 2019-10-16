import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Films } from './films';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmsServiceService {
  apisUrl = 'https://swapi.co/api/';
  // items = [];
  constructor(private http: HttpClient) {

   }

   HttpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
   }

   getFilms(): Observable<Films> {
    return this.http.get<Films>(this.apisUrl + 'films').pipe(
      retry(1),
      catchError(this.handleError)
    )}

   getFilmsid(id): Observable<Films> {
    return this.http.get<Films>(this.apisUrl + 'films/'+id+'/')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // Error handling
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
