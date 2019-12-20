import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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
    email: 'test5@email.com',
    password: 'MooCow1',
  };
  private authStatusSub: Subscription;

  constructor(public authService: AuthService, private toastService: ToastrService) { }

  ngOnInit() {
    // deal with pesky autocomplete
    setTimeout(() => {
      this.isReadOnly = false;
    }, 1000);
  }

  onSubmit(form: NgForm) {

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
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe((authStatus) => {
      if (!authStatus) {
        this.toastService.error('Please try again', 'Not authorized', { progressBar: true });
        form.controls.email.setErrors({ invalidID: true });
        form.controls.password.setErrors({ invalidID: true });
        this.submittedUserData.password = '';
      }
    });
  }

  ngOnDestroy() {

    if (this.authStatusSub !== undefined) {
      this.authStatusSub.unsubscribe();
    }

  }

}
