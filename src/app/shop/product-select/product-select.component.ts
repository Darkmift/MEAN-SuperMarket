import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.css']
})
export class ProductSelectComponent implements OnInit {
  @Input() isAdmin;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
  }

}
