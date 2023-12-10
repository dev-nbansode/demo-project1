import {persistor} from '@rrematch/store';
import React, {FC, memo} from 'react';
import {PersistGate} from 'redux-persist/integration/react';

const PersistComponent: FC<any> = (props: {children?: any}) => {
  return <PersistGate persistor={persistor}>{props.children}</PersistGate>;
};

export default memo(PersistComponent);
