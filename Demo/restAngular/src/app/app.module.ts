import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RestApiService } from './Services/restApiService.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { GetEmployeeByIdComponent } from './get-employee-by-id/get-employee-by-id.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './Services/auth.service';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ErrorComponent } from './error/error.component';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    GetEmployeeComponent,
    GetEmployeeByIdComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponentComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StudentModule
  ],
  providers: [RestApiService,AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
