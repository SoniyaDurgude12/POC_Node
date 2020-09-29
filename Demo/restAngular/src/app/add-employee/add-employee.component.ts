import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestApiService } from '../Services/restApiService.service';
import { employee } from '../classes/employee';
import { Router, NavigationExtras } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmpForm = new FormGroup({
    empId: new FormControl(''),
    empName: new FormControl(''),
  });

  emp = new employee();
  constructor(private service:RestApiService,private router:Router) 
  {
    
  }

  ngOnInit(): void {
  }

  addEmp() {
    this.emp.empId = this.addEmpForm.controls['empId'].value;
    this.emp.empName = this.addEmpForm.controls['empName'].value;
    this.service.addEmployee(this.emp).subscribe(
      (data)=>{
        alert(data['message']);
      },(error)=>{
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
      }
    );
  }

}
