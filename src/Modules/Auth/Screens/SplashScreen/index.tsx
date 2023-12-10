import {Images} from '@assets/Images';
import {MainLayout} from '@components/Common/Layouts';
import React, {FC, memo, useEffect} from 'react';
import {Image, View} from 'react-native';
import {replace} from '@helpers/NavigatorHelper';
import {NavRoutes} from '@constants/NavRoutes';

import {SplashScreenProps} from './interface';
import {styles} from './styles';

const SplashScreen: FC<SplashScreenProps> = (props: SplashScreenProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      replace(NavRoutes.RegisterScreen);
      clearTimeout(timeout);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <MainLayout>
      <View style={styles.mainView}>
        <Image source={Images.RNLogo} style={styles.imageStyle} />
      </View>
    </MainLayout>
  );
};

export default memo(SplashScreen);
