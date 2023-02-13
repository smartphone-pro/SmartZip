export interface SmartZipPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
