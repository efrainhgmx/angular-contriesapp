import { Component,  } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  
  button {
    margin-right: 15px;
  }
  `
  ]
})
export class PorRegionComponent  {

  regiones: string[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';

  constructor() { }

  activarRegion( region: string ) {
    this.regionActiva = region;
  }

}
