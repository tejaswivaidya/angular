import { Directive, Renderer, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSecond]'
})
export class SecondDirective implements OnInit {

  constructor(private renderer2: Renderer,private elref: ElementRef) { }

  ngOnInit(){
  
  }

}
