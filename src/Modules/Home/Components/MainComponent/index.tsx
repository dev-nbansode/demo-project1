import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';

import {MainComponentProps} from './interface';
import {styles} from './styles';

const MainComponent: FC<MainComponentProps> = (props: MainComponentProps) => {
  return (
    <View style={styles.mainView}>
      <Text>{'MAIN Component'}</Text>
    </View>
  );
};

export default memo(MainComponent);
