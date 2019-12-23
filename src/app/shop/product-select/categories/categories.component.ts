import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { ProductCategory } from '../../models/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: ProductCategory[] = [];
  categoriesTest: string;

  // pagination controls
  page = 0;
  itemsPerPage = 5;
  previousPage = 0;
  categoryPortion: ProductCategory[] = [];

  isActive = {};

  constructor(
    private categoryService: CategoriesService) { }

  ngOnInit() {
    this.categoryService.getCategories();
    this.categoryService.getCategoryListSubject().subscribe((categoryArray) => {

      this.categories = categoryArray;
      this.categoriesTest = JSON.stringify(categoryArray);
      this.loadPage(0);
    });
  }

  onCategoryClick(categoryId: string) {
    console.log('TCL: CategoriesComponent -> click -> categoryId', categoryId);
  }


  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData();
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

}
