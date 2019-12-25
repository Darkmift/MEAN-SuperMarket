import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { CartItem } from '../../models/CartItem';
import { ToastrService } from 'ngx-toastr';
import { Capitalize } from '../../../helpers/helpers';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productObj: Product;
  cartItem: CartItem;
  private capitalize = Capitalize;

  constructor(private toastService: ToastrService) { }

  ngOnInit() {
    this.cartItem = {
      _id: '',
      amount: 0,
      name: this.productObj.name,
      price: this.productObj.price,
      imgUrl: this.productObj.imgUrl,
    };
  }

  upDateCartItem(addOrReduce: boolean) {
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
  }

  setCartItemAmount() {

    const amount = this.cartItem.amount;

    if (amount >= this.productObj.amount) {
      this.cartItem.amount = this.productObj.amount;

      return this.toastService.warning(
        `We're sorry`,
        `we cannot supply more than ${this.productObj.amount} units of this item`,
        { progressBar: true }
      );
    }

  }
}
