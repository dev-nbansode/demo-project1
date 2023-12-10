import {API} from '@api/CoreAPI';

import {AuthRoutes} from './routes';
import {IAuthAPIPayload} from '@interfaces/AuthInterface';

export const AuthApiCall = async (payload: IAuthAPIPayload) => {
  return await API.post(AuthRoutes.ROUTE, payload);
};
