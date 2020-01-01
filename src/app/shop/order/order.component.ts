/*
* https://www.regular-expressions.info/creditcard.html
*/

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/models/user.model';
import { OrdersService } from '../services/orders.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {

  isLoading = true;
  isReadOnly = true;
  user: User;
  getDateIsAvailableSubjectListener: Subscription;

  cityList = ['Select City', 'Tel-Aviv', 'Holon', 'Arad', `Be'er Sheva`, 'Yokneam', 'Rehovot', 'Safed', 'Netivot', 'Eilat', 'Metula'];
  submittedUserData = {
    city: this.cityList[0],
    street: null,
    shippingDate: null,
    cc: null,
    ccType: 'Other'
  };
  minMaxDates = this.setMinMaxDates();
  dateNotAvailabe = false;
  // blockDate: NgbDateStruct[] = [
  //   { year: 0, month: 0, day: 0 }
  // ];


  constructor(
    private orderService: OrdersService,
    private toastrService: ToastrService,
    private authService: AuthService, ) { }

  ngOnInit() {
    // for dclick autofill
    this.user = this.authService.getUser();

    // dev stuff -- remove before deployment
    this.submittedUserData = {
      city: this.cityList[1],
      street: 'Main',
      shippingDate: { year: 2020, month: 1, day: 18 },
      cc: '4111111111111111',
      ccType: 'VISA'
    };
    ////

    this.getDateIsAvailableSubjectListener = this.orderService.getDateIsAvailableSubject().subscribe((dateAvailable: boolean) => {
      if (!dateAvailable) {
        this.toastrService.info(
          `We're sorry`,
          `We cannot deliver in said date`,
          { progressBar: true }
        );
        this.dateNotAvailabe = true;
        // this.shippingDateAvailable.setErrors({ dateNotAvailabe: true });
        // this.blockDate[0] = this.submittedUserData.shippingDate;
      }
    });

    this.isLoading = false;
    setTimeout(() => {
      this.isReadOnly = false;
    }, 1000);
  }

  // some date stuff
  setMinMaxDates() {
    const datePick = new Date();
    const year = datePick.getFullYear();
    const startMonth = datePick.getMonth() + 1;
    const endMonth = startMonth === 12 ? 1 : startMonth + 1;
    const endYear = startMonth === 12 ? year + 1 : year;
    const day = datePick.getDate() + 1;
    console.log('TCL: OrderComponent -> setMinMaxDates -> day', day);

    return {
      startDate: { day, month: startMonth, year },
      endDate: { day, month: endMonth, year: endYear }
    };
  }




  // disable weekends
  isDisabled(date: NgbDateStruct/*, current: { month: number, year: number; }*/) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() >= 6 || d.getDay() === 0;
    // || this.blockDate.find(x => NgbDate.from(x).equals(date)) ? true : false;
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

    if (!form.valid) {
      return;
    }

    this.matchCCRegex();

    const submittedDate = this.submittedUserData.shippingDate;
    const jsDate = new Date(submittedDate.year, submittedDate.month - 1, submittedDate.day);
    const orderInfo = { ...this.submittedUserData.shippingDate };
    orderInfo.shippingDate = jsDate;
    console.log('TCL: OrderComponent -> onSubmit -> orderInfo', orderInfo.shippingDate);
    // this.blockDate[0] = this.submittedUserData.shippingDate;
    this.orderService.checkDateIsAvailable(orderInfo.shippingDate);
  }

  ngOnDestroy(): void {
    this.getDateIsAvailableSubjectListener.unsubscribe();
  }

}
