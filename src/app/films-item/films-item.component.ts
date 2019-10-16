import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsServiceService } from '../films-com/films-service.service';

@Component({
  selector: 'app-films-item',
  templateUrl: './films-item.component.html',
  styleUrls: ['./films-item.component.css']
})
export class FilmsItemComponent implements OnInit {

  constructor(
    public filmsApi: FilmsServiceService,
    public actRoute: ActivatedRoute,
    public router: Router) {

   }
   id = this.actRoute.snapshot.paramMap.get('id');
   films_data: any[]=[];
  ngOnInit() {
    console.log(this.id);
      this.filmsApi.getFilmsid(this.id).subscribe((data:{})=>{
        this.films_data = data['results'];
        console.log( data['results']);
      });


  }


}
