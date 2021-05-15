import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  isOpen = false;
  isOnMouseUp = false;

  constructor(private elements: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    let part = this.elements.nativeElement.querySelector('.dropdown-menu');

    (this.isOpen) ? this.renderer.addClass(part, 'show') : this.renderer.removeClass(part, 'show')
  }

  // @HostListener('onmouseup') onResize() {
  //   this.isOnMouseUp = !this.isOnMouseUp;
  //   let part = this.elements.nativeElement;
  //   (this.isOnMouseUp) ? this.renderer.setAttribute(part, 'width', 'calc(300px*10%)') : this.renderer.removeAttribute(part, 'width');
  // }

}