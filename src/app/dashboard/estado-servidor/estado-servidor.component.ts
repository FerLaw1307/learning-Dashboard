import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-estado-servidor',
  standalone: true,
  imports: [],
  templateUrl: './estado-servidor.component.html',
  styleUrl: './estado-servidor.component.css',
})
export class EstadoServidorComponent implements OnInit, OnChanges {
  estadoActual: 'online' | 'offline' | 'unknow' = 'online';
  //hooks de ciclo de vida.

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();
      if (rnd > 0.5) {
        this.estadoActual = 'online';
      } else if (rnd > 0.1) {
        this.estadoActual = 'offline';
      } else {
        this.estadoActual = 'unknow';
      }
    }, 3000);
  }

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
}
