import { ActionReducerMap } from '@ngrx/store';

import * as fromGameReducer from './game.reducer';

export * from './game.selector';

export interface State {
  gameSettings: fromGameReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  gameSettings: fromGameReducer.reducer,
};
