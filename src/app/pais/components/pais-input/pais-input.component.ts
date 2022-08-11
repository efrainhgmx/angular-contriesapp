import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent  implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();

  //Observable
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() { }

  //Ciclo de vida
  //Se dispara una sola vez cuando el componente es creado
  ngOnInit() {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe( valor => {
        this.onDebounce.emit(valor);
    })
  }

  buscar() {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada() {
   this.debouncer.next( this.termino );
  }
  

}
