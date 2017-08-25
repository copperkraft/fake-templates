import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    SharedModule,
    SearchRoutingModule,
    MyDatePickerModule
  ],
  declarations: [
    SearchComponent,
    PaginatorComponent
  ]
})
export class SearchModule { }
