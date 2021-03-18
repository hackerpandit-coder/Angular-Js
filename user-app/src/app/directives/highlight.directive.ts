import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() favColor : string;

  @HostBinding('style.backgroundColor') bgColor : any;

  @HostListener('mouseenter') onmouseenter(){
    this.bgColor = this.favColor;
  }

  @HostListener('mouseleave') onmouseleave(){
    this.bgColor = 'transparent';
  }

  constructor(private elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.backgroundColor = 'aqua';
   }

}
