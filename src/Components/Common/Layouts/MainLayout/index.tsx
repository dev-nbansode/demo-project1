import React, {memo} from 'react';

import {MainLayoutProps} from './interface';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

const MainLayout = memo(function MainLayout(props: MainLayoutProps) {
  const {children, edges, style} = props;
  return (
    <SafeAreaView edges={edges} style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
});

export {MainLayout};
