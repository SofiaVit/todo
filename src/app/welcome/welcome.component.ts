import {Component, Input, OnInit} from '@angular/core';
import {AuthDetailsModule} from "../authentication/auth-details.module";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName: string;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.userName = params['userName'];
    })
  }

  ngOnInit(): void {
  }

}
