import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';

import {HomeScreenProps} from './interface';
import {styles} from './styles';

const HomeScreen: FC<HomeScreenProps> = (props: HomeScreenProps) => {
  return (
    <View style={styles.mainView}>
      <Text>{'MODULE SCREEN'}</Text>
    </View>
  );
};

export default memo(HomeScreen);
