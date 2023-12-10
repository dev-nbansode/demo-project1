import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export interface ShadowComponentProps {
  containerStyle: ViewStyle;
  shadowStyle: ViewStyle;
  children: ReactNode;
}
