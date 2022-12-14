import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Contador App';
  numero: number = 0;

  base: number = 5;

  sumar (valor: number = this.base) {
    this.numero += valor;
  }
  resta (valor: number = this.base) {
    this.numero -= valor;
  }
  multiplicar (numero: number, numero2: number) {
    this.numero = numero * numero2;
  }
  dividir (numero: number, numero2: number) {
    this.numero = numero / numero2;
  }
}
