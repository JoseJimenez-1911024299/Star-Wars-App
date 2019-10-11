import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComComponent } from './films-com/films-com.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
{path: 'pelicula', component: FilmsComComponent },
{path: '', component: MainComponent },
{path: '**', component: MainComponent },
{path: 'Inicio', component: MainComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
