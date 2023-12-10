import {init, RematchDispatch, RematchRootState} from '@rematch/core';
import loadingPlugin, {ExtraModelsFromLoading} from '@rematch/loading';
import {MMKV} from 'react-native-mmkv';
import immerCombinePersist, {getPersistor} from 'rematch-immer-combine-persist';
import KEYS from 'react-native-config';

import {models, RootModel} from './Models';

export const storageMMKV = new MMKV({
  id: 'root-storage',
  encryptionKey: KEYS.STORAGE_ENCRYPTION_KEY,
});

export const reduxStorage = {
  setItem: (key: any, value: any) => {
    storageMMKV.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: any) => {
    const value = storageMMKV.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: any) => {
    storageMMKV.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

type FullModel = ExtraModelsFromLoading<RootModel>;

export const store = init<RootModel, FullModel>({
  models,
  plugins: [
    loadingPlugin({
      whitelist: [],
    }),
    // @ts-ignore
    immerCombinePersist({
      persistOptions: {
        persistConfig,
      },
    }),
  ],
  redux: {
    devtoolOptions: {
      disabled: !__DEV__,
    },
  },
});
export const persistor = getPersistor();
export type StoreState = typeof store;
export type DispatchStore = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
