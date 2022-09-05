import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  title = 'Contador App';
  numero: number = 0;

  base: number = 2;

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

  constructor() { }

  ngOnInit(): void {
  }


}