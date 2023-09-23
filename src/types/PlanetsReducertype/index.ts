export interface planetAction {
  type: string;
  payload: any;
}

export enum PlanetActionTypes {
  GET_PLANET = 'GET_PLANET',
  GET_PLANET_SUCCESS = 'GET_PLANET_SUCCESS',
  GET_PLANET_FAIL = 'GET_PLANET_FAIL',
}

export interface GetPlanetAction {
  type: PlanetActionTypes.GET_PLANET;
}

export interface GetPlanetSuccessAction {
  type: PlanetActionTypes.GET_PLANET_SUCCESS;
  payload: any[];
}

export interface GetPlanetFailAction {
  type: PlanetActionTypes.GET_PLANET_FAIL;
  payload: string;
}

export type PlanetAction =
  | GetPlanetAction
  | GetPlanetSuccessAction
  | GetPlanetFailAction;

export interface PlanetState {
  planet: string;
  loading: boolean;
  error: string | null;
}
