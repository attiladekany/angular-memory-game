import { CardImages } from '../enums/card-images';

export class Card {
  constructor(
    public id: string,
    public cardImage: CardImages,
    public isInGame: boolean,
    public isFlippedUp: boolean
  ) {}
}
