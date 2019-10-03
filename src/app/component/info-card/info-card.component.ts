import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit, OnChanges {

  @Input() status;
  @Input() listado;

  classToAdd: string;

  constructor() {
    this.classToAdd = '';
  }


  ngOnChanges(props) {
    if ( props.status.currentValue === true ) {
        this.classToAdd = 'start';
    } else if( props.status.currentValue === false){
      this.classToAdd = 'to_end';
    }
  }



  ngOnInit() {
  }

}
