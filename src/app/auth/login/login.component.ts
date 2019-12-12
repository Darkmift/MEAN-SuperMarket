import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @ViewChild('loginForm', { static: true }) loginForm: NgForm;
  isReadOnly = true;
  submittedUserData = {
    email: null,
    password: null,
  };

  ngOnInit() {
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

    this.loginForm.reset();
  }

}
