import {AuthStack} from '@navigators/Auth/AuthStack';
import {MainStack} from '@navigators/Main';
import {DispatchStore, RootState} from '@rrematch/store';
import _ from 'lodash';
import React, {useEffect, useState} from 'react';
import {Appearance, SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const SwitchStack = ({navigation, route}: {navigation?: any; route?: any}) => {
  // Hooks
  const dispatch = useDispatch<DispatchStore>();

  const {accessToken} = useSelector((state: RootState) => state.authModel);

  const _renderContent = () => {
    if (accessToken) {
      return <MainStack />;
    }
    return <AuthStack />;
  };

  return (
    <SafeAreaView style={{flexGrow: 1, backgroundColor: 'white'}}>
      {_renderContent()}
    </SafeAreaView>
  );
};
export {SwitchStack};
