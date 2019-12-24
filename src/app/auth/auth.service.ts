import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginCredentials } from './models/loginCredentials.model';
import { User } from './models/user.model';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

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
  private currentUser: User;
  private apiUrl = environment.apiUrl + '/users';
  constructor(
    private http: HttpClient, private router: Router,
    private toastrService: ToastrService) { }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    this.authStatusListener.next(this.isAuthenticated);
    return this.isAuthenticated;
  }

  // listener to check if user is authorized
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  // create user on signup
  createUser(user: User) {

    this.http.post(this.apiUrl + '/signup', user)
      .subscribe((response: any) => {
        /*
        * use repose email to ensure we got the correct response payload
        * but user.password because response.password is hashed
        */
        const { email } = response.result;
        this.login(email, user.password);
      }, (error) => {
        console.log('TCL: AuthService -> createUser -> error', error);
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
      <{ message: string, token: string, expiresIn: number, user: any; }>
      (this.apiUrl + '/login', loginCredentials)
      .pipe(map((response) => {
        response.user.id = response.user._id;
        response.user.role = response.user.isAdmin;
        return response;
      }))
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        this.currentUser = response.user;
        if (token) {
          const expiresIn = response.expiresIn;
          this.setauthTimer(expiresIn);
          this.isAuthenticated = true;
          this.currentUser = response.user;
          this.userId = this.currentUser.id;
          this.role = this.currentUser.role;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresIn * 1000);
          this.saveLoginCredentials(token, expirationDate, this.currentUser);
          this.router.navigate(['/portal']);
        }

      }, (error) => {
        console.log('TCL: AuthService -> login -> error', error);
        this.authStatusListener.next(false);
      });
  }

  autoAuthUser() {

    const authInformation = this.getLoginCredentials();
    if (!authInformation) {
      this.clearLoginCredentials();
      return;
    }

    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();


    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.currentUser = authInformation.user;
      this.userId = this.currentUser.id;
      this.authStatusListener.next(true);
      this.setauthTimer(expiresIn / 1000);
      return;
    }
    this.clearLoginCredentials();
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

  getUser() {
    return this.currentUser;
  }

  getRole() {
    return this.role;
  }

  private getLoginCredentials() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const user = JSON.parse(localStorage.getItem('user'));
    if (!token || !expirationDate) {
      return;
    }
    return {
      // tslint:disable-next-line: object-literal-shorthand
      token: token,
      expirationDate: new Date(expirationDate),
      // tslint:disable-next-line: object-literal-shorthand
      user: user
    };
  }

  private saveLoginCredentials(token: string, expirationDate: Date, currentUser: User) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('user', JSON.stringify(currentUser));
  }

  private clearLoginCredentials() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('user');
  }

  private setauthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logOut();
      return this.toastrService.warning(
        `We're sorry`,
        `Your session has expired,please re-log`,
        { progressBar: true }
      );
    }, duration * 1000);
  }
}
