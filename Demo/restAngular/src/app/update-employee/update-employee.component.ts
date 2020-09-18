import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { employee } from '../classes/employee';
import { RestApiService } from '../Services/restApiService.service';

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

  constructor(private service:RestApiService) { 

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
          alert('You are not authorized to visit this route.  No data is displayed.');
        }
        console.log(error['error']['message']);
        alert(error['error']['message']);
      }
    );
  }

}
