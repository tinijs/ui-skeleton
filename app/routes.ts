import {Route} from '@tinijs/router';
import {
  defaultLayoutRoute,
  componentsRoutes,
  notFoundRoute,
} from '@tinijs/ui-common/app/routes';

const topRoutes: Route[] = [
  {
    path: '',
    component: 'app-page-home',
    action: () => import('./pages/home'),
    title: 'Introduction',
  },
];

export default [
  {
    ...defaultLayoutRoute,
    children: [
      ...topRoutes,
      // components
      ...componentsRoutes,
      // 404
      notFoundRoute,
    ],
  },
] as Route[];
