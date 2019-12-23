import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/auth/models/user.model';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-left',
  templateUrl: './panel-left.component.html',
  styleUrls: ['./panel-left.component.css']
})
export class PanelLeftComponent implements OnInit {

  @Input() isLoading: boolean;
  @Input() hasPreviousCart: boolean;
  @Input() user: User;
  @Input() lastActiveCartId: string;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  private capitalize(s) {
    if (typeof s !== 'string') {
      return '';
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  checkRole() { }

  resumeShopping() {
    let id = '';
    if (this.lastActiveCartId) {
      id = this.lastActiveCartId;
    }

    this.router.navigate(['shop']);
  }

}
