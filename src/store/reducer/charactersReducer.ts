import {
  charactersAction,
  CharactersActionTypes,
  CharactersState,
} from '../../types/CharactersReducerTypes';

const initialState: CharactersState = {
  characters: [],
  loading: false,
  error: null,
};

export const charactersReducer = (
  state = initialState,
  action: charactersAction,
): CharactersState => {
  switch (action.type) {
    case CharactersActionTypes.GET_CHARACTERS:
      return {loading: true, error: null, characters: []};
    case CharactersActionTypes.GET_CHARACTERS_SUCCESS:
      return {loading: false, error: null, characters: [...action.payload]};
    case CharactersActionTypes.GET_CHARACTERS_FAIL:
      return {loading: false, error: action.payload, characters: []};
    case CharactersActionTypes.SEARCH_CHARACTERS:
      return {loading: false, error: null, characters: [...action.payload]};
    default:
      return state;
  }
};
