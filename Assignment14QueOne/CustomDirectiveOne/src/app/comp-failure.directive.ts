import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true
})
export class CompFailureDirective {

  constructor(private elementobj : ElementRef) { }

  @HostListener('mouseenter') mouseenter()
  {
    this.elementobj.nativeElement.style.color = 'red';
  }

  @HostListener('mouseleave') mouseleave()
  {
    this.elementobj.nativeElement.style.color = 'black';
  }
}
