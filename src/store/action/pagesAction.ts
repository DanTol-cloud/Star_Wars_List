import {Dispatch} from 'react';
import {CountAction, CountActionTypes} from '../../types/CountreducerType';

export const fetchCharactersCount = () => {
  return async (dispatch: Dispatch<CountAction>) => {
    try {
      dispatch({type: CountActionTypes.GET_COUNT});
      const res = await fetch('https://swapi.dev/api/people/');
      const count = await res.json();
      dispatch({
        type: CountActionTypes.GET_COUNT_SUCCESS,
        payload: count.count,
      });
    } catch (error) {
      // @ts-ignore
      dispatch({type: CountActionTypes.GET_COUNT_FAIL, payload: error.message});
    }
  };
};
