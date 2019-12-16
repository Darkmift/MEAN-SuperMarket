import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bit',
  templateUrl: './test-bit.component.html',
  styleUrls: ['./test-bit.component.css']
})
export class TestBitComponent {

  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

}
