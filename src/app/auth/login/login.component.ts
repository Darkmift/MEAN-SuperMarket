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
  submitted = false;
  submittedUserData = {
    email: null,
    password: null,
  };

  ngOnInit() {
    //deal with pesky autocomplete
    setTimeout(() => {
      this.isReadOnly = false;
    }, 2000);
  }

  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
  }

}
