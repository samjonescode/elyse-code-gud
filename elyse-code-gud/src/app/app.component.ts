import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'elyse-code-gud';
  paginationItems = [];
  pageOfItems: Array<any>;

  ngOnInit(){
    //example array of 100 items
    this.paginationItems = Array(100).fill(0).map((x,i)=>({id: (i+1), name: `Item ${i + 1}`}));
  }

  onChangePage(pageOfItems: Array<any>){
    //update the page
    this.pageOfItems = pageOfItems;
  }
}
