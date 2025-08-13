import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-estado-servidor',
  standalone: true,
  imports: [],
  templateUrl: './estado-servidor.component.html',
  styleUrl: './estado-servidor.component.css',
})
export class EstadoServidorComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  estadoActual: 'online' | 'offline' | 'unknow' = 'online';
  private intervalo?: ReturnType<typeof setInterval>;
  //hooks de ciclo de vida.

  ngOnInit() {
    console.log('On INIT');
    this.intervalo = setInterval(() => {
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
  ngOnDestroy(): void {
    clearTimeout(this.intervalo);
  }
  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
}
