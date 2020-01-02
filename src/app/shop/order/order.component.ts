/*
* https://www.regular-expressions.info/creditcard.html
*/

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgbDateStruct, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/models/user.model';
import { OrdersService } from '../services/orders.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CartsService } from '../services/carts.service';
import { Order } from '../models/Order';
import { Cart } from '../models/Cart';
import { OrderModalComponent } from './order-modal/order-modal.component';

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
  getlastOrNewDataSubjectLisetner: Subscription;
  hideOnSubmit = false;

  cityList = ['Select City', 'Tel-Aviv', 'Holon', 'Arad', `Be'er Sheva`, 'Yokneam', 'Rehovot', 'Safed', 'Netivot', 'Eilat', 'Metula'];
  submittedUserData: Order = {
    cartRef: '',
    city: this.cityList[0],
    street: null,
    ngbShippingDate: null,
    deliveryDate: new Date(),
    ccLastDigits: null,
    ccType: 'Other'
  };
  minMaxDates = this.setMinMaxDates();
  dateNotAvailabe = false;
  cart: Cart;
  // blockDate: NgbDateStruct[] = [
  //   { year: 0, month: 0, day: 0 }
  // ];


  constructor(
    private orderService: OrdersService,
    private toastrService: ToastrService,
    private cartService: CartsService,
    private authService: AuthService,
    private modalService: NgbModal, ) { }

  ngOnInit() {
    // for dclick autofill
    this.user = this.authService.getUser();
    // fetch cart
    this.cartService.getLastActiveCart(this.user.id, false);

    // cart data
    this.getlastOrNewDataSubjectLisetner = this.cartService.getlastOrNewDataSubject().subscribe((cart: Cart) => {
      if (cart) {
        this.cart = cart;
        this.submittedUserData.cartRef = this.cart._id;
        // fetch cartItems
        this.cartService.getCartItems(this.cart._id);
      }
    });


    // dev stuff -- remove before deployment
    this.submittedUserData = {
      cartRef: '',
      city: this.cityList[1],
      street: 'Main',
      ngbShippingDate: { year: 2020, month: 1, day: 18 },
      deliveryDate: new Date(),
      ccLastDigits: '4111111111111111',
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
      } else {
        this.hideOnSubmit = true;
        const ngbModalOptions: NgbModalOptions = {
          backdrop: 'static',
          keyboard: false
        };
        this.submittedUserData.ccLastDigits = this.submittedUserData.ccLastDigits.substr(this.submittedUserData.ccLastDigits.length - 4);
        const modalRef = this.modalService.open(OrderModalComponent, ngbModalOptions);
        modalRef.componentInstance.order = this.submittedUserData;
        modalRef.componentInstance.total = this.cart.total;
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

    let ccNum = this.submittedUserData.ccLastDigits;
    if (!ccNum) {
      return;
    }

    ccNum = this.submittedUserData.ccLastDigits = this.submittedUserData.ccLastDigits.replace(/ /g, '').trim();
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

    const submittedDate = this.submittedUserData.ngbShippingDate;
    const jsDate = new Date(submittedDate.year, submittedDate.month - 1, submittedDate.day);

    const orderInfo = { ...this.submittedUserData };
    orderInfo.deliveryDate = jsDate;
    orderInfo.ccLastDigits = orderInfo.ccLastDigits.substr(orderInfo.ccLastDigits.length - 4);
    console.log('TCL: OrderComponent -> onSubmit -> orderInfo', orderInfo);
    // this.blockDate[0] = this.submittedUserData.ngbShippingDate;
    this.orderService.createOrder(orderInfo);
  }

  ngOnDestroy(): void {
    this.getDateIsAvailableSubjectListener.unsubscribe();
    this.getlastOrNewDataSubjectLisetner.unsubscribe();
  }

}
