import {API} from '@api/CoreAPI';

import {HomeRoutes} from './routes';

export const HomeApiCall = async () => {
  return await API.post(HomeRoutes.ROUTE, {});
};
