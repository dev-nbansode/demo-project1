import React, {FC, memo, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CheckBox from '@react-native-community/checkbox';
import {Images} from '@assets/Images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ShadowComponent} from '@components/Common/ShadowComponent';
import {push} from '@helpers/NavigatorHelper';
import {NavRoutes} from '@constants/NavRoutes';
import {MainLayout} from '@components/Common/Layouts';

import {MainScreenProps} from './interface';
import {styles} from './styles';

const gradientColors = ['#663dff', '#aa00ff', '#cc4499'];
const dividerGradientColors = ['#80808000', 'gray'];

const MainScreen: FC<MainScreenProps> = (props: MainScreenProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleState = () => {
    setShowPassword(showState => {
      return !showState;
    });
  };

  const _renderLogo = (image: any) => {
    return (
      <TouchableOpacity style={styles.imageContainer}>
        <Image source={image} style={styles.imageStyle} />
      </TouchableOpacity>
    );
  };

  const _renderDivider = () => {
    return (
      <View style={styles.dividerContainer}>
        <LinearGradient
          style={styles.dividerStyle}
          colors={dividerGradientColors}
          useAngle={true}
          angle={-270}></LinearGradient>
        <View>
          <Text style={styles.orText}>{'or'}</Text>
        </View>
        <LinearGradient
          style={styles.dividerStyle}
          colors={dividerGradientColors}
          useAngle={true}
          angle={270}></LinearGradient>
      </View>
    );
  };
  return (
    <MainLayout>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <KeyboardAwareScrollView enableOnAndroid style={{flex: 1}}>
          <View style={styles.container}>
            <LinearGradient
              style={styles.linearGradientContainer}
              colors={gradientColors}
              useAngle
              angle={319}
            />
            <View style={styles.innerContainer}>
              <TouchableOpacity style={styles.iconContainer}>
                <EntypoIcon name="chevron-left" size={29} color="white" />
                <Text style={styles.goBackText}>{'Go back'}</Text>
              </TouchableOpacity>
              <Text style={styles.welcomeText}>{'Welcome'}</Text>
              <ShadowComponent
                shadowStyle={styles.dropShadowStyle}
                containerStyle={styles.shadowContainer}>
                <BlurView
                  blurAmount={10}
                  style={styles.blurView}
                  blurType={Platform.OS === 'ios' ? 'xlight' : 'light'}
                  blurRadius={25}
                />
                <View>
                  <Text style={styles.registerText}>{'Register With'}</Text>
                  <View style={styles.socialContainer}>
                    {_renderLogo(Images.FacebookLogo)}
                    {_renderLogo(Images.AppleLogo)}
                    {_renderLogo(Images.GoogleLogo)}
                  </View>
                  {_renderDivider()}
                  <View>
                    <Text style={styles.labelStyle}>{'Name'}</Text>
                    <TextInput
                      style={styles.inputStyle}
                      placeholder="Enter your name"
                    />
                  </View>
                  <View>
                    <Text style={styles.labelStyle}>{'Email'}</Text>
                    <TextInput
                      style={styles.inputStyle}
                      placeholder="Enter your email address"
                      keyboardType={'email-address'}
                    />
                  </View>
                  <View>
                    <Text style={styles.labelStyle}>{'Password'}</Text>
                    <TextInput
                      style={styles.inputStyle}
                      placeholder="Enter a password"
                      secureTextEntry
                    />
                  </View>
                  <View style={styles.checkboxContainer}>
                    <CheckBox
                      value={isChecked}
                      onValueChange={setIsChecked}
                      boxType="square"
                      onCheckColor={'#c44caa'}
                      onTintColor={'#c44caa'}
                      tintColor={'#c44caa'}
                      tintColors={{true: '#c44caa', false: 'gray'}}
                      style={styles.checkbox}
                    />
                    <Text style={styles.termsTextStyle}>
                      {'I agree with the'}{' '}
                      <Text style={{fontWeight: 'bold'}}>
                        {'Terms & Conditons'}
                      </Text>
                    </Text>
                  </View>
                  <TouchableOpacity disabled>
                    <LinearGradient
                      style={styles.signUpButton}
                      colors={gradientColors}
                      useAngle
                      angle={319}>
                      <Text style={styles.signUpTextStyle}>{'SIGN UP'}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.signInButton}
                    onPress={() => push(NavRoutes.HomeScreen)}>
                    <Text style={styles.signInTextStyle}>{'SIGN IN'}</Text>
                  </TouchableOpacity>
                </View>
              </ShadowComponent>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </MainLayout>
  );
};

export default memo(MainScreen);
