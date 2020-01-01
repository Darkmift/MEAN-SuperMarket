import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartsService } from '../services/carts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchValue = '';
  constructor(
    private cartService: CartsService,
    private productService: ProductsService, ) { }

  ngOnInit() {
  }

  onSearchSubmit(regex: string) {
    this.productService.getProductsByRegex(regex);
    this.cartService.setSearchTerm(regex);
  }

}
