import {createModel} from '@rematch/core';
import {RootModel} from '@rrematch/Models';

import {homeEffects} from './home.effects';
import {homeReducer} from './home.reducer';
import {homeState} from './home.state';

export const homeModel = createModel<RootModel>()({
  state: homeState, // initial state
  reducers: homeReducer,
  effects: homeEffects,
});
