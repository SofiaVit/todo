import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myBackgroundImageUrl = "../../assets/images/login-background.jpg";

  getBackgroundImageUrl() {
    return `url(${this.myBackgroundImageUrl})`
  }

}
