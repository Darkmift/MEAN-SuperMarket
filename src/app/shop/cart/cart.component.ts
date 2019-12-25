import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartsService } from '../services/carts.service';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  private getlastOrNewDataSubjectLisetner: Subscription;
  private getHasPreviousCartSubjectLisetner: Subscription;
  user: User;
  cart: Cart;
  cartJsonTest: string;
  hasPreviousCart: boolean;

  constructor(
    private authService: AuthService,
    private cartService: CartsService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.cartService.getLastActiveCart(this.user.id, true);

    this.getHasPreviousCartSubjectLisetner = this.cartService.gethasPreviousCart().subscribe((response: boolean) => {
      this.hasPreviousCart = response;
    });

    this.getlastOrNewDataSubjectLisetner = this.cartService.getlastOrNewDataSubject().subscribe((cart: Cart) => {
      if (cart) {
        this.cart = cart;
        this.cartJsonTest = JSON.stringify(this.cart);
      }
    });

  }

  ngOnDestroy(): void {
    this.getlastOrNewDataSubjectLisetner.unsubscribe();
  }

}
