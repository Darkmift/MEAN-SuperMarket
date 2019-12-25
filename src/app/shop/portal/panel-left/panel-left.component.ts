import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/auth/models/user.model';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { Capitalize } from '../../../helpers/helpers';

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
    private router: Router) { }

  ngOnInit() {
  }

  checkRole() { }

  resumeShopping() {
    this.router.navigate(['shop']);
  }

}
