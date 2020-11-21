import * as fromGameActions from './game.actions';

export interface State {
  selectedCardNumber: number;
  stepCounter: number;
  bestNumberOfSteps: number;
}

export const initialState: State = {
  selectedCardNumber: 6,
  stepCounter: 0,
  bestNumberOfSteps: 0,
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

    default:
      return state;
  }
}
