import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { NgForm, Validators, FormGroup } from '@angular/forms';
import { User } from '../models/user.model';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('signupFormA', { static: true }) signupFormA: NgForm;
  @ViewChild('signupFormB', { static: true }) signupFormB: NgForm;

  constructor(public authService: AuthService, ) { }

  isReadOnly = true;
  tempUserName = 'GUEST';
  submittedUserData: User;
  partOneValid = false;
  private validTzId: Subscription;
  cannotRegisterId = false;

  cityList = ['Tel-Aviv', 'Holon', 'Arad', `Be'er Sheva`, 'Yokneam', 'Rehovot', 'Safed', 'Netivot', 'Eilat', 'Metula'];

  ngOnInit() {

    // handle this.authservice.idExists() response
    this.validTzId = this.authService.getvalidIdListener().subscribe((canUseId) => {
      this.partOneValid = canUseId;
      if (canUseId) {
        this.signupFormA.reset();
        this.partOneValid = true;
      } else {
        this.cannotRegisterId = true;
        this.partOneValid = true;
        this.signupFormA.controls.tzId.setErrors({ invalidID: true });
      }
    });

    // init user data model for ngform use
    this.submittedUserData = {
      email: '',
      tzId: '',
      password: '',
      confirmPassword: '',
      city: '',
      street: '',
      firstname: '',
      lastname: '',
    };

    // deal with pesky autocomplete
    setTimeout(() => {
      this.isReadOnly = false;
    }, 1000);
    this.submittedUserData.city = this.cityList[0];
  }

  ngAfterViewInit() {

  }

  onSubmitPartOne(signupFormA: NgForm) {

    if (signupFormA.invalid) {
      return;
    }

    this.authService.idExists(this.submittedUserData.tzId);

  }

  onSubmitB() { }

  ngOnDestroy() {
    this.validTzId.unsubscribe();
  }

}
