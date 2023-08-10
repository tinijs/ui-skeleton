import {App} from '@tinijs/core';
import {AppRootTemplate} from '@tinijs/ui-common/app/root-template';
import {Configurable} from '@tinijs/ui-common/app/configurable';

import routes from './routes';

Configurable.setOptions({
  appId: 'ui_skeleton',
  appName: 'UI Skeleton',
  logoUrl: new URL('./assets/logo.svg', import.meta.url).toString(),
  repoUrl: 'https://github.com/tinijs/ui-skeleton',
  // iconsRepoUrl: '',
  packagePrefix: 'tinix',
  soulList: [
    {
      id: 'untitled',
      name: 'Untitled',
      skins: [{id: 'default', name: 'Default'}],
    },
  ],
  routes,
});

@App()
export class AppRoot extends AppRootTemplate {}
