import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentLazyLoadingComponent } from './student-lazy-loading/student-lazy-loading.component';

const routes: Routes = [
  {
    path:'',
    component:StudentLazyLoadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentLazyLoadingRoutingModule { }
