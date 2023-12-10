import {
  getActiveRoute,
  getRoute,
  navigationRef,
} from '@helpers/NavigatorHelper';
import {Nullable} from '@interfaces/GlobalInterfaces';
import {NavigationContainer, NavigationState} from '@react-navigation/native';
import React, {FC, memo, useState} from 'react';
import {StyleSheet, View} from 'react-native';

const NavigationManager: FC<any> = (props: {children?: any}) => {
  const [routeName, setRouteName] = useState<Nullable<string>>(null);

  const onStateChange = (state?: NavigationState) => {
    const previousRouteName = routeName;
    const currentRouteName = getRoute(state).name;
    if (previousRouteName !== currentRouteName) {
      setRouteName(currentRouteName);
    }
  };

  return (
    <View style={styles.container}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          setRouteName(getActiveRoute()?.name);
        }}
        onStateChange={onStateChange}>
        {props.children}
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010B40',
  },
});

export default memo(NavigationManager);
