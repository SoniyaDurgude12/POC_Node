import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestApiService } from '../Services/restApiService.service';
import { employee } from '../classes/employee';
import { Router, NavigationExtras } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-get-employee-by-id',
  templateUrl: './get-employee-by-id.component.html',
  styleUrls: ['./get-employee-by-id.component.css']
})
export class GetEmployeeByIdComponent implements OnInit {

  emp:employee;

  getEmpForm = new FormGroup({
    empId: new FormControl('')
  });

  constructor(private service:RestApiService,private router:Router) {

  }

  ngOnInit(): void {
  }

  getEmp(){
    const id = this.getEmpForm.controls['empId'].value;

    this.service.getEmployeeById(id).subscribe(
      (data)=>{
        this.emp = data["data"][0];
        alert("Employee : "+this.emp.empId+" "+this.emp.empName);
     },(error)=>
     {
      if (error.status === 401){
        const navigationExtras: NavigationExtras = {state: {data: 'You are not authorized to visit this route. Error Status- 401',message:error['error']['message'],errorMessage:error['message']}};
        this.router.navigate(['/internalError'],navigationExtras);
        //alert('You are not authorized to visit this route.  No data is displayed.');
      }
      if(error.status === 500){
        console.log(error);
        const navigationExtras: NavigationExtras = {state: {data: 'Internal server Error Status- 500',message:error['error']['message'],errorMessage:error['message']}};
        this.router.navigate(['/internalError'],navigationExtras);
      }
      console.log(error['error']['message']);
    }
    );
  }


}
