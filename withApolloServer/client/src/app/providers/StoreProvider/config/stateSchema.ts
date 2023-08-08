import {EnhancedStore} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
  Store,
} from 'redux';
import {createReducerManager} from './reducerManager';
import {DashboardSchema} from '@/entities/Dashboard';

export interface StateSchema {
  // async
  dashboard?: DashboardSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}

export type TStore = {
  reducerManager: ReturnType<typeof createReducerManager>;
} & Store;
