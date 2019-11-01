import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.css']
})
export class NgClassExampleComponent implements OnInit {
 meals: Array<any>;
 mealsObjects: Array<Object>;
  constructor() { }

  ngOnInit() {
    this.mealsObjects = [
      {name:"salad",
      isHealthy:true},
      {name: "veggie burger",
      isHealthy: true},
      {name: "fries",
      isHealthy:false},
      {name: "bread",
    isHealthy: null}
    ]

    this.meals = ['salad', 'beyond burger', 'french fries']
  }

}
