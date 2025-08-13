import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-nuevo-registro',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './nuevo-registro.component.html',
  styleUrl: './nuevo-registro.component.css',
})
export class NuevoRegistroComponent implements AfterViewInit, OnInit, AfterContentInit {
  ngAfterContentInit(): void {
    console.log('NuevoRegistroComponent ON AFTER CONTENT INIT');
    console.log(this.formulario?.nativeElement);
  }
  ngOnInit(): void {
    console.log('ON INIT');
    console.log(this.formulario?.nativeElement);
  }

  ngAfterViewInit(){
    console.log('AFTER VIEW INIT: garantiza que ya se inicio la vista, el formulario ya existe');
    console.log(this.formulario?.nativeElement);
  }
  @ViewChild('miFormulario') private formulario?: ElementRef<HTMLFormElement>;

  // private formulario = viewChild.required<ElementRef<HTMLFormElement>>('miFormulario');
  onSubmit(titulo: string, textoRegistro: string) {
    console.log(titulo);
    console.log(textoRegistro);
    this.formulario?.nativeElement.reset();
  }
}
