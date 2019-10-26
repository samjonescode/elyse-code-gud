import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParamMapTutorialComponent } from './param-map-tutorial/param-map-tutorial.component';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { MaterialSliderFormComponent } from './material-slider-form/material-slider-form.component';
import { PokeHttpComponent } from './poke-http/poke-http.component';


const routes: Routes = [
  {path: 'cuisines', component: CuisinesComponent},
  {path: 'paramMap', component: ParamMapTutorialComponent},
  {path: 'paramMap/:id/:name', component: ParamMapTutorialComponent},
  {path: 'sliders', component: MaterialSliderFormComponent},
  {path: 'pokeHttp', component: PokeHttpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
