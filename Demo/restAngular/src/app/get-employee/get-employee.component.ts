import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../Services/restApiService.service';
import { employee } from '../classes/employee';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {

  listOfEmployees:employee[];
  constructor(private service:RestApiService) {

  }

  ngOnInit(): void {
    this.service.getEmployee().subscribe(
      (data)=>{
        this.listOfEmployees = data['results'];
      }
    );
  }

}
