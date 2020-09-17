import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestApiService } from '../Services/restApiService.service';
import { employee } from '../classes/employee';

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

  constructor(private service:RestApiService) {

  }

  ngOnInit(): void {
  }

  getEmp(){
    const id = this.getEmpForm.controls['empId'].value;

    this.service.getEmployeeById(id).subscribe(
      (data)=>{
        this.emp = data["data"][0];
        alert("Employee : "+this.emp.empId+" "+this.emp.empName);
     },(error)=>{
      console.log(error['error']['message']);
       alert(error['error']['message']);
      }
    );
  }


}
