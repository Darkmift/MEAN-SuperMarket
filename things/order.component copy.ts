// import { Component, OnInit } from '@angular/core';
// import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
// import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-order',
//   templateUrl: './order.component.html',
//   styleUrls: ['./order.component.css']
// })
// export class OrderComponent implements OnInit {

//   shippingDateControl: FormControl = new FormControl('shippingDate', Validators.minLength(4));

//   isLoading = true;
//   isReadOnly = true;

//   cityList = ['Select City', 'Tel-Aviv', 'Holon', 'Arad', `Be'er Sheva`, 'Yokneam', 'Rehovot', 'Safed', 'Netivot', 'Eilat', 'Metula'];
//   submittedUserData = { city: this.cityList[0], street: '', shippingDate: null };
//   minMaxDates = this.setMinMaxDates();
//   constructor() { }

//   ngOnInit() {

//     // dev stuff -- remove before deployment
//     this.submittedUserData = { city: this.cityList[1], street: 'Main', shippingDate: { year: 2019, month: 12, day: 18 } };

//     this.isLoading = false;
//     setTimeout(() => {
//       this.isReadOnly = false;
//     }, 1000);
//     this.submittedUserData.city = this.cityList[0];
//   }

//   // some date stuff
//   setMinMaxDates() {
//     const datePick = new Date();
//     const year = datePick.getFullYear();
//     const startMonth = datePick.getMonth() + 1;
//     const endMonth = startMonth === 12 ? 1 : startMonth + 1;
//     const endYear = startMonth === 12 ? year + 1 : year;
//     const day = datePick.getDay() + 1;

//     return {
//       startDate: { day, month: startMonth, year },
//       endDate: { day, month: endMonth, year: endYear }
//     };
//   }

//   // disable weekends
//   isDisabled(date: NgbDateStruct) {
//     const d = new Date(date.year, date.month - 1, date.day);
//     return d.getDay() === 0 || d.getDay() === 6;
//   }

//   // manual validation
//   // manualValidation(dpTest) {
//   //   console.log('value of input field: ' + dpTest._elRef.nativeElement.value);
//   //   console.log('control.valid before manual validation: ' + this.shippingDateControl.valid);
//   //   if (dpTest._elRef.nativeElement.value.length < 4) {
//   //     this.shippingDateControl.setErrors({
//   //       notMinLength: true
//   //     });
//   //     return;
//   //   }
//   //   console.log('control.valid after manual validation: ' + this.shippingDateControl.valid);
//   //   this.shippingDateControl.setErrors({
//   //     notMinLength: null
//   //   });
//   // }

//   onSubmit(form: NgForm) {
//     console.log('TCL: OrderComponent -> onSubmit -> form', form);
//     if (form.invalid) {
//       return;
//     }

//     console.log('TCL: OrderComponent -> onSubmit -> form', this.submittedUserData);
//     const submittedDate = this.submittedUserData.shippingDate;
//     const jsDate = new Date(submittedDate.year, submittedDate.month - 1, submittedDate.day);
//     console.log('TCL: OrderComponent -> onSubmit -> jsDate', jsDate);

//   }

// }
