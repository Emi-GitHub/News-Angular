import { Action } from '@ngrx/store';

export enum NewsActionTypes {
  LOAD_NEWS = 'LOAD_NEWS',
  LOAD_NEWS_SUCCESS = 'LOAD_NEWS_SUCCESS',
  LOAD_NEWS_FAILURE = 'LOAD_NEWS_FAILURE',
}

export class LoadNewsAction implements Action {
  readonly type = NewsActionTypes.LOAD_NEWS;
}

export class LoadNewsSuccessAction implements Action {
  readonly type = NewsActionTypes.LOAD_NEWS_SUCCESS;
  constructor(public payload) {}
}

export class LoadNewsFailureAction implements Action {
  readonly type = NewsActionTypes.LOAD_NEWS_FAILURE;
  constructor(public payload: Error) {}
}

export type NewsAction =
  | LoadNewsAction
  | LoadNewsSuccessAction
  | LoadNewsFailureAction;
