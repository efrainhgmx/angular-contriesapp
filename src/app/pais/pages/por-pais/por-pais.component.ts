import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li {
      cursor: ponter;
    }`
  ]
})
export class PorPaisComponent  {

  termino: string = 'Hola mundo';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugerios: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService){}

  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino).subscribe( (paises) => {
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugerios = paises.splice(0,5), 
      (err) => this.paisesSugerios = [])
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
    this.mostrarSugerencias = false;
  }

}
