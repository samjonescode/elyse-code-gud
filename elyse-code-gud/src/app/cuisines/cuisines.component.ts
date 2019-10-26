import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CuisineService } from './cuisines.service';

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css']
})
export class CuisinesComponent implements OnInit {
  preferencesForm: FormGroup;
  registerForm: FormGroup;
  sliderVal: number;
  likedCuisines: any;
  cuisines: any;

  address: string;
  constructor(private cuisineService: CuisineService) { }

  ngOnInit() {
    //set the cuisines on this component equal to the cuisineService cuisines.
    this.cuisines = this.cuisineService.cuisines;
    //set the likedCuisines array of this component to the likedCuisines of the cuisineService
    this.likedCuisines = this.cuisineService.likedCuisines;

  
    //form group with one form control for address.
    this.registerForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      // 'lastName': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      
    })
    }

  // runs when registerForm is submitted.
  logRegisterValues(){
    this.address = this.registerForm.value.address
    this.registerForm.reset();
  }

  submitPreferences(){
    alert(`Preferences are: ${this.cuisineService.likedCuisines}`)
  }

 
  }

