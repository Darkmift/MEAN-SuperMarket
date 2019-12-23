import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-right',
  templateUrl: './panel-right.component.html',
  styleUrls: ['./panel-right.component.css']
})
export class PanelRightComponent implements OnInit {
  @Input() isLoading: boolean;
  @Input() imagePath: string;
  @Input() totalProductCount: number;
  @Input() totalOrderCount: number;
  @Input() hasPreviousCart: boolean;
  @Input() lastCartDate: Date;
  @Input() userRole: string;
  constructor() { }

  ngOnInit() { }

  private formatDate(dateString: Date) {
    const parsedDate = new Date(dateString);
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
