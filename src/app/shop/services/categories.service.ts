import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth/auth.service';
import { ProductCategory } from '../models/Category';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = environment.apiUrl;
  private countSubject = new Subject<number>();
  private categoryListSubject = new Subject<ProductCategory[]>();
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }


  getCountSubject() {
    return this.countSubject.asObservable();
  }

  getCategoryListSubject() {
    return this.categoryListSubject.asObservable();
  }

  getCategories() {
    this.http.get
      <{ message: string, categoryList: ProductCategory[], categoryCount: number; }>
      (`${this.apiUrl}/categories/get`).subscribe((response) => {
        const count = response.categoryCount;
        if (!isNaN(count)) {
          this.countSubject.next(count);
        }
        const categories = response.categoryList;
        if (categories instanceof Array) {
          this.categoryListSubject.next(categories);
        }
        console.log('TCL: CategoriesService -> CategoryCount -> response', response);
      });
  }
}
