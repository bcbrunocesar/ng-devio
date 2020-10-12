import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../../models/card/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  cardModel: CardModel;

  constructor() { }

  ngOnInit(): void {
  }

}
