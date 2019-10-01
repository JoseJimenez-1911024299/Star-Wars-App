import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-com',
  templateUrl: './films-com.component.html',
  styleUrls: ['./films-com.component.css']
})
export class FilmsComComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
