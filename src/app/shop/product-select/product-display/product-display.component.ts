import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Subscription } from 'rxjs';
import { Product } from '../../models/Product';
import { CartItem } from '../../models/CartItem';
import { Cart } from '../../models/Cart';
import { CartsService } from '../../services/carts.service';
import { User } from 'src/app/auth/models/user.model';
import { AuthService } from 'src/app/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

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
  private getsearchProductsResultSubjectListener: Subscription;
  user: User;
  activeCart: Cart;
  isSearchResults = false;

  exisitingCartItems: CartItem[];
  productArray: Product[] = [];
  initialAmount = [];

  constructor(
    private authService: AuthService,
    private cartService: CartsService,
    private productService: ProductsService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.cartService.getLastActiveCart(this.user.id, false);

    // cart data
    this.getActiveCartsubjectLisenter = this.cartService.getlastOrNewDataSubject().subscribe((cart) => {
      this.activeCart = cart;
      this.cartService.getCartItems(this.activeCart._id);
    });

    // get cart items
    this.getCartItemsSubjectListener = this.cartService.getItemsCartDataSubject().subscribe((cartItems) => {
      this.exisitingCartItems = cartItems;
      this.initialAmount = [];

      for (const item of this.exisitingCartItems) {
        const { productRef, amount } = item;
        this.initialAmount[productRef] = amount;
      }
    });

    // get products by category
    this.productsByCategoryListener = this.productService.getproductsByCategoryDataSubject().subscribe((productArray: Product[]) => {
      document.getElementById('resetView565656').scrollIntoView(true);
      this.isSearchResults = false;
      this.productArray = productArray;
    });

    // get products by regex -- manage conditional display of results
    this.getsearchProductsResultSubjectListener = this.productService.getsearchProductsResult().subscribe((productArray: Product[]) => {
      console.log('hello?');
      document.getElementById('resetView565656').scrollIntoView(true);

      if (productArray.length) {
        this.isSearchResults = true;
        this.productArray = productArray;
      } else {
        this.isSearchResults = false;
        this.toastrService.info(
          `We're sorry`,
          `There are no matches for your search`,
          { progressBar: true }
        );
      }

    });
  }

  ngOnDestroy(): void {
    this.productsByCategoryListener.unsubscribe();
    this.getActiveCartsubjectLisenter.unsubscribe();
    this.getCartItemsSubjectListener.unsubscribe();
    this.getsearchProductsResultSubjectListener.unsubscribe();
  }

}
