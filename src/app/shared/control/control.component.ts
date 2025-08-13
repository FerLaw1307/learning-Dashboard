import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') nombreClase = 'control';
  
  label = input.required<string>();

  // @HostListener('click') 
  private el = inject(ElementRef); // referencia al objeto host.
 
  onClick(){
    console.log('Click carnal');
    console.log(this.el);
  }
}
