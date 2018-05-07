import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

/* The SharedModule may re-export other widget modules, such as CommonModule,
FormsModule, and modules with the UI controls that you use most widely.*/

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
