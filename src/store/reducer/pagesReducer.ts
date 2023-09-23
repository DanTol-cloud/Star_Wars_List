import {
  countAction,
  CountActionTypes,
  CountState,
} from '../../types/CountreducerType';

const initialState: CountState = {
  count: 0,
  loading: false,
  error: null,
};

export const GET_COUNT = 'GET_COUNT';

export const countReducer = (
  state = initialState,
  action: countAction,
): CountState => {
  switch (action.type) {
    case CountActionTypes.GET_COUNT:
      return {loading: true, error: null, count: 0};
    case CountActionTypes.GET_COUNT_SUCCESS:
      return {loading: false, error: null, count: action.payload};
    case CountActionTypes.GET_COUNT_FAIL:
      return {loading: false, error: action.payload, count: 0};
    default:
      return state;
  }
};
