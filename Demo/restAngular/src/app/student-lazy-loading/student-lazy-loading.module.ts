import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentLazyLoadingRoutingModule } from './student-lazy-loading-routing.module';
import { StudentLazyLoadingComponent } from './student-lazy-loading/student-lazy-loading.component';


@NgModule({
  declarations: [StudentLazyLoadingComponent],
  imports: [
    CommonModule,
    StudentLazyLoadingRoutingModule
  ]
})
export class StudentLazyLoadingModule {
  constructor(){
    console.log("student Lazy Loading module loaded");
  }
 }
