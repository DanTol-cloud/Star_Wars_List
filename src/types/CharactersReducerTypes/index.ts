export interface CharactersState {
  characters: any[];
  loading: boolean;
  error: string | null;
}

export interface charactersAction {
  type: string;
  payload: any;
}

export enum CharactersActionTypes {
  GET_CHARACTERS = 'GET_CHARACTERS',
  GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS',
  GET_CHARACTERS_FAIL = 'GET_CHARACTERS_FAIL',
  SEARCH_CHARACTERS = 'SEARCH_CHARACTERS',
}

export interface GetCharactersAction {
  type: CharactersActionTypes.GET_CHARACTERS;
}

export interface GetCharactersSuccessAction {
  type: CharactersActionTypes.GET_CHARACTERS_SUCCESS;
  payload: any[];
}

export interface GetCharactersFailAction {
  type: CharactersActionTypes.GET_CHARACTERS_FAIL;
  payload: string;
}

export interface SearchCharactersAction {
  type: CharactersActionTypes.SEARCH_CHARACTERS;
  payload: string;
}

export type CharactersAction =
  | GetCharactersAction
  | GetCharactersSuccessAction
  | GetCharactersFailAction
  | SearchCharactersAction;
