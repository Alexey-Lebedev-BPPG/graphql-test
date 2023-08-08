import {
  AnyAction,
  CombinedState,
  configureStore,
  PreloadedState,
  Reducer,
  ReducersMapObject,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import {NoInfer} from '@reduxjs/toolkit/dist/tsHelpers';
import createSagaMiddleware from 'redux-saga';
import {createReducerManager} from './reducerManager';
import {saga} from './rootSaga';
import {StateSchema, ThunkExtraArg, TStore} from './stateSchema';

export function createReduxStore(
  initialState?: PreloadedState<CombinedState<NoInfer<StateSchema>>>,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const sagaMiddleware = createSagaMiddleware();

  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: true,
        serializableCheck: true,
      }).concat(sagaMiddleware),
    preloadedState: initialState,
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
  }) as TStore;

  store.reducerManager = reducerManager;
  sagaMiddleware.run(saga);

  return {store};
}

export type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArg, AnyAction>;
export type AppThunkDispatch = ThunkDispatch<
  StateSchema,
  ThunkExtraArg,
  AnyAction
>;
