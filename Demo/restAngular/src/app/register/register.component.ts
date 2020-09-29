import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../Classes/user';
import { RestApiService } from '../Services/restApiService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  user =  new User();
  constructor(private service:RestApiService) {
    
  }

  ngOnInit(): void {
  }

  register(){
    this.user.email = this.registerForm.controls['email'].value;
    this.user.password = this.registerForm.controls['password'].value;

    this.service.register(this.user).subscribe(
      (data)=> {
        alert(data['sucess']);
        console.log(data);
      },

      // If there is an error
      (error) => {
        console.log(error);
      },
      
      // When observable completes
      () => {
        console.log('done!');
      }
    );
  }

}
