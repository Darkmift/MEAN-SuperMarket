import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../../models/CartItem';
import { Capitalize } from '../../../helpers/helpers';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItemObj: CartItem;
  private capitalize = Capitalize;
  constructor() { }

  ngOnInit() {
  }

}
