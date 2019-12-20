import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild('loginForm', { static: true }) loginForm: NgForm;
  isReadOnly = true;
  submittedUserData = {
    email: null,
    password: null,
  };
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe((authStatus) => {
      console.log('TCL: LoginComponent -> ngOnInit -> authStatus', authStatus);
    });


    // deal with pesky autocomplete
    setTimeout(() => {
      this.isReadOnly = false;
    }, 1000);
  }

  onSubmit() {

    this.loginForm.form.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    this.submittedUserData = {
      // tslint:disable-next-line: object-literal-shorthand
      email: email,
      // tslint:disable-next-line: object-literal-shorthand
      password: password,
    };

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    this.loginForm.reset();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
