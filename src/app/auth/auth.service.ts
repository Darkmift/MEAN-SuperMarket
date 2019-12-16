import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = undefined;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;
  private tokenTimer: NodeJS.Timer;
  private userId: string;
  private role: boolean;
  private apiUrl = environment.apiUrl + '/user';
  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(email: string, password: string) {

    // tslint:disable-next-line: object-literal-shorthand
    const authData: AuthData = { email: email, password: password };

    this.http.post(this.apiUrl + '/signup', authData)
      .subscribe((response) => {
        this.login(email, password);
      }, (error) => {
        this.authStatusListener.next(false);
      });

  }

  login(email: string, password: string) {
    // tslint:disable-next-line: object-literal-shorthand
    const authData: AuthData = { email: email, password: password };

    this.http.post<{ message: string, token: string, expiresIn: number, userId: string, role: boolean }>(this.apiUrl + '/login', authData)
      .subscribe(response => {
        // console.log('TCL: AuthService -> createUser -> response', response);
        const token = response.token;
        this.token = token;
        if (token) {
          const expiresIn = response.expiresIn;
          this.setauthTimer(expiresIn);
          this.isAuthenticated = true;
          this.userId = response.userId;
          this.role = response.role;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresIn * 1000);
          this.saveAuthData(token, expirationDate, this.userId, this.role);
          this.router.navigate(['/']);
        }

      }, (error) => {
        console.log('TCL: AuthService -> login -> error', error);
        this.authStatusListener.next(false);
      });
  }

  autoAuthUser() {

    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }

    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();


    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.authStatusListener.next(true);
      this.setauthTimer(expiresIn / 1000);
    }
  }

  logOut() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.userId = null;
    this.role = false;
    this.router.navigate(['/auth/login']);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
  }

  getUserId() {
    return this.userId;
  }

  getRole() {
    return this.role;
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    let role = false;
    if (localStorage.getItem('role') === '1') {
      role = true;
    }
    if (!token || !expirationDate) {
      return;
    }
    return {
      // tslint:disable-next-line: object-literal-shorthand
      token: token,
      expirationDate: new Date(expirationDate),
      // tslint:disable-next-line: object-literal-shorthand
      userId: userId,
      // tslint:disable-next-line: object-literal-shorthand
      role: role
    };
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string, role: boolean) {
    const setRole = role ? '1' : '0';
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('role', setRole);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
  }

  private setauthTimer(duration: number) {
    // console.log('TCL: AuthService -> setauthTimer -> duration', duration);
    this.tokenTimer = setTimeout(() => {
      this.logOut();
    }, duration * 1000);
  }
}
