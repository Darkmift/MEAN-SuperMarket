import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-info',
  templateUrl: './panel-info.component.html',
  styleUrls: ['./panel-info.component.css']
})
export class PanelInfoComponent implements OnInit {
  isloading = true;
  imagePath: string;
  totalProductCount: number;
  totalOrderCount: number;
  lastCartDate: string;
  hasLastCart: boolean;
  constructor() { }

  ngOnInit() {
    this.isloading = false;
    this.imagePath = 'http://localhost:3000/public/images/grumpy.jpg';
    this.lastCartDate = this.formatDate(new Date());
    this.totalProductCount = 0;
    this.totalOrderCount = 0;
    this.hasLastCart = true;
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

}
