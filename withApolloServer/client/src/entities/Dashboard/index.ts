export type {DashboardSchema} from './model/types/dashboard';
export {dashboardReducer} from './model/slices/dashboard';
export {
  watcherGetDashboardCards,
  watcherGetAllCategories,
} from './model/saga/saga';
export type {
  IDashboardActon,
  IAllCategoriesAction,
} from './model/actions/actions';
export {
  getAllProductsAction,
  getAllCategoriesAction,
} from './model/actions/actions';
export {
  getAllProducts,
  getAllCategories,
  getDashboardIsLoading,
} from './model/selectors/getDashboard';
