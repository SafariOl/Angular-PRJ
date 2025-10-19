import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeElementStyle]'
})
export class ChangeElementStyle {
  @Input() appChangeElementStyle = ""
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.appChangeElementStyle || 'blue')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor('')
  }

  setColor (color: string) {
    this.el.nativeElement.style.backgroundColor = color
    this.el.nativeElement.style.transition = 'all .2s ease'
  }
}
