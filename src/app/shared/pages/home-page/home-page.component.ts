import { Component, OnInit } from '@angular/core';

import { CardModel } from '@sharedModels/card/card.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public cardModel: CardModel;

  constructor() {}

  ngOnInit() {
    this.cardModel = {
      title: 'Teste título',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  }
}
