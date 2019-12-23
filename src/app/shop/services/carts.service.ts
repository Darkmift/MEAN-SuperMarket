import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth/auth.service';
import { Cart } from '../models/Cart';


@Injectable({
  providedIn: 'root'
})
export class CartsService {
  private apiUrl = environment.apiUrl;
  private hasActiveCartSubject = new Subject<boolean>();
  private lastCartDataSubject = new Subject<Cart>();
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  getlastCartDataSubject() {
    return this.lastCartDataSubject.asObservable();
  }

  gethasActiveCartSubject() {
    return this.hasActiveCartSubject.asObservable();
  }

  getLastActiveCart(id: string) {
    this.http.get
      <{ message: string, lastCart: Cart; }>
      (`${this.apiUrl}/Carts/getLastActiveCart/${id}`).subscribe((response) => {
        const lastCart = response.lastCart[0];
        if (lastCart) {
          this.lastCartDataSubject.next(lastCart);
          this.hasActiveCartSubject.next(true);
        } else {
          this.hasActiveCartSubject.next(false);
        }
      });
  }
}
