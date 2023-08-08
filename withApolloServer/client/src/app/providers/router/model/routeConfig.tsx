import {WelcomePage} from 'src/pages/WelcomePage';
import {Dashboard} from 'src/pages/Dashboard';
import {NotFoundPage} from 'src/pages/NotFoundPage';
import {AppRoutes, allRoutes} from 'src/shared/const/router';
import {AppRoutesProps} from 'src/shared/types/router';

const {getRouteWelcome, getRouteDashboard} = allRoutes;

export const routeConfigs: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.WELCOME_ROUTE]: {
    element: <WelcomePage />,
    path: getRouteWelcome(),
  },
  [AppRoutes.DASHBOARD_ROUTE]: {
    element: <Dashboard />,
    path: getRouteDashboard(),
  },

  [AppRoutes.NOT_FOUND]: {
    element: <NotFoundPage />,
    path: '*',
  },
};

export const localPath = (pathname: string) => {
  const locals = Object.values(routeConfigs)
    .filter((path) => !path.authOnly)
    .filter((i) => {
      if (i.path) return pathname.startsWith(i.path);

      return [];
    });
  return locals;
};

export const pathNoHeaderFooter = () => {
  const locals = Object.values(routeConfigs).map((p) => p.path);
  return locals;
};
