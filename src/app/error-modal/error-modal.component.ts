import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})

export class ErrorModalComponent implements OnInit {

  @Input() content: string;


  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  onClose(): void {
    this.activeModal.close('closed');
  }



  onDismiss(reason: string): void {
    this.activeModal.dismiss(reason);
  }

}
