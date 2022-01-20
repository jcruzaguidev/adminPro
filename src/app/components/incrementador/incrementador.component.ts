import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
   ngOnInit() {
      this.btnClass = `btn ${ this.btnClass }`
   }

   //@Input('valor') progreso:number = 50; :: En cado de querer renombrar el nombre de la variable
   @Input() progreso:number = 50;
   @Input() btnClass:string = 'btn-primary';


   @Output() valorSalida: EventEmitter<number> = new EventEmitter();

   cambiarValor( valor:number ){
      this.progreso = this.progreso + valor;
      if (this.progreso < 0) this.progreso = 0;
      if (this.progreso > 100) this.progreso = 100;

      this.valorSalida.emit(this.progreso);
   }

   onChange( valor:number ){
      this.progreso = valor;
      if (this.progreso < 0) this.progreso = 0;
      if (this.progreso > 100) this.progreso = 100;

      this.valorSalida.emit(this.progreso);
   }

}
