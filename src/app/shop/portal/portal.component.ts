import { Component, OnInit, OnDestroy, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/models/user.model';
import { Router } from '@angular/router';
import { CartsService } from '../services/carts.service';
import { Cart } from '../models/Cart';
import { ProductsService } from '../services/products.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit, OnDestroy {


  isLoading = true;
  private authStatusSub: Subscription;
  private getProductCountSubjectListener: Subscription;
  private getOrderCountSubjectListener: Subscription;
  userIsAuthenticated = false;
  userId: string;
  role: boolean;
  user: User;
  imagePath: string;
  hasPreviousCart: boolean;
  lastActiveCart: Cart;
  loadPaenlInfo = false;
  totalProductCount: number;
  totalOrderCount: number;
  lastCartDate: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private productsService: ProductsService,
    private ordersService: OrdersService,
    private cartService: CartsService) { }

  ngOnInit() {
    const authorized = this.authService.getIsAuth();
    if (!authorized) {
      // tslint:disable-next-line: no-unused-expression
      this.router.navigate['/auth/login'];
    }

    this.authStatusSub = this.authService.getAuthStatusListener()
      .subscribe((isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          // tslint:disable-next-line: no-unused-expression
          this.router.navigate['/auth/login'];
        }
      });

    this.isLoading = false;

    this.imagePath = 'http://localhost:3000/public/images/grumpy.jpg';
    this.user = this.authService.getUser();

    this.hasPreviousCart = false;
    this.totalProductCount = 0;
    this.totalOrderCount = 0;

    // fetch product count
    this.productsService.getProductCount();
    // subscribe to count
    this.getProductCountSubjectListener = this.productsService.getCountSubject()
      .subscribe((count: number) => {
        this.totalProductCount = count;
      });

    // fetch order count
    this.ordersService.getOrderCount();
    // subscribe to count
    this.getOrderCountSubjectListener = this.ordersService.getCountSubject()
      .subscribe((count: number) => {
        this.totalOrderCount = count;
      });

    if (this.hasPreviousCart) {
      this.lastCartDate = this.formatDate(this.lastActiveCart.dateEdited);
    }

    // fetch lastActiveCart chunk - undefined or Cart object
    this.cartService.getLastActiveCart(this.user.id);
    this.cartService.gethasActiveCartSubject().subscribe((hasLastCart) => {
      this.hasPreviousCart = hasLastCart;
    });
    this.cartService.getlastCartDataSubject().subscribe((cartData) => {
      if (cartData.active) {
        this.lastActiveCart = cartData;
        this.lastCartDate = this.formatDate(this.lastActiveCart.dateEdited);
      }
    });
  }

  capitalize(s) {
    if (typeof s !== 'string') {
      return '';
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  private formatDate(dateString: string) {
    console.log('TCL: PortalComponent -> formatDate -> dateString', dateString);
    const parsedDate = new Date(dateString);
    console.log('TCL: PortalComponent -> formatDate -> date', parsedDate);
    const monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];

    const day = parsedDate.getDate();
    const monthIndex = parsedDate.getMonth();
    const year = parsedDate.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
    this.getProductCountSubjectListener.unsubscribe();
    this.getOrderCountSubjectListener.unsubscribe();
  }

}
