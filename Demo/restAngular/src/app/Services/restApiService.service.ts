import { Injectable } from "@angular/core";
import { HttpClient,HttpParams} from '@angular/common/http';
import { employee } from '../classes/employee';

@Injectable()
export class RestApiService 
{
    constructor(private httpClient: HttpClient){

    }
    getEmployee(){
       return this.httpClient.get("/api/api/getEmployee");
    }

    getEmployeeById(id){
        return this.httpClient.get("/api/api/getEmployeeById/"+id);
    }

    addEmployee(emp:employee){
        return this.httpClient.post("/api/api/addEmployee",emp);
    }

    updateEmployee(emp){
        return this.httpClient.put("/api/api/updateEmployeeById",emp);
    }

    deleteEmployee(id){
        return this.httpClient.delete("/api/api/deleteEmployeeById/"+id);
    }
}