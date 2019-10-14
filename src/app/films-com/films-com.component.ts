import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-films-com',
  templateUrl: './films-com.component.html',
  styleUrls: ['./films-com.component.css']
})
export class FilmsComComponent implements OnInit {
  // Swapi url & empty obj tu push response
  filmsUrl = 'https://swapi.co/api/films';
  // items = [];
  movies: any[] = [];
 
  constructor(private http: HttpClient) { }

  getFilms(){
    return this.http.get(this.filmsUrl);
  }

  
 public ngOnInit()
  {
      this.getFilms().subscribe(
      (data) => {
        this.movies = data['results'];
      },
      (error) => {
        console.error(error);
      });
  }

}
