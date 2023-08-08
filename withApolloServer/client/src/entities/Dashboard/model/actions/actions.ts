import {createAction} from '@reduxjs/toolkit';

export interface IDashboardActon {
  days?: number;
  items?: number;
}

export interface IAllCategoriesAction {
  items?: number;
}

export const getAllProductsAction = createAction<IDashboardActon>(
  'DASHBOARD/GET_DASHBOARD_DATA'
);

export const getAllCategoriesAction = createAction<IAllCategoriesAction>(
  'DASHBOARD/GET_ALL_CATEGORIES'
);
