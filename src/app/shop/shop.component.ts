// credit: https://www.freakyjolly.com/angular-8-re-sizable-elements-and-layouts-in-angular-8-application/

import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @ViewChild('parentContainer', { static: true }) parentDiv: ElementRef;

  cartDiv = {
    width: 0,
    x: 100,
    oldX: 0,
    grabber: false,
  };

  shopDiv = {
    width: 0,
  };



  ngOnInit() {
    const totalWidth = this.parentDiv.nativeElement.offsetWidth;

    this.cartDiv.width = Math.floor((totalWidth / 100) * 25);
    this.shopDiv.width = Math.floor((totalWidth / 100) * 75);
  }

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

    if (cartWidth < Math.floor((totalWidth / 100) * 20)) {
      return;
    }

    if (cartWidth > Math.floor((totalWidth / 100) * 40)) {
      return;
    }
    this.shopDiv.width = totalWidth - cartWidth;
    this.cartDiv.width += offsetX;
  }


  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.cartDiv.grabber = true;
    this.cartDiv.oldX = event.clientX;
  }

}
