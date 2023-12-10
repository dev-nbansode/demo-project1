import {NavRoutes} from '@constants/NavRoutes';
import HomeModule from '@modules/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateScreen} from '@utils/NavUtils';
import React from 'react';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={NavRoutes.HomeScreen}>
      {CreateScreen(Stack)(NavRoutes.HomeScreen, HomeModule.Screens.HomeScreen)}
      {CreateScreen(Stack)(NavRoutes.HomeScreen, HomeModule.Screens.HomeScreen)}
    </Stack.Navigator>
  );
};

export {MainStack};
