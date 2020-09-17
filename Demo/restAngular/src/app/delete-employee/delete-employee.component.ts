import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestApiService } from '../Services/restApiService.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  
  deleteEmpForm = new FormGroup({
    empId: new FormControl('')
  });
  constructor(private service:RestApiService) { 

  }

  ngOnInit(): void {
  }

  deleteEmp(){
    const id = this.deleteEmpForm.controls['empId'].value;

    this.service.deleteEmployee(id).subscribe(
      (data)=>{
        alert(data['message']);
      },(error)=>{
        console.log(error['error']['message']);
         alert(error['error']['message']);
        }
    );
  }

}
