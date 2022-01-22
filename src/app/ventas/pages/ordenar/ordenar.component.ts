import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = false;
  title: string = 'Mayúsculas'
  ordenarPor: string = 'sin valor';
  heroes : Heroe[] =[
    {
      nombre : 'Superman', 
      vuela  : true,
      color  : Color.azul,
    },
    {
      nombre : 'Batman', 
      vuela  : false,
      color  : Color.negro,
    },
    {
      nombre : 'Robin', 
      vuela  : false,
      color  : Color.verde,
    },
    {
      nombre : 'Daredevil', 
      vuela  : false,
      color  : Color.rojo,
    },
    {
      nombre : 'Linterna Verde', 
      vuela  : true,
      color  : Color.verde,
    },
  ]


  onToggle(){
    this.enMayusculas = !this.enMayusculas;
    this.title === 'Mayúsculas' ? this.title = 'Minúsculas' : this.title = 'Mayúsculas'
  }

  cambairOrden( valor: string ) {
    this.ordenarPor = valor;
  }

}
