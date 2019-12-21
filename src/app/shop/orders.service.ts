import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
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

  getOrderCount() {
    this.http.get
      <{ message: string, orderCount: number; }>
      (`${this.apiUrl}/Orders/getCount`).subscribe((response) => {
        const count = response.orderCount;
        if (!isNaN(count)) {
          this.countSubject.next(count);
        }
        console.log('TCL: OrdersService -> OrderCount -> response', response);
      });
  }
}
