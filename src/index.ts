import { registerPlugin } from '@capacitor/core';

import type { SmartZipPlugin } from './definitions';

const SmartZip = registerPlugin<SmartZipPlugin>('SmartZip', {
  web: () => import('./web').then(m => new m.SmartZipWeb()),
});

export * from './definitions';
export { SmartZip };
