import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { employee } from '../classes/employee';
import { RestApiService } from '../Services/restApiService.service';
import { Router, NavigationExtras } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  emp = new employee();

  updateEmpForm = new FormGroup({
    empId: new FormControl(''),
    empName: new FormControl('')
  });

  constructor(private service:RestApiService,private router:Router) { 
    
  }

  ngOnInit(): void {
  }

  updateEmp(){
    this.emp.empId = this.updateEmpForm.controls['empId'].value;
    this.emp.empName = this.updateEmpForm.controls['empName'].value;

    this.service.updateEmployee(this.emp).subscribe(
      (data)=>{
        alert(data['message']);
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
