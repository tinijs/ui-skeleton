import {Resolver} from '@parcel/plugin';
import {resolve} from 'path';

export default new Resolver({
  async resolve({specifier}) {
    if (specifier !== '@tinijs/ui') return null;
    return {
      filePath: resolve('.tini-ui', 'public-api.js'),
    };
  }
});
