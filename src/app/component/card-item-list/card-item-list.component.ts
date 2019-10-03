import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-item-list',
  templateUrl: './card-item-list.component.html',
  styleUrls: ['./card-item-list.component.scss']
})
export class CardItemListComponent implements OnInit {

  @Input() item;
  @Input() index;

  constructor() { }

  ngOnInit() {
  }

}
