import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDataChange]'
})
export class DataChangeDirective {

  constructor(el: ElementRef ) {
  }

}
