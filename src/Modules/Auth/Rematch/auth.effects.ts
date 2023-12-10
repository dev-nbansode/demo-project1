import {DispatchStore} from '@rrematch/store';
import { AuthApiCall } from '../Services';

export const authEffects = (dispatch: DispatchStore) => {
  return {
    async authAction(payload: any) {
      const resData = await AuthApiCall(payload);
      if (resData) {
        dispatch.authModel.success(resData);
      } else {
        dispatch.authModel.error();
      }
    },
  };
};
