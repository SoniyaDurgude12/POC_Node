import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { AppComponent } from './app.component';
import { GetEmployeeByIdComponent } from './get-employee-by-id/get-employee-by-id.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

const routes: Routes = [
  {
    path:'addEmp',
    component:AddEmployeeComponent
  },
  {
    path:'getEmployees',
    component:GetEmployeeComponent
  },
  {
    path:'getEmployeeById',
    component:GetEmployeeByIdComponent
  },
  {
    path:'updateEmployee',
    component:UpdateEmployeeComponent
  },
  {
    path:'deleteEmployee',
    component:DeleteEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
