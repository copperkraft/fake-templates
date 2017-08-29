import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.less']
})
export class PaginatorComponent implements OnInit {
  pages: number[];

  @Input() set pageCount(value: number) {
    this.pages = Array.from(Array(value).keys());
  }

  @Input() page: number;
  @Output() pageChange = new EventEmitter<number>();

  select(page: number) {
    this.pageChange.emit(page);
  }

  constructor() { }

  ngOnInit() {
  }
}
