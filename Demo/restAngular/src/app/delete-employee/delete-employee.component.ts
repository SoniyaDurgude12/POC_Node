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
