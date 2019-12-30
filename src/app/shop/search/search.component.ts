import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchValue = '';
  constructor(private productService: ProductsService) { }

  ngOnInit() {
  }

  onSearchSubmit(regex: string) {
    console.log('TCL: SearchComponent -> onSearchSubmit -> regex', regex);
    this.productService.getProductsByRegex(regex);
  }

}
