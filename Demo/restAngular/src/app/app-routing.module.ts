import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { AppComponent } from './app.component';
import { GetEmployeeByIdComponent } from './get-employee-by-id/get-employee-by-id.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ErrorComponent } from './error/error.component';
import { StudentComponent } from './student/student/student.component';
import { StudentLazyLoadingComponent } from './student-lazy-loading/student-lazy-loading/student-lazy-loading.component';

const routes: Routes = [
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
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
  },
  {
    path:"internalError",
    component:ErrorComponent
  },
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'studentLazyLoading',
    loadChildren:'./student-lazy-loading/student-lazy-loading.module#StudentLazyLoadingModule'
  },
  {
    path:'404',
    component:NotFoundComponentComponent
  },
  {
    path: '**', 
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
