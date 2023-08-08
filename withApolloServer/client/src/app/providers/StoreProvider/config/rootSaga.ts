import {all} from 'redux-saga/effects';
import {
  watcherGetAllCategories,
  watcherGetDashboardCards,
} from 'src/entities/Dashboard';

export function* saga() {
  yield all([watcherGetDashboardCards(), watcherGetAllCategories()]);
}
