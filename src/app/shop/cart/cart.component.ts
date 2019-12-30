import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartsService } from '../services/carts.service';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/models/user.model';
import { Subscription } from 'rxjs';
import { CartItem } from '../models/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  private getlastOrNewDataSubjectLisetner: Subscription;
  private getHasPreviousCartSubjectLisetner: Subscription;
  private getCartItemsSubjectListener: Subscription;
  user: User;
  cart: Cart;
  cartItemArray: CartItem[];
  hasPreviousCart: boolean;

  constructor(
    private authService: AuthService,
    private cartService: CartsService) { }

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

    this.getCartItemsSubjectListener = this.cartService.getItemsCartDataSubject().subscribe((cartItems: CartItem[]) => {
      this.cartItemArray = cartItems;
    });

  }

  ngOnDestroy(): void {
    this.getlastOrNewDataSubjectLisetner.unsubscribe();
    this.getHasPreviousCartSubjectLisetner.unsubscribe();
    this.getCartItemsSubjectListener.unsubscribe();
  }

}
