import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-nuevo-registro',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './nuevo-registro.component.html',
  styleUrl: './nuevo-registro.component.css'
})
export class NuevoRegistroComponent {
 onSubmit(tituloIngresado: HTMLInputElement, pedidoIngresado: HTMLTextAreaElement){
  console.log('Enviadooooooooo carnal!');
  console.dir(tituloIngresado.value);
  console.dir(pedidoIngresado.value);
 }
}
