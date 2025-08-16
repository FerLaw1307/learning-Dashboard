import { AfterViewInit, Component, effect, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-estado-servidor',
  standalone: true,
  imports: [],
  templateUrl: './estado-servidor.component.html',
  styleUrl: './estado-servidor.component.css',
})
export class EstadoServidorComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  estadoActual = signal<'online' | 'offline' | 'unknow'>('offline');
  private intervalo?: ReturnType<typeof setInterval>;
  //hooks de ciclo de vida.

  ngOnInit() {
    console.log('On INIT');
    this.intervalo = setInterval(() => {
      const rnd = Math.random();
      if (rnd > 0.5) {
        this.estadoActual.set('online');
      } else if (rnd > 0.1) {
        this.estadoActual.set('offline');
      } else {
        this.estadoActual.set('unknow');
      }
    }, 3000);
  }

  constructor() {
    effect(() => {//subscripion al signal. funcion muy importante cuando los valores del signal cambian.
      console.log(this.estadoActual());
    });
  }
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
