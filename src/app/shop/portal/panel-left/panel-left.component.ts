import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/auth/models/user.model';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { Capitalize } from '../../../helpers/helpers';
import { ToastrService } from 'ngx-toastr';

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
  private capitalize = Capitalize;


  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastrService) { }

  ngOnInit() {
  }

  checkIsAdmin() {
    const isAdmin = this.authService.getRole();
    if (!isAdmin) {
      this.authService.logOut();
      this.toastService.error('Alert!', 'Not authorized', { progressBar: true });
    }
    this.resumeShopping();
  }

  resumeShopping() {
    this.router.navigate(['shop']);
  }

}
