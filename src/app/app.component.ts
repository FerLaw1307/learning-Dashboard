import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { EstadoServidorComponent } from "./dashboard/estado-servidor/estado-servidor.component";
import { TraficoComponent } from "./dashboard/trafico/trafico.component";
import { RegistrosComponent } from "./dashboard/registros/registros.component";
import { DashboardElementComponent } from "./dashboard/dashboard-element/dashboard-element.component";

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, EstadoServidorComponent, TraficoComponent, RegistrosComponent, DashboardElementComponent],
})
export class AppComponent {
  
}
