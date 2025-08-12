import { Component, ViewEncapsulation } from '@angular/core';

//selector de elemento <app-button>
//Selector de atributo button[appButton]
//Selector de Clase .app-button

@Component({
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  // encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {}
