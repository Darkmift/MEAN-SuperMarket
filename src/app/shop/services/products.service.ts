import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth/auth.service';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = environment.apiUrl;
  private countSubject = new Subject<number>();
  private productsByCategoryDataSubject = new Subject<Product[]>();
  private searchProductsResult = new Subject<Product[]>();
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }


  // Subject getters
  getCountSubject() {
    return this.countSubject.asObservable();
  }

  getproductsByCategoryDataSubject() {
    return this.productsByCategoryDataSubject.asObservable();
  }

  getsearchProductsResult() {
    return this.searchProductsResult.asObservable();
  }

  ////

  getProductCount() {
    this.http.get
      <{ message: string, ProductCount: number; }>
      (`${this.apiUrl}/products/getCount`).subscribe((response) => {
        const count = response.ProductCount;
        if (!isNaN(count)) {
          this.countSubject.next(count);
        }
      });
  }

  getProductsByCategory(categoryId: string) {
    this.http.get
      <{ message: string, Product: Product[]; }>
      (`${this.apiUrl}/products/getByCategory/${categoryId}`).subscribe((response) => {
        const productsArray = response.Product;
        if (productsArray) {
          this.productsByCategoryDataSubject.next(productsArray);
        }
      });
  }

  getProductsByRegex(regex: string) {
    this.http.get
      <{ message: string, searchResults: Product[]; }>
      (`${this.apiUrl}/products/search/${regex}`).subscribe((response) => {
        const productsArray = response.searchResults;
        if (productsArray) {
          this.searchProductsResult.next(productsArray);
        }
      });
  }
}
