import { Injectable } from '@angular/core';
import {AuthDetailsModule} from "./auth-details.module";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(authDetails: AuthDetailsModule) {
    return (authDetails.email === "admin@gmail.com" || authDetails.password === "admin");
  }

}
