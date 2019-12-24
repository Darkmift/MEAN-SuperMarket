import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.css']
})
export class ProductSelectComponent implements OnInit {
  selectedCategoryId: string;
  constructor() { }

  ngOnInit() {
  }

  registerCategoryId(categoryId) {
    this.selectedCategoryId = categoryId;
  }

}
