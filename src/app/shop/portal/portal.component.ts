import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/models/user.model';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit, OnDestroy {


  isLoading = true;
  private authStatusSub: Subscription;
  userIsAuthenticated = false;
  userId: string;
  role: boolean;
  user: User;
  hasPreviousCart: boolean;
  imagePath: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.imagePath = 'http://localhost:3000/public/images/grumpy.jpg';
    this.isLoading = false;
    this.userId = this.authService.getUserId();
    this.role = this.authService.getRole();
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.user = this.authService.getUser();
    this.hasPreviousCart = false;
    this.authStatusSub = this.authService.getAuthStatusListener()
      .subscribe((isAuthenticated: boolean) => {
        this.isLoading = false;
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
        this.role = this.authService.getRole();
        this.user = this.authService.getUser();
        console.log('TCL: PortalComponent -> ngOnInit -> this.user', this.user);
      }, err => {
        console.log('TCL: PortalComponent -> ngOnInit -> err', err);
      });
  }

  capitalize = (s) => {
    if (typeof s !== 'string') {
      return '';
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();

  }

}
