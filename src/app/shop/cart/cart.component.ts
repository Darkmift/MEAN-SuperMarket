import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartsService } from '../services/carts.service';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/models/user.model';
import { Subscription } from 'rxjs';
import { CartItem } from '../models/CartItem';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  @Input() shopOrOrderConfig: boolean;
  private getlastOrNewDataSubjectLisetner: Subscription;
  private getHasPreviousCartSubjectLisetner: Subscription;
  private getCartItemsSubjectListener: Subscription;
  private getCartTotalSubjectListener: Subscription;
  user: User;
  cart: Cart;
  cartItemArray: CartItem[];
  activeItems: number;
  hasPreviousCart: boolean;

  constructor(
    private authService: AuthService,
    private cartService: CartsService,
    private orderService: OrdersService) { }

  ngOnInit() {
    // fetch user data
    this.user = this.authService.getUser();
    // fetch cart
    this.cartService.getLastActiveCart(this.user.id, true);

    // hasPreviousCart boolean
    this.getHasPreviousCartSubjectLisetner = this.cartService.gethasPreviousCart().subscribe((response: boolean) => {
      this.hasPreviousCart = response;
    });

    // cart data
    this.getlastOrNewDataSubjectLisetner = this.cartService.getlastOrNewDataSubject().subscribe((cart: Cart) => {
      if (cart) {
        this.cart = cart;
        // fetch cartItems
        this.cartService.getCartItems(this.cart._id);
      }
    });

    // cart items
    this.getCartItemsSubjectListener = this.cartService.getItemsCartDataSubject().subscribe((cartItems: CartItem[]) => {
      this.cartItemArray = cartItems;
      this.activeItems = cartItems.filter((item) => item.amount).length;
    });

    // cart total sum
    this.getCartTotalSubjectListener = this.cartService.getCartTotalSubject().subscribe((total) => {
      console.log('TCL: CartComponent -> ngOnInit -> total', total);
      this.cart.total = total;
    });

  }

  switchToOrder() {
    this.orderService.switchViews(true);
  }

  ngOnDestroy(): void {
    this.getlastOrNewDataSubjectLisetner.unsubscribe();
    this.getHasPreviousCartSubjectLisetner.unsubscribe();
    this.getCartItemsSubjectListener.unsubscribe();
    this.getCartTotalSubjectListener.unsubscribe();
  }

}
