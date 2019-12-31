import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth/auth.service';
import { Cart } from '../models/Cart';
import { CartsService } from './carts.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl = environment.apiUrl;
  private countSubject = new Subject<number>();
  private switchToOrderViewSubject = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  getCountSubject() {
    return this.countSubject.asObservable();
  }

  getOrderCount() {
    this.http.get
      <{ message: string, orderCount: number; }>
      (`${this.apiUrl}/Orders/getCount`).subscribe((response) => {
        const count = response.orderCount;
        if (!isNaN(count)) {
          this.countSubject.next(count);
        }
      });
  }

  getswitchToOrderViewSubject() {
    return this.switchToOrderViewSubject.asObservable();
  }

  // switch between shop and order view (true:set to order,false:set to shop)
  switchViews(setView: boolean) {
    this.switchToOrderViewSubject.next(setView);
  }
}
