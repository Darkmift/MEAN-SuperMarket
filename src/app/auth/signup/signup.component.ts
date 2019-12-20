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

  // @ViewChild('signupFormA', { static: true }) signupFormA: NgForm;
  // @ViewChild('signupFormB', { static: true }) signupFormB: NgForm;

  constructor(public authService: AuthService, ) { }

  isLoading = true;
  isReadOnly = true;
  tempUserName = 'GUEST';
  submittedUserData: User;
  partOneValid = false;
  private validTzId: Subscription;
  cannotRegisterId = false;

  cityList = ['Select City', 'Tel-Aviv', 'Holon', 'Arad', `Be'er Sheva`, 'Yokneam', 'Rehovot', 'Safed', 'Netivot', 'Eilat', 'Metula'];

  ngOnInit() {
    this.isLoading = false;
    // init user data model for ngform use
    this.submittedUserData = {
      email: 'test2@email.com',
      tzId: '789546322',
      password: 'MooCow1',
      confirmPassword: 'MooCow1',
      city: this.cityList[4],
      street: 'Moo St',
      firstname: 'Jerry',
      lastname: 'Seinfeld',
      // email: '',
      // tzId: '',
      // password: '',
      // confirmPassword: '',
      // city: '',
      // street: '',
      // firstname: '',
      // lastname: '',
    };

    // deal with pesky autocomplete
    setTimeout(() => {
      this.isReadOnly = false;
    }, 1000);
    this.submittedUserData.city = this.cityList[0];
  }

  ngAfterViewInit() {

  }

  onSubmitPartOne(form: NgForm) {

    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.uniqueIdAndEmail(this.submittedUserData.tzId, this.submittedUserData.email);

    // handle this.authservice.uniqueIdAndEmail() response
    this.validTzId = this.authService.validEmailandTzId().subscribe((response) => {
      this.isLoading = false;
      this.partOneValid = response.canUseTzId && response.canUseEmail;
      if (!response.canUseTzId) {
        this.cannotRegisterId = true;
        form.controls.tzId.setErrors({ invalidID: true });
      }

      if (!response.canUseEmail) {
        this.cannotRegisterId = true;
        form.controls.email.setErrors({ unique: true });
      }

    });

  }

  onSubmitPartTwo(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.isLoading = true;
    this.authService.createUser(this.submittedUserData);

  }

  ngOnDestroy() {
    this.validTzId.unsubscribe();
  }

}
