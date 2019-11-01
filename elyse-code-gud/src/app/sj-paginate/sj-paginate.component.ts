import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
// import { paginate } from "./jw-paginate";

@Component({
  selector: 'app-sj-paginate',
  templateUrl: './sj-paginate.component.html',
  styleUrls: ['./sj-paginate.component.css']
})
export class SjPaginateComponent implements OnInit {
  @Input() items: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage =1;
  @Input() pageSize = 10;
  @Input() maxPages = 10;

  pager: any = {};


  constructor() { }

  ngOnInit() {
    //set page if items array is not empty
    if (this.items && this.items.length){
      this.setPage(this.initialPage)
    }
  }

  ngOnChanges(changes: SimpleChanges){
    //reset page if items array has changed
    if (changes.items.currentValue !== changes.items.previousValue){
      this.setPage(this.initialPage);
    }
  }

  private setPage(page: number){
    //get new pager obj 
    // this.pager = paginate(this.items.length, page, this.pageSize, this.maxPages);

    // 
    var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);

    this.changePage.emit(pageOfItems);

  }

}
