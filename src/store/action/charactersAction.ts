import {
  CharactersAction,
  CharactersActionTypes,
} from '../../types/CharactersReducerTypes';
import {Dispatch} from 'react';

export const fetchCharactersList = (page: number) => {
  return async (dispatch: Dispatch<CharactersAction>) => {
    try {
      dispatch({type: CharactersActionTypes.GET_CHARACTERS});
      const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
      const characters = await res.json();
      dispatch({
        type: CharactersActionTypes.GET_CHARACTERS_SUCCESS,
        payload: characters.results,
      });
    } catch (error) {
      dispatch({
        type: CharactersActionTypes.GET_CHARACTERS_FAIL,
        // @ts-ignore
        payload: error.message,
      });
    }
  };
};

export const searchCharacters = (name: string) => {
  return async (dispatch: Dispatch<CharactersAction>) => {
    try {
      const res = await fetch(`https://swapi.dev/api/people/?search=${name}`);
      const search = await res.json();
      dispatch({
        type: CharactersActionTypes.SEARCH_CHARACTERS,
        payload: search.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
