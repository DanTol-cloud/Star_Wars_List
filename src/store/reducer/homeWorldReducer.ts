import {
  planetAction,
  PlanetActionTypes,
  PlanetState,
} from '../../types/PlanetsReducertype';

const initialState: PlanetState = {
  planet: '',
  loading: false,
  error: null,
};

export const homeWorldReducer = (
  state = initialState,
  action: planetAction,
): PlanetState => {
  switch (action.type) {
    case PlanetActionTypes.GET_PLANET:
      return {loading: true, error: null, planet: ''};
    case PlanetActionTypes.GET_PLANET_SUCCESS:
      return {loading: false, error: null, planet: action.payload};
    case PlanetActionTypes.GET_PLANET_FAIL:
      return {loading: false, error: action.payload, planet: ''};
    default:
      return state;
  }
};
