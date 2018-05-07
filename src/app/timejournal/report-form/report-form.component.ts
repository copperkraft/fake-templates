import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as Pikaday from 'pikaday';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.less']
})
export class ReportFormComponent implements AfterViewInit {
  @ViewChild('calendar') calendar: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    const picker = new Pikaday({ field: this.calendar.nativeElement });
  }
}
