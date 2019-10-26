import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//angular material imports
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { ClickableCuisineComponent } from './cuisines/clickable-cuisine/clickable-cuisine.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParamMapTutorialComponent } from './param-map-tutorial/param-map-tutorial.component';
import { MaterialSliderFormComponent } from './material-slider-form/material-slider-form.component';
import { PokeHttpComponent } from './poke-http/poke-http.component';
import { HttpClientModule } from '@angular/common/http';
import { AltAddToDoComponent } from './alternate-todo-app/alt-add-to-do/alt-add-to-do.component';
import { AltToDoItemComponent } from './alternate-todo-app/to-do-item/to-do-item.component';
import { MaterialPlaygroundComponent } from './alternate-todo-app/material-playground/material-playground.component';

@NgModule({
  declarations: [
    AppComponent,
    CuisinesComponent,
    ClickableCuisineComponent,
    ParamMapTutorialComponent,
    MaterialSliderFormComponent,
    PokeHttpComponent,
    AltAddToDoComponent,
    AltToDoItemComponent,
    MaterialPlaygroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //material imports
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    //alternate todo things 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
