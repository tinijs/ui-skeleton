import {Resolver} from '@parcel/plugin';
import {resolve} from 'path';

const PREFIX = '@tinijs/ui/';

export default new Resolver({
  async resolve({specifier}) {
    if (!specifier.startsWith(PREFIX)) return null;
    const path = specifier.split(PREFIX).pop();
    const ext = path.split('.')[1];
    return {
      filePath: resolve('.tini-ui', `${path}${ext ? ext : '.js'}`),
    };
  }
});
