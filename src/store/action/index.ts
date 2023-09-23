import * as CharactersActionCreators from './charactersAction';
import * as PlanetActionCreator from './planetAction';
import * as CountActionCreator from './pagesAction';

export default {
  ...CharactersActionCreators,
  ...PlanetActionCreator,
  ...CountActionCreator,
};
