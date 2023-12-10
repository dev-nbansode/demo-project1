import {store} from '@rrematch/store';
import axios from 'axios';
import KEYS from 'react-native-config';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const api = axios.create({
  baseURL: KEYS.BASE_URL,
  headers,
  responseType: 'json',
  withCredentials: true,
});

// Add a request interceptor
api.interceptors.request.use(function (config: { headers: any; }) {
  const {accessToken} = store.getState().authModel;
  if (accessToken) {
    config.headers!['x-access-token'] = accessToken;
  }
  return config;
});

// Add a response interceptor
api.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: { response: { status: number; data: { responseCode: string; }; }; }) {
    const dispatch = store.dispatch;
    if (error?.response?.status === 401) {
      if (error?.response?.data.responseCode === 'TOKEN_UNAUTHORIZED') {
        // Logout the user
        dispatch.authModel.resetAll();
      }
      return;
    } else if (error?.response?.status === 504) {
      return;
    }
    return Promise.reject(error);
  },
);

export {api as API};
