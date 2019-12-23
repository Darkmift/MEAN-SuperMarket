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
  role: boolean;
  user: User;
  imagePath: string;
  hasPreviousCart: boolean;
  lastActiveCart: Cart;
  loadPaenlInfo = false;
  totalProductCount: number;
  totalOrderCount: number;
  lastCartDate: string;

  private authStatusSub: Subscription;
  private getProductCountSubjectListener: Subscription;
  private getOrderCountSubjectListener: Subscription;
  private gethasActiveCartSubject: Subscription;
  private getlastCartDataSubjectLisetner: Subscription;

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
    this.role = this.user.role;

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
      this.lastCartDate = this.lastActiveCart.dateEdited;
    }

    // fetch lastActiveCart chunk - undefined or Cart object
    this.cartService.getLastActiveCart(this.user.id);
    this.gethasActiveCartSubject = this.cartService.gethasActiveCartSubject().subscribe((hasLastCart) => {
      this.hasPreviousCart = hasLastCart;
    });
    this.getlastCartDataSubjectLisetner = this.cartService.getlastCartDataSubject().subscribe((cartData) => {
      if (cartData.active) {
        this.lastActiveCart = cartData;
        this.lastCartDate = this.lastActiveCart.dateEdited;
      }
    });
  }

  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
    this.getProductCountSubjectListener.unsubscribe();
    this.getOrderCountSubjectListener.unsubscribe();
    this.gethasActiveCartSubject.unsubscribe();
    this.getlastCartDataSubjectLisetner.unsubscribe();
  }

}
