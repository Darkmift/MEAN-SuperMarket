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
  private apiUrl = `${environment.apiUrl}/carts`;
  private hasPreviousCart = new Subject<boolean>();
  /*
  * need seperate lastcart subjects becuase the subscription
  * is diffrent in components
  * (this scenario I want to avoid double post on new cart)
  */
  private lastCartDataSubject = new Subject<Cart>();
  private lastOrNewDataSubject = new Subject<Cart>();
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  getlastOrNewDataSubject() {
    return this.lastOrNewDataSubject.asObservable();
  }

  getlastCartDataSubject() {
    return this.lastCartDataSubject.asObservable();
  }

  gethasPreviousCart() {
    return this.hasPreviousCart.asObservable();
  }

  getLastActiveCart(id: string, makeNew: boolean) {
    this.http.get
      <{ message: string, lastCart: Cart; }>
      (`${this.apiUrl}/getLastActiveCart/${id}`).subscribe((response) => {
        const lastCart = response.lastCart[0];
        if (lastCart) {
          this.lastCartDataSubject.next(lastCart);
          this.lastOrNewDataSubject.next(lastCart);
          this.hasPreviousCart.next(true);
        } else {
          if (makeNew) {
            this.hasPreviousCart.next(false);
            this.createNewCart(id);
          }
        }

      });
  }

  createNewCart(id: string) {
    return this.http.post
      <{ message: string, result: Cart; }>(`${this.apiUrl}/create`, { customerRef: id })
      .subscribe((response) => {
        console.log('TCL: createNewCart -> response', response);
        if (response.result) {
          this.lastOrNewDataSubject.next(response.result);
        }
      });
  }
}
