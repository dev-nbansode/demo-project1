import {createModel} from '@rematch/core';
import {RootModel} from '@rrematch/Models';

import {authEffects} from './auth.effects';
import {authReducer} from './auth.reducer';
import {authState} from './auth.state';

export const authModel = createModel<RootModel>()({
  state: authState, // initial state
  reducers: authReducer,
  effects: authEffects,
});
