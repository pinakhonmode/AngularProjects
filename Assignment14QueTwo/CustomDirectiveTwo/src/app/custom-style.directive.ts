import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private eleobj : ElementRef) { 
    this.eleobj.nativeElement.style.background = 'yellow';
    this.eleobj.nativeElement.style.fontWeight = 'bold';
  }




}
