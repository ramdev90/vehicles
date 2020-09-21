import { Component } from '@angular/core';
import {
  AuthenticationService,
  TokenPayload,
} from '../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
  credentials: TokenPayload = {
    email: '',
    password: '',
  };
  isLogin = true;

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/dashboard2/profile');
        this.isLogin = true;
      },
      (err) => {
        console.error(err);
        this.isLogin = false;
      }
    );
  }
}
