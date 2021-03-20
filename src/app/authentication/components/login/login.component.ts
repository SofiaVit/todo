import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthDetailsModule} from "../../auth-details.module";
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authenticationAlertClosed = true;
  authDetails = new AuthDetailsModule();
  @ViewChild('staticAlert', {static: false}) authenticationAlert: NgbAlert;

  constructor() {
  }

  ngOnInit(): void {
  }

  authenticateLogin() {
    if(this.authDetails.email !== "admin@gmail.com" || this.authDetails.password !== "123") {
      this.authenticationAlertClosed = false;
      setTimeout(() => this.authenticationAlert.close(), 10000);
    }
    console.log(this.authDetails.email);
    console.log(this.authDetails.password);
  }

}
