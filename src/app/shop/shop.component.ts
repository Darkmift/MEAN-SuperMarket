// credit: https://www.freakyjolly.com/angular-8-re-sizable-elements-and-layouts-in-angular-8-application/

import { Component, OnInit, HostListener, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from './services/orders.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, OnDestroy {
  @ViewChild('parentContainer', { static: true }) parentDiv: ElementRef;
  private switchToOrderViewSubjectListener: Subscription;
  // resize config
  cartDiv = {
    width: 0,
    x: 100,
    oldX: 0,
    grabber: false,
  };

  shopDiv = {
    width: 0,
  };
  /////
  // switch to shop on false,orders on true
  showShopOrOrder: boolean;

  ////
  // admin view
  isAdmin: boolean | Promise<boolean> = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordersService: OrdersService,
    private authService: AuthService) {

  }

  ngOnInit() {
    this.showShopOrOrder = this.ordersService.getShopOrOrder();
    // listen to view switch
    this.switchToOrderViewSubjectListener = this.ordersService.getswitchToOrderViewSubject().subscribe((shopOrOrder: boolean) => {
      console.log('TCL: ShopComponent -> ngOnInit -> shopOrOrder', shopOrOrder);
      this.showShopOrOrder = shopOrOrder;
    });
    this.authService.getRole().then((role) => {
      this.isAdmin = role;
    });
    console.log('TCL: ShopComponent -> ngOnInit ->  this.isAdmin', this.isAdmin);
    // resize code
    const totalWidth = this.parentDiv.nativeElement.offsetWidth;
    this.cartDiv.width = Math.floor((totalWidth / 100) * 25);
    this.shopDiv.width = Math.floor((totalWidth / 100) * 75);
    /////
  }

  // resize methods
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    if (!this.cartDiv.grabber) {
      return;
    }
    this.resizer(event.clientX - this.cartDiv.oldX);
    this.cartDiv.oldX = event.clientX;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.cartDiv.grabber = false;
  }

  resizer(offsetX: number) {
    const totalWidth = this.parentDiv.nativeElement.offsetWidth;
    const cartWidth = this.cartDiv.oldX;

    if (cartWidth < Math.floor((totalWidth / 100) * 22)) {
      this.shopDiv.width = Math.floor((totalWidth / 100) * 77);
      this.cartDiv.width = Math.floor((totalWidth / 100) * 22);
      return;
    }

    if (cartWidth > Math.floor((totalWidth / 100) * 40)) {
      return;
    }
    this.shopDiv.width = totalWidth - cartWidth;
    this.cartDiv.width += offsetX;
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: any) {

    if (event.target.id === 'resizeDiv') {
      this.cartDiv.grabber = true;
      this.cartDiv.oldX = event.clientX;
    }

  }
  ////

  // switch back to shop
  // switchToShop() {
  //   this.ordersService.switchViews(false);
  // }

  ngOnDestroy(): void {
    this.switchToOrderViewSubjectListener.unsubscribe();
  }

}
