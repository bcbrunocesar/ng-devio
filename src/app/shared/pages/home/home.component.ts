import { Component, OnInit } from '@angular/core';
import { CardModel } from '../../models/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cardModel: CardModel;

  constructor() {}

  ngOnInit() {
    this.cardModel = {
      title: 'Teste título',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  }
}
