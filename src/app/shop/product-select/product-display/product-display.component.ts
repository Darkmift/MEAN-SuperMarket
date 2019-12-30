import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Subscription } from 'rxjs';
import { Product } from '../../models/Product';
import { CartItem } from '../../models/CartItem';
import { Cart } from '../../models/Cart';
import { CartsService } from '../../services/carts.service';
import { User } from 'src/app/auth/models/user.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit, OnDestroy {

  @Input() selectedCategoryId: string;
  private productsByCategoryListener: Subscription;
  private getActiveCartsubjectLisenter: Subscription;
  private getCartItemsSubjectListener: Subscription;
  user: User;
  activeCart: Cart;

  exisitingCartItems: CartItem[];
  productArray: Product[] = [];
  initialAmount = [];

  constructor(
    private authService: AuthService,
    private cartService: CartsService,
    private productService: ProductsService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.cartService.getLastActiveCart(this.user.id, false);

    this.getActiveCartsubjectLisenter = this.cartService.getlastOrNewDataSubject().subscribe((cart) => {
      this.activeCart = cart;
      this.cartService.getCartItems(this.activeCart._id);
    });

    this.getCartItemsSubjectListener = this.cartService.getItemsCartDataSubject().subscribe((cartItems) => {
      this.exisitingCartItems = cartItems;
      this.initialAmount = [];

      for (const item of this.exisitingCartItems) {
        const { productRef, amount } = item;
        this.initialAmount[productRef] = amount;
      }
    });

    this.productsByCategoryListener = this.productService.getproductsByCategoryDataSubject().subscribe((productArray: Product[]) => {
      document.getElementById('resetView565656').scrollIntoView(true);
      this.productArray = productArray;
    });

  }

  ngOnDestroy(): void {
    this.productsByCategoryListener.unsubscribe();
    this.getActiveCartsubjectLisenter.unsubscribe();
    this.getCartItemsSubjectListener.unsubscribe();
  }

}
