import { Component } from '@angular/core';
import { NuevoRegistroComponent } from './nuevo-registro/nuevo-registro.component';
import { Registro } from './registro.model';
import { RegistroComponent } from "./registro/registro.component";

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [NuevoRegistroComponent, RegistroComponent],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css',
})
export class RegistrosComponent {
  registros: Registro[] = [];

  onAddRecord(registro: { titulo: string; texto: string }) {
    const newRecord: Registro = {
      id: Math.random().toString(),
      titulo: registro.titulo,
      textoPedido: registro.texto,
      estado: 'abierto'
    };

    this.registros.push(newRecord);
  }

  onCloseRecord(id: string){
    this.registros = this.registros.map((record) => {
      if(record.id === id){
        return {...record, estado : 'cerrado'}
      }
      return record;
    });
  }
}
