import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  @ViewChild('loginForm', { static: true }) loginForm: NgForm;
  submitted = false;
  submittedUserData = {
    email: null,
    password: null,
  };


  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
  }

}
