import React from 'react';
import { SwitchStack } from '@navigators/Switcher';
import {Provider} from 'react-redux';
import {store} from '@rrematch/store';
import { NavigationManager, PersistComponent } from './Components';

function App(): React.JSX.Element {

  return (
      <Provider store={store}>
        <PersistComponent>
          <NavigationManager>
            <SwitchStack/>
          </NavigationManager>
        </PersistComponent>
      </Provider>
  )
}

export default App;
