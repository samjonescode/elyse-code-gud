import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParamMapTutorialComponent } from './param-map-tutorial/param-map-tutorial.component';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { MaterialSliderFormComponent } from './material-slider-form/material-slider-form.component';
import { PokeHttpComponent } from './poke-http/poke-http.component';
import { MaterialPlaygroundComponent } from './alternate-todo-app/material-playground/material-playground.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { LoginFormComponent } from './login-form/login-form/login-form/login-form.component';


const routes: Routes = [
  {path: 'cuisines', component: CuisinesComponent},
  {path: 'paramMap', component: ParamMapTutorialComponent},
  {path: 'paramMap/:id/:name', component: ParamMapTutorialComponent},
  {path: 'sliders', component: MaterialSliderFormComponent},
  {path: 'pokeHttp', component: PokeHttpComponent},
  {path: 'alt-todo', component: MaterialPlaygroundComponent},
  {path: 'ng-switch', component: NgSwitchExampleComponent},
  {path: 'loginForm', component: LoginFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
