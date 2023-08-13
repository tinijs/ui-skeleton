import {Route} from '@tinijs/router';
import {
  defaultLayoutRoute,
  guidesRoutes,
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
      // guides
      ...guidesRoutes,
      // components
      ...componentsRoutes,
      // 404
      notFoundRoute,
    ],
  },
] as Route[];
