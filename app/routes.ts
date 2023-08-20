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
    title: 'Home',
  },
];

export const iconsRoutes: Route[] = [
  {
    path: 'icons/tinix',
    component: 'app-page-icons-tinix',
    action: () => import('./pages/icons/tinix'),
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
      // icons
      ...iconsRoutes,
      // 404
      notFoundRoute,
    ],
  },
] as Route[];
