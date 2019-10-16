import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComComponent } from './films-com/films-com.component';
import { MainComponent } from './main/main.component';
import { FilmsItemComponent } from './films-item/films-item.component';


const routes: Routes = [
{path: 'pelicula', component: FilmsComComponent },
{path: '', component: MainComponent },
{path: 'Inicio', component: MainComponent },
{path: 'pelicula/:id', component: FilmsItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
