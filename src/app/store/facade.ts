import { Observable } from 'rxjs';

import { Action, MemoizedSelector, select, Store } from '@ngrx/store';
import { MemoizedSelectorWithProps } from '@ngrx/store/src/selector';

export type SelectorFunction<T, U> = (state: T) => U;

export abstract class Facade<T> {
  constructor(private store: Store<T>) {}

  /**
   * Wrapper for NGRX select
   */
  public select<U, Props>(
    selector:
      | MemoizedSelector<T, U>
      | MemoizedSelectorWithProps<T, Props, U>
      | SelectorFunction<T, U>,
    props?: Props
  ): Observable<U> {
    return this.store.pipe(select(selector, props));
  }

  public dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
