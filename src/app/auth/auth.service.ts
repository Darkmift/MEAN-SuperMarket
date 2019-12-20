import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginCredentials } from './models/loginCredentials.model';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = undefined;
  private authStatusListener = new Subject<boolean>();
  private uniqueIICAndEmail = new Subject<{ canUseTzId: boolean, canUseEmail: boolean; }>();
  private isAuthenticated = false;
  private tokenTimer: NodeJS.Timer;
  private userId: string;
  private role: boolean;
  private apiUrl = environment.apiUrl + '/users';
  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  // listener to check if user is authorized
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  // create user on signup
  createUser(user: User) {

    const newUser = {
      firstName: user.firstname,
      lastName: user.lastname,
      password: user.password,
      iic: user.tzId,
      email: user.email,
      city: user.city,
      street: user.street
    };

    this.http.post(this.apiUrl + '/signup', newUser)
      .subscribe((response: any) => {
        /*
        * use repose email to ensure we got the correct response payload
        * but newUser.password because response.password is hashed
        */
        const { email } = response.result;
        this.login(email, newUser.password);
      }, (error) => {
        this.authStatusListener.next(false);
      });

  }

  // check if tzId provided on signup part 1 exists
  uniqueIdAndEmail(tzId: string, email: string) {
    this.http.get
      <{ message: string, canUseTzId: boolean, canUseEmail: boolean; }>
      (`${this.apiUrl}/uniqueIdAndEmail/${tzId}/${email}`).subscribe((response) => {

        const { canUseEmail, canUseTzId } = response;
        return this.uniqueIICAndEmail.next({ canUseTzId, canUseEmail });

      }, err => {
        console.log('TCL: AuthService -> idExists -> err', err);
      });
  }

  // listener to check if user is authorized
  validEmailandTzId() {
    return this.uniqueIICAndEmail.asObservable();
  }

  login(email: string, password: string) {
    // tslint:disable-next-line: object-literal-shorthand
    const loginCredentials: LoginCredentials = { email: email, password: password };

    this.http.post
      <{ message: string, token: string, expiresIn: number, user: any, role: boolean; }>
      (this.apiUrl + '/login', loginCredentials)
      .subscribe(response => {
        // console.log('TCL: AuthService -> createUser -> response', response);
        const token = response.token;
        this.token = token;
        if (token) {
          const expiresIn = response.expiresIn;
          this.setauthTimer(expiresIn);
          this.isAuthenticated = true;
          this.userId = response.user._id;
          this.role = response.role;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresIn * 1000);
          this.saveLoginCredentials(token, expirationDate, this.userId, this.role);
          this.router.navigate(['/']);
        }

      }, (error) => {
        console.log('TCL: AuthService -> login -> error', error);
        this.authStatusListener.next(false);
      });
  }

  autoAuthUser() {

    const authInformation = this.getLoginCredentials();
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
    this.clearLoginCredentials();
  }

  getUserId() {
    return this.userId;
  }

  getRole() {
    return this.role;
  }

  private getLoginCredentials() {
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

  private saveLoginCredentials(token: string, expirationDate: Date, userId: string, role: boolean) {
    const setRole = role ? '1' : '0';
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('role', setRole);
  }

  private clearLoginCredentials() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    localStorage.removeItem('id');
  }

  private setauthTimer(duration: number) {
    // console.log('TCL: AuthService -> setauthTimer -> duration', duration);
    this.tokenTimer = setTimeout(() => {
      this.logOut();
    }, duration * 1000);
  }
}
