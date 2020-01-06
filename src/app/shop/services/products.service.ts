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
  private productToEdit = new Subject<Product>();
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

  getProductToEdit() {
    return this.productToEdit.asObservable();
  }

  ////

  sendProductToEdit(product: Product) {
    this.productToEdit.next(product);
  }

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

  // createOrEdit true=create/false=edit
  createOrEdit(
    createOrEdit: boolean,
    name: string,
    categoryId: string,
    price: string,
    amount: string,
    id: string,
    imageUrl: string,
    image: File) {

    console.log('TCL: imageUrl', imageUrl);

    const postData = new FormData();

    postData.append('name', name);
    postData.append('categoryId', categoryId);
    postData.append('price', price);
    postData.append('amount', amount);

    if (createOrEdit) {
      postData.append('image', image);

      this.http
        .post<{ message: string, result: Product; }>
        (this.apiUrl + '/products/create', postData)
        .subscribe((resData) => {
          console.log('TCL: createOrEdit -> resData', resData);

        });
    } else {
      if (image) {
        postData.append('image', image);
      } else {
        postData.append('imgUrl', imageUrl);
      }
      postData.append('_id', id);

      console.log('TCL: imageUrl', imageUrl);


      this.http
        .put<{ message: string, result: number; }>
        (this.apiUrl + '/products/edit', postData)
        .subscribe((resData) => {
          console.log('TCL: createOrEdit -> resData', resData);

        });
    }
  }
}
