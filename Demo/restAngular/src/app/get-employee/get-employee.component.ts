import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../Services/restApiService.service';
import { employee } from '../classes/employee';
import { Router, NavigationExtras } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {

  listOfEmployees:employee[];
  constructor(private service:RestApiService,private router:Router) {
    
  }

  ngOnInit(): void {
    this.service.getEmployee().subscribe(
      (data)=>{
        this.listOfEmployees = data['results'];
      },
      (error) => {
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
        console.log(error);
      }, 

      () => {
        console.log('HTTP request done');
      }
    );
  }

}
