import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-films-com',
  templateUrl: './films-com.component.html',
  styleUrls: ['./films-com.component.css']
})
export class FilmsComComponent implements OnInit {
  //Swapi url & empty obj tu push response
  filmsUrl = 'https://swapi.co/api/films';
  //items = [];

  constructor(private http: HttpClient) { 
    //get observable, imprimir peticion por consola
    this.http.get(this.filmsUrl).toPromise().then(data => {
      console.log(data);
      //recorrer y almacenar valores en arreglo items
      /*for (const key in data.results) {
        if (data.results.hasOwnProperty(key)) {
          this.items.push(data.results[key]);
        }
      }*/

    });

  }

  ngOnInit() {
  }

}
