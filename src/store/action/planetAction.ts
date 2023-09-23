import {Dispatch} from 'react';
import {PlanetAction, PlanetActionTypes} from '../../types/PlanetsReducertype';

export const fetchPlanetNames = (url: string) => {
  return async (dispatch: Dispatch<PlanetAction>) => {
    try {
      dispatch({type: PlanetActionTypes.GET_PLANET});
      const res = await fetch(url);
      const planet = await res.json();
      dispatch({
        type: PlanetActionTypes.GET_PLANET_SUCCESS,
        payload: planet.name,
      });
    } catch (error) {
      dispatch({
        type: PlanetActionTypes.GET_PLANET_FAIL,
        // @ts-ignore
        payload: error.message,
      });
    }
  };
};
