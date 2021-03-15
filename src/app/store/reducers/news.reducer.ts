import { NewsAction, NewsActionTypes } from '../actions/news.action';

export interface NewsState {
  list: any;
  loading: boolean;
  error: Error;
}

const initialState: NewsState = {
  list: [],
  loading: false,
  error: undefined,
};

export function NewsReducer(
  state: NewsState = initialState,
  action: NewsAction
) {
  switch (action.type) {
    case NewsActionTypes.LOAD_NEWS:
      return { ...state, loading: true };
    case NewsActionTypes.LOAD_NEWS_SUCCESS:
      return { ...state, list: action.payload, loading: false };
    case NewsActionTypes.LOAD_NEWS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
