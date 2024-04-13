import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighligth]',
  standalone: true
})
export class HighligthDirective {

  @Input() color = 'transparent'

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('click') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

}
