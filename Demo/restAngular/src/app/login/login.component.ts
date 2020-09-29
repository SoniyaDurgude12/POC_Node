import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../Classes/user';
import { RestApiService } from '../Services/restApiService.service';
import { AuthService } from '../Services/auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  user = new User();
  constructor(private service:RestApiService,private authService:AuthService,private router:Router) {
    
  }

  ngOnInit(): void {
  }

  login(){
    this.user.email = this.loginForm.controls['email'].value;
    this.user.password = this.loginForm.controls['password'].value;

    this.service.login(this.user).subscribe(
      (data)=> {
        this.authService.setLocalStorage(data);
        alert(data['sucess']);
      },

      // If there is an error
      (error) => {
        alert(error['message']);
        console.log(error);
      },
      
      // When observable completes
      () => {
        console.log('done!');
        //this.router.navigate(['getEmployees']);
      }
    );
  }

}
