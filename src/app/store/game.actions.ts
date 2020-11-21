import { Action } from '@ngrx/store';

export const CardNumberSelectionChange =
  '[Memory game] Card number selection change';
export const UpdateStepCounter = '[Memory game] Update step counter';
export const UpdateBestNumberOfSteps =
  '[Memory game] Update best number of steps';

export const InitGameCards = '[Memory game] Init game cards';

/**
 * Card number selection change.
 */
export class CardNumberSelectionChangeAction implements Action {
  public readonly type = CardNumberSelectionChange;
  constructor(public cardNumber: number) {}
}

export class UpdateStepCounterAction implements Action {
  public readonly type = UpdateStepCounter;
  constructor(public stepCounter: number) {}
}

export class UpdateBestNumberOfStepsAction implements Action {
  public readonly type = UpdateBestNumberOfSteps;
  constructor(public bestNumberOfSteps: number) {}
}
export class InitGameCardsAction implements Action {
  public readonly type = InitGameCards;
  constructor(public cardNumber: number) {}
}

/**
 * Exports a type with all actions for reducer.
 */
export type Actions =
  | CardNumberSelectionChangeAction
  | UpdateStepCounterAction
  | UpdateBestNumberOfStepsAction
  | InitGameCardsAction;
