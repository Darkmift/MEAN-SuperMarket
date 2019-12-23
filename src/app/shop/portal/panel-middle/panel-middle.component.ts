import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-middle',
  templateUrl: './panel-middle.component.html',
  styleUrls: ['./panel-middle.component.css']
})
export class PanelMiddleComponent implements OnInit {
  @Input() isLoading: boolean;
  @Input() imagePath: string;
  constructor() { }

  ngOnInit() {
  }

}
