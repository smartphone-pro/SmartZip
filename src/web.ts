import { WebPlugin } from '@capacitor/core';

import type { SmartZipPlugin, UnzipOptions } from './definitions';

export class SmartZipWeb extends WebPlugin implements SmartZipPlugin {
  async unzip(options: UnzipOptions): Promise<{ result: boolean }> {
    console.log('Unzip', options);
    return { result: true };
  }
}
