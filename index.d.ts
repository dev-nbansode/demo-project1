declare module '*png';

declare module 'react-native-config' {
    export interface NativeConfig {
      ENV: string;
      BASE_URL: string;
      STORAGE_ENCRYPTION_KEY: string;
    }
    export const KEYS: NativeConfig;
    export default KEYS;
  }