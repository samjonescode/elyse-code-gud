import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-switch-example',
  templateUrl: './ng-switch-example.component.html',
  styleUrls: ['./ng-switch-example.component.css']
})
export class NgSwitchExampleComponent implements OnInit {
  recipes: Array<any>;
  constructor() { }

  ngOnInit() {

  this.recipes = [
    {name: "black beans", cuisine: "vegan"},
    {name: "Steak", cuisine: "none"},
    {name: "Eggs", cuisine: "vegetarian"},
    {name: "salmon", cuisine: "pescetarian"},
    {name: "salad", cuisine: "vegan"},
    {name: "cheeseburger", cuisine: "none"},
    {name: "cheese pizza", cuisine: "vegetarian"}

  ]
  }

}
