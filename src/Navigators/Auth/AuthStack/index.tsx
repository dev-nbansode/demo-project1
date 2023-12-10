import {NavRoutes} from '@constants/NavRoutes';
import AuthModule from '@modules/Auth';
import HomeModule from '@modules/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateScreen} from '@utils/NavUtils';
import React from 'react';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={NavRoutes.SplashScreen}>
      {CreateScreen(Stack)(
        NavRoutes.SplashScreen,
        AuthModule.Screens.SplashScreen,
      )}
      {CreateScreen(Stack)(
        NavRoutes.RegisterScreen,
        AuthModule.Screens.MainScreen,
      )}
      {CreateScreen(Stack)(NavRoutes.HomeScreen, HomeModule.Screens.HomeScreen)}
    </Stack.Navigator>
  );
}

export {AuthStack};
