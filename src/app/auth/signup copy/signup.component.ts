// import { Component, OnInit, ViewChild } from '@angular/core';
// import { NgForm, Validators, FormGroup } from '@angular/forms';
// import { User } from '../models/user.model';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })

// export class SignupComponent implements OnInit {

//   @ViewChild('signupFormA', { static: true }) signupFormA: NgForm;
//   @ViewChild('signupFormB', { static: true }) signupFormB: NgForm;

//   isReadOnly = true;
//   passwordMatch = true;
//   partOneSubmitted = false;
//   partOneValid = false;
//   tempUserName = 'GUEST';
//   submittedUserData: User;
//   passwordGroup;


//   ngOnInit() {
//     // deal with pesky autocomplete
//     setTimeout(() => {
//       this.isReadOnly = false;
//     }, 1000);

//     // this.signupForm.controls["passwordConfirm"]
//     //   .setValidators([
//     //     Validators.minLength(9),
//     //      Validators.pattern(`/${this.signupFormA.value.passwordConfirm}/g`)
//     //     ]);
//   }

//   onSubmitPartOne() {

//     this.signupFormA.form.markAllAsTouched();
//     if (this.signupFormA.invalid) {
//       return;
//     }

//     const { tzId, email, password, cofirmPassword } = this.signupFormA.value;

//     if (password != cofirmPassword) {
//       this.passwordMatch = false;
//       this.signupFormA.controls.passwordConfirm.setErrors({ incorrect: true });
//       this.signupFormA.controls.password.setErrors({ incorrect: true });
//       console.log('TCL: SignupComponent -> onSubmitPartOne -> this.passwordMatch false', this.passwordMatch);
//       return;
//     } else {
//       this.signupFormA.controls.passwordConfirm.setErrors(null);
//       this.signupFormA.controls.password.setErrors(null);
//       this.signupFormA.controls.paswword.updateValueAndValidity();
//       this.passwordMatch = true;
//       console.log('TCL: SignupComponent -> onSubmitPartOne -> this.passwordMatch true', this.passwordMatch);
//     }


//     this.submittedUserData = {
//       tzId, email, password, cofirmPassword, city: '', street: '', firstname: '', lastname: ''
//     };

//     this.signupFormA.reset();
//     this.partOneValid = true;
//   }

//   onSubmitB() { }

//   private checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
//     return (group: FormGroup) => {
//       const passwordInput = group.controls[passwordKey];
//       const passwordConfirmationInput = group.controls[passwordConfirmationKey];
//       if (passwordInput.value !== passwordConfirmationInput.value) {
//         return passwordConfirmationInput.setErrors({ notEquivalent: true });
//       } else {
//         return passwordConfirmationInput.setErrors(null);
//       }
//     };
//   }

// }