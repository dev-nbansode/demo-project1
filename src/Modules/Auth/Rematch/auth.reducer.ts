import {authInterface} from '@modules/Auth/Rematch/auth.interface';

export const authReducer = {
  /**
   * Triggered when a module is succeeded.
   * @param {authInterface} state
   * @param  {string} payload
   */
  success(state: authInterface, payload: string) {
    state.accessToken = payload;
  },
  /**
   * Triggered when a module is failed.
   * @param {authInterface} state
   */
  error(state: authInterface) {
    state.accessToken = undefined;
  },
};
