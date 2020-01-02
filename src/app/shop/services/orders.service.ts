import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth/auth.service';
import { CartsService } from './carts.service';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl = `${environment.apiUrl}/orders`;
  private countSubject = new Subject<number>();
  // view variables
  private shopOrOrder: boolean;
  private switchToOrderViewSubject = new Subject<boolean>();
  private dateIsAvailableSubject = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private cartService: CartsService
  ) { }

  getCountSubject() {
    return this.countSubject.asObservable();
  }

  getOrderCount() {
    this.http.get
      <{ message: string, orderCount: number; }>
      (`${this.apiUrl}/getCount`).subscribe((response) => {
        const count = response.orderCount;
        if (!isNaN(count)) {
          this.countSubject.next(count);
        }
      });
  }

  getswitchToOrderViewSubject() {
    return this.switchToOrderViewSubject.asObservable();
  }

  getDateIsAvailableSubject() {
    return this.dateIsAvailableSubject.asObservable();
  }

  // switch between shop and order view (true:set to order,false:set to shop)
  switchViews(setView: boolean) {
    this.switchToOrderViewSubject.next(setView);
    this.shopOrOrder = setView;
    localStorage.setItem('shopOrOrder', setView ? '1' : '0');
  }

  // fetch view var
  getShopOrOrder() {
    this.shopOrOrder = localStorage.getItem('shopOrOrder') === '1' ? true : false;
    return this.shopOrOrder;
  }

  // clear localstorage var
  clearShopOrOrder() {
    localStorage.removeItem('shopOrOrder');
    this.switchViews(true);
  }

  createOrder(orderInfo: Order) {
    console.log('TCL: createOrder -> orderInfo', orderInfo);
    const postData = { ...orderInfo };
    delete postData.ngbShippingDate;
    delete postData.ccType;

    this.http.post
      <{ message: string, orderCreated: boolean, result: any; }>
      (`${this.apiUrl}/create`, postData).subscribe((response) => {
        if (!response.orderCreated) {
          this.dateIsAvailableSubject.next(false);
        } else {
          this.dateIsAvailableSubject.next(true);
        }
      });



  }
}
