import { Component } from '@angular/core';

//selector de elemento <app-button>
//Selector de atributo button[appButton]
//Selector de Clase .app-button

@Component({
  selector: 'button[appButton]', 
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
