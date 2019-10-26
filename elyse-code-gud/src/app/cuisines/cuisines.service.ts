import { Injectable } from '@angular/core';

@Injectable({
  //providedIn 'root' means this a singleton service, and every component will share the same copy of it.
    providedIn: 'root'
})
export class CuisineService {
  cuisines = ['Tie', 'Chinese', 'American', "Bulge-arian", "Lesbianian", "Hungryan", "Viet-na'means?", "Czech",
"Feline", "Japanese", "Afrikaans"];
     likedCuisines = new Array<any>();
}