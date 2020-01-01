import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../../models/CartItem';
import { Capitalize } from '../../../helpers/helpers';
import { CartsService } from '../../services/carts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItemObj: CartItem;
  @Input() shopOrOrderConfig: boolean;
  isShown = false;
  private capitalize = Capitalize;
  searchTerm;
  constructor(private cartService: CartsService) { }

  ngOnInit() {
    if (this.cartItemObj.amount) {
      this.isShown = true;
    }
    this.searchTerm = this.cartService.searchTerm;
  }

  removeItem() {
    this.isShown = false;
    this.cartItemObj.amount = 0;
    this.cartService.sendToCart(this.cartItemObj, this.cartItemObj.productRef);
  }

}
