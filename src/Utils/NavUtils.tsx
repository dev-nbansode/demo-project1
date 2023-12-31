import {NavRoutes} from '@constants/NavRoutes';
import React, {FC} from 'react';

export const CreateScreen = (NavigationStructure: any) => {
  return (screenName: NavRoutes, component: FC) => {
    return (
      <NavigationStructure.Screen
        name={screenName}
        component={component}
        initialParams={{
          goBack: false,
        }}
      />
    );
  };
};
