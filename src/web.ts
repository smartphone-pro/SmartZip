import { WebPlugin } from '@capacitor/core';

import type { SmartZipPlugin } from './definitions';

export class SmartZipWeb extends WebPlugin implements SmartZipPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
