import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {

  // @HostBinding('class') nombreClase = 'control';
  constructor(){
    afterRender(() =>{
      console.log('AFTER RENDER');
    });

    afterNextRender(() =>{
      console.log('AFTER NEXT RENDER');
    });
  }

  label = input.required<string>();

  // @HostListener('click')
  private el = inject(ElementRef); // referencia al objeto host.

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  onClick() {
    console.log('Click carnal');
    console.log(this.el);
    console.log(this.control());
  }
}
