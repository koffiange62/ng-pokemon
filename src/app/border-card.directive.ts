import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {

  defaultHeight : number = 200;
  initialColor : string = "#f5f5f5";
  defaultColor : string = "#00b4ff";

  constructor(private el : ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input('pkmBorderCard') borderColor : string;

  @HostListener("mouseenter") omMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.setBorder("#f5f5f5");
  }

  setHeight(height : number){
    this.el.nativeElement.style.height = height+"px";
  }

  setBorder(color : string){
    this.el.nativeElement.style.border = 'solid 4px '+color;
  }
}
