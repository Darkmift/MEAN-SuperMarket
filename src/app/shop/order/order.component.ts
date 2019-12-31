/*
* https://www.regular-expressions.info/creditcard.html
*/

import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  isLoading = true;
  isReadOnly = true;
  user: User;

  cityList = ['Select City', 'Tel-Aviv', 'Holon', 'Arad', `Be'er Sheva`, 'Yokneam', 'Rehovot', 'Safed', 'Netivot', 'Eilat', 'Metula'];
  submittedUserData = { city: this.cityList[0], street: '', shippingDate: null, cc: null, ccType: 'Other' };
  minMaxDates = this.setMinMaxDates();
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    // dev stuff -- remove before deployment
    // this.submittedUserData = { city: this.cityList[1], street: 'Main', shippingDate: { year: 2019, month: 12, day: 18 } };

    this.isLoading = false;
    setTimeout(() => {
      this.isReadOnly = false;
    }, 1000);
    this.submittedUserData.city = this.cityList[0];
  }

  // some date stuff
  setMinMaxDates() {
    const datePick = new Date();
    const year = datePick.getFullYear();
    const startMonth = datePick.getMonth() + 1;
    const endMonth = startMonth === 12 ? 1 : startMonth + 1;
    const endYear = startMonth === 12 ? year + 1 : year;
    const day = datePick.getDay() + 1;

    return {
      startDate: { day, month: startMonth, year },
      endDate: { day, month: endMonth, year: endYear }
    };
  }

  // disable weekends
  isDisabled(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  fillUserDataOnDClick(detail: string) {
    if (this.user[detail]) {
      this.submittedUserData[detail] = this.user[detail];
    }

  }

  matchCCRegex() {

    this.submittedUserData.ccType = 'Other';

    let ccNum = this.submittedUserData.cc;
    if (!ccNum) {
      return;
    }

    ccNum = this.submittedUserData.cc = this.submittedUserData.cc.replace(/ /g, '').trim();
    console.log('TCL: OrderComponent -> matchCCRegex -> ccNum', ccNum);
    const ccRegex = {
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      masterCard: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
      amex: /^3[47][0-9]{13}$/,
      dinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    };

    for (const ccRegexName in ccRegex) {
      if (ccNum.match(ccRegex[ccRegexName])) {
        this.submittedUserData.ccType = ccRegexName.toUpperCase();
      }
    }

  }

  onSubmit(form: NgForm) {
    console.log('TCL: OrderComponent -> onSubmit -> form', form.controls.city.touched);

    if (!form.valid) {
      return;
    }

    this.matchCCRegex();

    const submittedDate = this.submittedUserData.shippingDate;
    const jsDate = new Date(submittedDate.year, submittedDate.month - 1, submittedDate.day);
    console.log('TCL: OrderComponent -> onSubmit -> jsDate', jsDate);

  }

}
