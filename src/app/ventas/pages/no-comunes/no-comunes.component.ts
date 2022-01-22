import { Component } from '@angular/core';
import { interval } from 'rxjs';

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

    //Keyvalue Pipe
    persona = {
      nombe: 'Guillermo',
      edad: 24,
      direccion: 'Chiapas, Mexico'
    }

    // Json Pipe
    heroes= [
      {
        nombre: 'Superman',
        vuela: true,
      },
      {
        nombre: 'Robin',
        vuela: false,
      },
      {
        nombre: 'Aquaman',
        vuela: false,
      },
  ]

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() =>{
      resolve( 'Tenemos data de promesa')
    }, 3500 )
  })
}
