import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export interface MainLayoutProps {
  children: ReactNode;
  style?: ViewStyle;
  edges?: Array<'top' | 'right' | 'bottom' | 'left'>;
}
