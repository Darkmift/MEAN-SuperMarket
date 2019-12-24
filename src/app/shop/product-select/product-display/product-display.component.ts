import { Component, OnInit, Input } from '@angular/core';
import { ProductCategory } from '../../models/Category';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  @Input() selectedCategoryId: string;
  itemList: any = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.itemList.push(i);
    }
  }

}
