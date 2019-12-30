import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product } from '../../models/Product';
import { CartItem } from '../../models/CartItem';
import { ToastrService } from 'ngx-toastr';
import { Capitalize } from '../../../helpers/helpers';
import { CartsService } from '../../services/carts.service';
import { Subscription } from 'rxjs';
import { Cart } from '../../models/Cart';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit, OnDestroy {
  @Input() productObj: Product;
  @Input() initialAmount: number;
  cartItem: CartItem;
  private capitalize = Capitalize;
  private cartItemSubjectListener: Subscription;
  private cart: Cart;

  /**
   * wait for user to stop spam clicking if relevant
   */

  private waitForClicksEnd;

  constructor(
    private toastService: ToastrService,
    private cartService: CartsService) { }

  ngOnInit() {
    this.cart = this.cartService.getActiveCart();
    this.cartItem = {
      _id: '',
      amount: this.initialAmount,
      name: this.productObj.name,
      price: this.productObj.price,
      imgUrl: this.productObj.imgUrl,
      total: 0,
      productRef: this.productObj._id,
      cartRef: this.cart._id
    };

    this.cartItemSubjectListener = this.cartService.getCartItem().subscribe((cartItem) => {
      if (cartItem.productRef === this.productObj._id) {
        this.cartItem.amount = cartItem.amount;
      }
    });

  }

  upDateCartItem(addOrReduce: boolean) {

    clearTimeout(this.waitForClicksend);

    // if amount is too high
    if (this.cartItem.amount >= this.productObj.amount) {
      return this.toastService.warning(
        `We're sorry`,
        `we cannot supply more than ${this.productObj.amount} units of this item`,
        { progressBar: true }
      );
    }
    // if amount is too low
    if (this.cartItem.amount < 1 && !addOrReduce) {
      return;
    }
    addOrReduce ? this.cartItem.amount++ : this.cartItem.amount--;

    this.waitForClicksEnd = setTimeout(() => {
      this.sendToCart();
    }, 200);


  }

  setCartItemAmount() {

    const amount = this.cartItem.amount;

    if (amount >= this.productObj.amount) {
      this.cartItem.amount = this.productObj.amount;

      this.toastService.warning(
        `We're sorry`,
        `we cannot supply more than ${this.productObj.amount} units of this item`,
        { progressBar: true }
      );
    }

    this.sendToCart();

  }

  sendToCart() {
    this.cartService.sendToCart(this.cartItem, this.productObj._id);
  }

  ngOnDestroy(): void {
    this.cartItemSubjectListener.unsubscribe();
  }
}
