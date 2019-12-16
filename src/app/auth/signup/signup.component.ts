import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm, Validators, FormGroup } from '@angular/forms';
import { User } from '../models/user.model';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit, OnDestroy {

  @ViewChild('signupFormA', { static: true }) signupFormA: NgForm;
  @ViewChild('signupFormB', { static: true }) signupFormB: NgForm;

  constructor(public authService: AuthService, ) { }

  isReadOnly = true;
  tempUserName = 'GUEST';
  submittedUserData: User;
  partOneValid = false;
  private validTzId: Subscription;
  cannotRegisterId = false;

  ngOnInit() {

    this.validTzId = this.authService.getvalidIdListener().subscribe((canUseId) => {

      console.log('TCL: SignupComponent -> ngOnInit -> canUseId', canUseId);

      this.partOneValid = canUseId;
      if (canUseId) {
        this.signupFormA.reset();
        this.partOneValid = true;
      } else {
        this.cannotRegisterId = true;
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
