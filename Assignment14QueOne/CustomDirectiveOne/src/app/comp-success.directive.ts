import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true
})
export class CompSuccessDirective {

  constructor(private elementobj : ElementRef) { }

  @HostListener('mouseenter') mouseenter()
  {
    this.elementobj.nativeElement.style.color = 'green';
  }

  @HostListener('mouseleave') mouseleave()
  {
    this.elementobj.nativeElement.style.color = 'black';
  }

}
