import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Subscription } from 'rxjs';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit, OnDestroy {

  @Input() selectedCategoryId: string;
  productsByCategoryListener: Subscription;
  productArray: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit() {

    this.productsByCategoryListener = this.productService.getproductsByCategoryDataSubject().subscribe((productArray: Product[]) => {
      this.productArray = productArray;
    });

  }

  ngOnDestroy(): void {
    this.productsByCategoryListener.unsubscribe();
  }

}
