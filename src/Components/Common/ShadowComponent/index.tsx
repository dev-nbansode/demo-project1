import React, {memo} from 'react';
import {Platform, View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';

import {ShadowComponentProps} from './interface';

const ShadowComponent = memo(function ShadowComponent(
  props: ShadowComponentProps,
) {
  const {containerStyle, shadowStyle} = props;
  return Platform.OS === 'android' ? (
    <DropShadow style={shadowStyle}>
      <View style={[containerStyle, {overflow: 'hidden'}]}>
        {props.children}
      </View>
    </DropShadow>
  ) : (
    <DropShadow style={[shadowStyle, containerStyle]}>
      {props.children}
    </DropShadow>
  );
});

export {ShadowComponent};
