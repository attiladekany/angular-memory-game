import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureStoreName } from './feature-store-name';
import { State } from './index';

/**
 * Feature selector.
 */
const selectFeature = createFeatureSelector<State>(featureStoreName);

/**
 * Selected card number.
 */
export const getSelectedCardNumber = createSelector(
  selectFeature,
  (state: State) => state.gameSettings.selectedCardNumber
);

/**
 * Get step counter.
 */
export const getStepCounter = createSelector(
  selectFeature,
  (state: State) => state.gameSettings.stepCounter
);

/**
 * Get best Number Of Steps.
 */
export const getBestNumberOfSteps = createSelector(
  selectFeature,
  (state: State) => state.gameSettings.bestNumberOfSteps
);

/**
 * Get cards.
 */
export const getCards = createSelector(
  selectFeature,
  (state: State) => state.gameSettings.cards
);
