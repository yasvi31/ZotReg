import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username:string;
  password:string;

  constructor() {
    this.username="";
    this.password="";
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.username,this.password);
  }

}
