import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestApiService } from '../Services/restApiService.service';
import { Router, NavigationExtras } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  
  deleteEmpForm = new FormGroup({
    empId: new FormControl('')
  });
  constructor(private service:RestApiService,private router:Router) { 
    
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
