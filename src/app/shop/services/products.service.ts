import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = environment.apiUrl;
  private countSubject = new Subject<number>();
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }


  getCountSubject() {
    return this.countSubject.asObservable();
  }

  getProductCount() {
    this.http.get
      <{ message: string, ProductCount: number; }>
      (`${this.apiUrl}/products/getCount`).subscribe((response) => {
        const count = response.ProductCount;
        if (!isNaN(count)) {
          this.countSubject.next(count);
        }
        // console.log('TCL: ProductsService -> productCount -> response', response);
      });
  }
}
