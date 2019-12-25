import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { ProductCategory } from '../../models/Category';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: ProductCategory[] = [];

  // pagination controls
  page = 1;
  itemsPerPage = 5;
  previousPage = 0;
  categoryPortion: ProductCategory[] = [];

  isActive = {};

  constructor(
    private categoryService: CategoriesService,
    private productService: ProductsService) { }

  ngOnInit() {
    this.categoryService.getCategories();
    this.categoryService.getCategoryListSubject().subscribe((categoryArray) => {
      this.categories = categoryArray;
      this.loadPage(1);
    });
  }

  onCategoryClick(categoryId: string) {
    this.productService.getProductsByCategory(categoryId);
  }

  // pagination functions - start
  loadPage(page: number) {
    console.log('TCL: CategoriesComponent -> loadPage -> page', page);
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData();
      this.onCategoryClick(this.categoryPortion[0]._id);
      this.classToggle(0);
    }
  }

  loadData() {
    this.categoryPortion = this.categories.slice(this.page, (this.itemsPerPage + 1));
    // css stuff
    this.isActive = [];
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.categoryPortion.length; index++) {
      this.isActive[index] = false;
    }
  }

  classToggle(num: number) {

    for (let index = 0; index < this.categoryPortion.length; index++) {
      this.isActive[index] = false;
    }
    this.isActive[num] = true;
  }
  // pagination functions - end
}
