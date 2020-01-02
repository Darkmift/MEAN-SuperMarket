import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from '../../models/Order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {

  @Input() order: Order;
  @Input() total: number;

  constructor(
    private router: Router,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  navigateOut() {
    this.router.navigate(['/portal']);
  }

  onClose(): void {
    this.activeModal.close('closed');
    this.navigateOut();
  }



  onDismiss(reason: string): void {
    this.activeModal.dismiss(reason);
    this.navigateOut();
  }

}
