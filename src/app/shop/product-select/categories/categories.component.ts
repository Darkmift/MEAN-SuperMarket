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

  constructor(private categoryService: CategoriesService) { }

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
  }

}
