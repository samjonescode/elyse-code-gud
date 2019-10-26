import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CuisineService } from '../cuisines/cuisines.service';

@Component({
  selector: 'app-material-slider-form',
  templateUrl: './material-slider-form.component.html',
  styleUrls: ['./material-slider-form.component.css']
})
export class MaterialSliderFormComponent implements OnInit {
  sliderForm: FormGroup;
  cuisines: any;


  constructor(private cuisineService: CuisineService) { }

  ngOnInit() {
      //initialize slider form
      this.initializeSliderForm();

      this.cuisines = this.cuisineService.cuisines;
  }

  initializeSliderForm(){
    this.sliderForm = new FormGroup({})
      for(let c of this.cuisineService.cuisines){
        this.sliderForm.setControl(c, new FormControl(0, Validators.required));
      }
  }

  submitSliderForm(){
    console.log(this.sliderForm.value)
    alert(JSON.stringify(this.sliderForm.value))
  }
}
