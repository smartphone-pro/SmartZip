import { Plugin } from "@capacitor/core";

export interface SmartZipPlugin extends Plugin {
  /**
   * Unzip a zipPath file to destFolder.
   * Event: "unzipProgress"
   * entry, entryNumber, total
   * 
   * @param options options for unzip
   * @returns true if success, false if fail
   */
  unzip(options: UnzipOptions): Promise<{ result: boolean }>;
}

export interface UnzipOptions {
  /**
   * Zip file's path
   */
  zipPath: string;

  /**
   * Destination folder's path
   */
  destFolder: string;
}