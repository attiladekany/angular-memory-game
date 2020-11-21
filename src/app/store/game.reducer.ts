import { CardImages } from '../enums/card-images';
import { Card } from '../models/card';
import * as fromGameActions from './game.actions';

export interface State {
  selectedCardNumber: number;
  stepCounter: number;
  bestNumberOfSteps: number;
  cards: Card[];
}

export const initialState: State = {
  selectedCardNumber: 6,
  stepCounter: 0,
  bestNumberOfSteps: 0,
  cards: [],
};

export function reducer(
  state = initialState,
  action: fromGameActions.Actions
): State {
  switch (action.type) {
    case fromGameActions.CardNumberSelectionChange:
      return {
        ...state,
        selectedCardNumber: action.cardNumber,
      };

    case fromGameActions.UpdateStepCounter:
      return {
        ...state,
        stepCounter: action.stepCounter,
      };

    case fromGameActions.UpdateBestNumberOfSteps:
      return {
        ...state,
        bestNumberOfSteps: action.bestNumberOfSteps,
      };

    case fromGameActions.InitGameCards:
      return {
        ...state,
        cards: getGameCards(action.cardNumber),
      };

    default:
      return state;
  }
}

export function getGameCards(cardNumber: number): Card[] {
  const numberOfPairs = cardNumber / 2;
  const cards = [];

  const allImage = [];
  for (const imageType in CardImages) {
    allImage.push(CardImages[CardImages[imageType]]);
  }

  for (let i = 0; i < numberOfPairs; i++) {
    const image = CardImages[allImage[i]];
    const pair1 = new Card(image, true);
    const pair2 = new Card(image, true);

    cards.push(pair1, pair2);
  }
  return cards;
}
