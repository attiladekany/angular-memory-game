import { CardImages } from '../enums/card-images';

export class Card {
  constructor(public cardImage: CardImages, public isInGame: boolean) {}
}
