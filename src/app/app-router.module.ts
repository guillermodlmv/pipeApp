import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';

const routes : Routes = [

  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full',
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent,
  },
  {
    path: 'numeros',
    component: NumerosComponent,
  },
  {
    path: 'ordenar',
    component: OrdenarComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
