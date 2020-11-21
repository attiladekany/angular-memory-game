import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromHistoryActions from './game.actions';

import * as fromRoot from './index';
import { Facade } from './facade';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class GameSettingsFacade extends Facade<fromRoot.State> {
  public cardNumber$: Observable<number>;
  public bestNumberOfSteps$: Observable<number>;
  public stepCounter$: Observable<number>;
  public cards$: Observable<Card[]>;

  constructor(store: Store<fromRoot.State>) {
    super(store);
    this.initObservables();
  }

  /**
   * Sets the observables.
   */
  public initObservables(): void {
    this.cardNumber$ = this.select(fromRoot.getSelectedCardNumber);
    this.stepCounter$ = this.select(fromRoot.getStepCounter);
    this.bestNumberOfSteps$ = this.select(fromRoot.getBestNumberOfSteps);
    this.cards$ = this.select(fromRoot.getCards);
  }

  public selectCardNumber(cardNumber: number): void {
    this.dispatch(
      new fromHistoryActions.CardNumberSelectionChangeAction(cardNumber)
    );
  }

  public initGameCards(cardNumber): void{
    this.dispatch(
      new fromHistoryActions.InitGameCardsAction(cardNumber)
    );
  }

  public updateBestNumberOfSteps(bestNumberOfSteps: number): void {
    this.dispatch(
      new fromHistoryActions.UpdateBestNumberOfStepsAction(bestNumberOfSteps)
    );
  }

  public updateStepCounter(stepCounter: number): void {
    this.dispatch(new fromHistoryActions.UpdateStepCounterAction(stepCounter));
  }
}
