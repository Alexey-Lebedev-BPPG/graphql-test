import {StateSchema} from '@/app/providers/StoreProvider';

export const getDashboardIsLoading = (state: StateSchema) =>
  state.dashboard?.isLoading;

export const getAllProducts = (state: StateSchema) =>
  state.dashboard?.allProducts;

export const getAllCategories = (state: StateSchema) =>
  state.dashboard?.allCategories;
