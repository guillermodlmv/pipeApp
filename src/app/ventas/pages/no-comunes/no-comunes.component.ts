import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
  //i18nSelect
  nombre : string = 'Guillermo';
  genero : string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

    //i18nPlural
    clientes : string[] = ['Andrea','Guillermo','Korina','Valeria','Alma'];
    clientesMapa = {
      '=0' : 'no tenemos ningun cliente',
      '=1' : 'tenemos un cliente esperando',
      'other' : 'tenemos # clientes esperando'
    }

    cambiarCliente(){
      if(this.nombre === 'Guillermo'){
        this.nombre = 'Korina';
        this.genero = 'femenino';
      }else{
        this.nombre = 'Guillermo';
        this.genero = 'masculino';
      }
      
    }

    borrarCliente(){
      this.clientes.pop()
    }
}
