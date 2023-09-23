export interface countAction {
  type: string;
  payload: any;
}

export enum CountActionTypes {
  GET_COUNT = 'GET_COUNT',
  GET_COUNT_SUCCESS = 'GET_COUNT_SUCCESS',
  GET_COUNT_FAIL = 'GET_COUNT_FAIL',
}

export interface GetCountAction {
  type: CountActionTypes.GET_COUNT;
}

export interface GetCountSuccessAction {
  type: CountActionTypes.GET_COUNT_SUCCESS;
  payload: string;
}

export interface GetCountFailAction {
  type: CountActionTypes.GET_COUNT_FAIL;
  payload: string;
}

export type CountAction =
  | GetCountAction
  | GetCountSuccessAction
  | GetCountFailAction;

export interface CountState {
  count: number;
  loading: boolean;
  error: string | null;
}
