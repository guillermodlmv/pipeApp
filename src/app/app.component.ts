import { Component } from '@angular/core';
import localeEs from '@angular/common/locales/es-MX'
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private primengConfig : PrimeNGConfig){}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
