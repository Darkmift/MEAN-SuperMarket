import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Subject, Subscription } from 'rxjs';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-panel-info',
  templateUrl: './panel-info.component.html',
  styleUrls: ['./panel-info.component.css']
})
export class PanelInfoComponent implements OnInit, OnDestroy {
  isloading = true;
  imagePath: string;
  totalProductCount: number;
  totalOrderCount: number;
  lastCartDate: string;
  hasLastCart: boolean;
  getProductCountSubjectListener: Subscription;
  getOrderCountSubjectListener: Subscription;
  constructor(
    private productsService: ProductsService,
    private ordersService: OrdersService) { }

  ngOnInit() {
    this.isloading = false;
    this.imagePath = 'http://localhost:3000/public/images/grumpy.jpg';
    this.lastCartDate = this.formatDate(new Date());
    this.totalProductCount = 0;
    this.totalOrderCount = 0;
    this.hasLastCart = true;

    // fetch count
    this.productsService.getProductCount();
    // subscribe to count
    this.getProductCountSubjectListener = this.productsService.getCountSubject()
      .subscribe((count: number) => {
        this.totalProductCount = count;
      });

    // fetch count
    this.ordersService.getOrderCount();
    // subscribe to count
    this.getOrderCountSubjectListener = this.ordersService.getCountSubject()
      .subscribe((count: number) => {
        this.totalOrderCount = count;
      });

  }

  private formatDate(date) {
    const monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  ngOnDestroy(): void {
    this.getProductCountSubjectListener.unsubscribe();
    this.getOrderCountSubjectListener.unsubscribe();
  }

}
