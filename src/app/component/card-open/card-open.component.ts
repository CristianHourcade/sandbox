import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-open',
  templateUrl: './card-open.component.html',
  styleUrls: ['./card-open.component.scss']
})

// export interface DataCard {
//   header: string[];
// }

export class CardOpenComponent implements OnInit {

  @Input() Status;

  @Input() Codigo;
  @Input() Cliente;
  @Input() ClienteInfo;

  @Input() Unidad;
  @Input() Fiscal;
  @Input() Periodo;
  @Input() Integrantes;
  @Input() Pais;

  @Input() listado;
  @Input() status;

  @Input() columnsH;

  isOpened: boolean;
  isRunning;

  constructor() {
    this.isOpened = true;
  }

  ngOnInit() {

  }

  statusCard() {
    if ( this.isOpened ) {
      this.status = !this.isOpened;
      this.isOpened = !this.isOpened;

    } else {

      this.isOpened = !this.isOpened;
      this.status = this.isOpened;

    }

  }

  calculateHeight(){
    return (this.listado.length * 90 + 130 )+"px";
  }
}
