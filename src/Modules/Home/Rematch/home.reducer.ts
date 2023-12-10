import {homeInterface} from '@modules/Home/Rematch/home.interface';

export const homeReducer = {
  /**
   * Triggered when a module is succeeded.
   * @param {homeInterface} state
   * @param  {any} payload
   * @returns {homeInterface}
   */
  success(state: homeInterface, payload: any): homeInterface {
    return {
      ...state,
      data: payload,
      error: undefined,
    };
  },

  /**
   * Triggered when a module is failed.
   * @param {homeInterface} state
   * @param  {any} payload
   * @returns {homeInterface}
   */
  error(state: homeInterface, payload: any): homeInterface {
    return {
      ...state,
      data: null,
      error: payload,
    };
  },
};
