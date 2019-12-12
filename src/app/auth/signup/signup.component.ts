import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('signupFormA', { static: true }) signupFormA: NgForm;
  @ViewChild('signupFormB', { static: true }) signupFormB: NgForm;

  isReadOnly = true;
  tempUserName = 'GUEST';
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

    this.signupFormA.form.markAllAsTouched();
    if (this.signupFormA.invalid) {
      return;
    }

    const { email, password } = this.signupFormA.value;

    this.submittedUserData = {
      // tslint:disable-next-line: object-literal-shorthand
      email: email,
      // tslint:disable-next-line: object-literal-shorthand
      password: password,
    };

    this.signupFormA.reset();
  }

}
