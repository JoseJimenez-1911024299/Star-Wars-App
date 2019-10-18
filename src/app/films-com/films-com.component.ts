import { Component, OnInit } from '@angular/core';
import { FilmsServiceService } from './films-service.service';
import { Films } from './films';

@Component({
  selector: 'app-films-com',
  templateUrl: './films-com.component.html',
  styleUrls: ['./films-com.component.css']
})
export class FilmsComComponent implements OnInit {

  movies: any[] = [];

  constructor(public films: FilmsServiceService) { }

 public ngOnInit()  {

    this.CargarPeliculas();

   }

   CargarPeliculas() {
    return this.films.getFilms().subscribe((data: {}) =>{
      this.movies = data['results'];
    })
   }

}
