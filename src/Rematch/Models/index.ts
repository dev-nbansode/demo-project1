import {authModel} from '@modules/Auth/Rematch';
import {Models} from '@rematch/core';

export interface RootModel extends Models<RootModel> {
  authModel: typeof authModel;
}
export const models: RootModel = {
  authModel,
};
