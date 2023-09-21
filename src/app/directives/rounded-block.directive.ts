import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRoundedBlock]'
})
export class RoundedBlockDirective {

  constructor(public elementRef: ElementRef, public renderer: Renderer2) { 
    this.establecerColorDeFondo();
    this.establecerBordeRedondeado();
    // console.log('RoundedBlockDirective');
    // console.log(this.elementRef);
  }
  establecerColorDeFondo() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'grey');
  }

  establecerBordeRedondeado() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '50px');
  }

}
