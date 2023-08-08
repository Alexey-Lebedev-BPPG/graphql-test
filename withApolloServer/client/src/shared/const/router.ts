export enum AppRoutes {
  WELCOME_ROUTE = '/',
  DASHBOARD_ROUTE = 'dashboard',

  NOT_FOUND = 'not_found',
}

export const getRouteWelcome = () => '/';
export const getRouteDashboard = () => '/dashboard';

export const allRoutes = {
  getRouteDashboard,
  getRouteWelcome,
};
