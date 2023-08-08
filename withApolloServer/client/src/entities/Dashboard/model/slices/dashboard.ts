import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DashboardSchema, ICategories} from '../types/dashboard';

const initialState: DashboardSchema = {
  isLoading: false,
  allProducts: [],
  allCategories: [],
};

export const dashboardSlice = createSlice({
  initialState,
  name: 'dashboard',
  reducers: {
    setLoadingDashboardSlice: (state, {payload}: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setAllProductsSlice: (state, {payload}: PayloadAction<number[]>) => {
      state.allProducts = payload;
    },
    setAllCategoriesSlice: (state, {payload}: PayloadAction<ICategories[]>) => {
      state.allCategories = payload;
    },
  },
});

export const {
  setLoadingDashboardSlice,
  setAllProductsSlice,
  setAllCategoriesSlice,
} = dashboardSlice.actions;

export const {reducer: dashboardReducer} = dashboardSlice;
