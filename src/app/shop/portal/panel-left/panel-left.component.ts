import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-panel-left',
  templateUrl: './panel-left.component.html',
  styleUrls: ['./panel-left.component.css']
})
export class PanelLeftComponent implements OnInit {

  @Input() isLoading: boolean;
  @Input() hasPreviousCart: boolean;
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

  private capitalize(s) {
    if (typeof s !== 'string') {
      return '';
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

}
