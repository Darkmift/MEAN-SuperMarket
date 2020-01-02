import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth/auth.service';
import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';


@Injectable({
  providedIn: 'root'
})
export class CartsService {
  private apiUrl = `${environment.apiUrl}/`;
  private hasPreviousCart = new Subject<boolean>();
  /*
  * need seperate lastcart subjects becuase the subscription
  * is diffrent in components
  * (this scenario I want to avoid double post on new cart)
  */
  private lastCartDataSubject = new Subject<Cart>();
  private lastOrNewDataSubject = new Subject<Cart>();
  private cartItemsDataSubject = new Subject<CartItem[]>();
  private cartTotalSubject = new Subject<number>();
  private cartItem = new Subject<CartItem>();
  private activeCart: Cart;
  // in use with highlightpipe
  private searchTerm;
  private searchTermSubject = new Subject<string>();


  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  // Subject Getters
  getlastOrNewDataSubject() {
    return this.lastOrNewDataSubject.asObservable();
  }

  getlastCartDataSubject() {
    return this.lastCartDataSubject.asObservable();
  }

  getItemsCartDataSubject() {
    return this.cartItemsDataSubject.asObservable();
  }

  gethasPreviousCart() {
    return this.hasPreviousCart.asObservable();
  }

  getCartItem() {
    return this.cartItem.asObservable();
  }

  getCartTotalSubject() {
    return this.cartTotalSubject.asObservable();
  }

  getSearchTermSubject() {
    return this.searchTermSubject.asObservable();
  }

  ////

  getActiveCart() {
    return this.activeCart;
  }

  getActiveCartId() {
    return this.activeCart._id;
  }

  getLastActiveCart(id: string, makeNew: boolean) {
    this.http.get
      <{ message: string, lastCart: Cart; }>
      (`${this.apiUrl}carts/getLastActiveCart/${id}`).subscribe((response) => {
        const lastCart = response.lastCart[0];
        if (lastCart) {
          this.activeCart = lastCart;
          this.lastCartDataSubject.next(lastCart);
          this.lastOrNewDataSubject.next(lastCart);
          this.hasPreviousCart.next(true);
          this.setCartTotal(lastCart._id);
        } else {
          if (makeNew) {
            this.hasPreviousCart.next(false);
            this.createNewCart(id);
          }
        }

      });
  }

  createNewCart(id: string) {
    return this.http.post
      <{ message: string, result: Cart; }>(`${this.apiUrl}carts/create`, { customerRef: id })
      .subscribe((response) => {
        console.log('TCL: createNewCart -> response', response);
        if (response.result) {
          this.lastOrNewDataSubject.next(response.result);
          this.activeCart = response.result;
        }
      });
  }

  sendToCart(cartItem: CartItem, productId: string) {

    const activeCart = this.getActiveCart();
    const cartRef = activeCart._id;
    const productRef = productId;
    const amount = cartItem.amount;

    this.http.post
      <{ message: string, isNew: boolean, productItem: CartItem; }>(`${this.apiUrl}cartItems/`, { cartRef, productRef, amount })
      .subscribe((response) => {
        this.cartItem.next(response.productItem);
        this.getCartItems(cartRef);
        this.setCartTotal(cartRef);
      });
  }

  getCartItems(cartRef: string) {
    this.http.get
      <{ message: string, CartItemList: CartItem[]; }>(`${this.apiUrl}cartItems/cart/${cartRef}`).subscribe((response) => {
        this.cartItemsDataSubject.next(response.CartItemList);
      });
  }

  getCartItemById(productRef: string, cartRef: string) {
    this.http.get
      <{ message: string, CartItem: CartItem; }>(`${this.apiUrl}cartItems/single/${cartRef}/${productRef}`).subscribe((response) => {
        console.log('TCL: getCartItems -> response', response);
        if (response.CartItem) {
          this.cartItem.next(response.CartItem);
        }
      });
  }

  setCartTotal(cartRef: string) {
    this.http.get
      <{ message: string, cartTotal: number; }>(`${this.apiUrl}carts/setCartTotal/${cartRef}`).subscribe((response) => {
        console.log('TCL: setCartTotal -> response', response);
        if (!isNaN(response.cartTotal)) {
          console.log('TCL: setCartTotal -> response.cartTotal', response.cartTotal);
          this.cartTotalSubject.next(response.cartTotal);
        }
      });
  }

  setSearchTerm(regex) {
    this.searchTerm = regex;
    this.searchTermSubject.next(this.searchTerm);
  }

  getSearchTerm() {
    return this.searchTerm;
  }
}
