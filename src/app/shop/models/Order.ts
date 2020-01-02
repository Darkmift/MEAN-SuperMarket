import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Order {
  city: string;
  street: string;
  ngbShippingDate: NgbDateStruct;
  deliveryDate: Date;
  ccLastDigits: string;
  ccType: string;
  cartRef: string;
}
