import {PayloadAction} from '@reduxjs/toolkit';
import {put, takeEvery} from 'redux-saga/effects';
import {
  getAllCategoriesAction,
  getAllProductsAction,
  IAllCategoriesAction,
  IDashboardActon,
} from '../actions/actions';
import {
  setAllCategoriesSlice,
  setAllProductsSlice,
  setLoadingDashboardSlice,
} from '../slices/dashboard';
import {
  getAllCategoriesRequest,
  getAllProductsRequest,
} from 'src/shared/api/services/dashboard';
import axios from 'axios';
import {ICategories} from '../types/dashboard';

function* workerGetDashboardCards({payload}: PayloadAction<IDashboardActon>) {
  try {
    yield put(setLoadingDashboardSlice(true));
    const response: IResponse<{getFilterData: number[]}> =
      yield getAllProductsRequest(payload);
    yield put(setAllProductsSlice(response.data.getFilterData));
    yield put(setLoadingDashboardSlice(false));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const customError = error.response as IResponse<IErrorMessage>;
      if (
        customError?.data?.statusCode !== 401 &&
        customError?.data?.message !== 'User not found'
      )
        console.log(customError?.data?.message, 'error');
    } else console.log('error in saga', error);
    yield put(setLoadingDashboardSlice(false));
  }
}

export function* watcherGetDashboardCards() {
  yield takeEvery(getAllProductsAction.toString(), workerGetDashboardCards);
}

function* workerGetAllCategories({
  payload,
}: PayloadAction<IAllCategoriesAction>) {
  try {
    yield put(setLoadingDashboardSlice(true));
    const response: IResponse<{getCategoriesData: ICategories[]}> =
      yield getAllCategoriesRequest(payload);
    yield put(setAllCategoriesSlice(response.data.getCategoriesData));
    yield put(setLoadingDashboardSlice(false));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const customError = error.response as IResponse<IErrorMessage>;
      if (
        customError?.data?.statusCode !== 401 &&
        customError?.data?.message !== 'User not found'
      )
        console.log(customError?.data?.message, 'error');
    } else console.log('error in saga', error);
    yield put(setLoadingDashboardSlice(false));
  }
}

export function* watcherGetAllCategories() {
  yield takeEvery(getAllCategoriesAction.toString(), workerGetAllCategories);
}
