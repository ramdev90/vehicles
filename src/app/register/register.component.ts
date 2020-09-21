import { Component } from '@angular/core';
import {
  AuthenticationService,
  TokenPayload,
} from '../shared/authentication.service';
import { Router, Routes, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: '',
  };

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigate(['phone'], { relativeTo: this.route });
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
