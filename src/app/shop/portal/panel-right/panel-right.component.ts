import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-right',
  templateUrl: './panel-right.component.html',
  styleUrls: ['./panel-right.component.css']
})
export class PanelRightComponent implements OnInit {
  @Input() isLoading;
  @Input() imagePath;
  @Input() totalProductCount;
  @Input() totalOrderCount;
  @Input() hasPreviousCart;
  @Input() lastCartDate;
  constructor() { }

  ngOnInit() { }

  private formatDate(dateString: string) {
    console.log('TCL: PortalComponent -> formatDate -> dateString', dateString);
    const parsedDate = new Date(dateString);
    console.log('TCL: PortalComponent -> formatDate -> date', parsedDate);
    const monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];

    const day = parsedDate.getDate();
    const monthIndex = parsedDate.getMonth();
    const year = parsedDate.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

}
