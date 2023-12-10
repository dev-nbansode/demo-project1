import {DispatchStore} from '@rrematch/store';

export const homeEffects = (dispatch: DispatchStore) => {
  return {
    async homeAction(payload: any) {
      // const resData = await callApi(payload);
      // if (resData != false) {
      //   dispatch.homeModel.success(resData);
      // } else {
      //   console.tron.log!('ERROR: ', resData);
      //   dispatch.homeModel.error(undefined);
      // }
    },
  };
};
