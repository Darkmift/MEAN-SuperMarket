import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appNoAutocomplete]'
})
export class NoAutocompleteDirective implements OnInit {
  // tslint:disable-next-line: variable-name
  private _chrome = navigator.userAgent.indexOf('Chrome') > -1;
  // tslint:disable-next-line: variable-name
  constructor(private _el: ElementRef) { }
  ngOnInit() {
    if (this._chrome) {
      if (this._el.nativeElement.getAttribute('autocomplete') === 'off') {
        setTimeout(() => {
          this._el.nativeElement.setAttribute('autocomplete', 'offoff');
        });
      }
    }
  }
}
