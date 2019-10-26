import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-param-map-tutorial',
  templateUrl: './param-map-tutorial.component.html',
  styleUrls: ['./param-map-tutorial.component.css']
})
export class ParamMapTutorialComponent implements OnInit {

  //model
  public student = {
    id: "",
    name: "",
    marks: ""
  };

  public students = [
    {"id": 1, "name": "Elyse", "marks": 800},
    {"id": 2, "name": "Sam", "marks": 1000},
    {"id": 3, "name": "David", "marks": 1},
    {"id": 4, "name": "Henry", "marks": 1}
    
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.student.id = params.get('id');
      this.student.name = params.get('name');
    })
  }

}
