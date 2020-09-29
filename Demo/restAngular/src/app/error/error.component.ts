import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  data : string;
  errorMessage:string;
  message:string;
  constructor(private router:Router) {

    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {data: string};
    const state1 = navigation.extras.state as {errorMessage: string};
    const state2 = navigation.extras.state as {message: string};

    this.data = state.data;
    this.errorMessage = state1.errorMessage;
    this.message = state2.message;

    //console.log("fdgDSH",state1.errorObject);
  }
  ngOnInit(): void {
  }

}
