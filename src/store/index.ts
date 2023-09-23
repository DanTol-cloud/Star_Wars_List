import {charactersReducer} from './reducer/charactersReducer';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {countReducer} from './reducer/pagesReducer';
import {homeWorldReducer} from './reducer/homeWorldReducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
  count: countReducer,
  planet: homeWorldReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
