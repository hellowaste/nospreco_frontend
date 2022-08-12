import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SignedOutStack from './Navigators/SignedOutStack';
import {MainStack} from './Navigators/SignedInStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from '../state/features/user';
import {SafeAreaView, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import appLogo from '../assets/logo/app/app_logo.png';

const AppNavigation = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(state => !!state.user.token);
  const [isRestoringLogin, setIsRestoringLogin] = useState(false);

  const FlippingImage = ({
    back = false,
    delay,
    duration = 4000,
    source,
    style = {},
  }) => (
    <Animatable.Image
      animation={'flash'}
      duration={duration}
      delay={delay}
      easing="linear"
      iterationCount="infinite"
      useNativeDriver
      source={source}
      style={{
        ...style,
        backfaceVisibility: 'hidden',
        width: 110,
        height: 110,
      }}
    />
  );

  useEffect(() => {
    const asyncFn = async () => {
      if (isSignedIn) {
        setIsRestoringLogin(false);
        return;
      }
      const userString = await AsyncStorage.getItem('user');
      if (userString) {
        const userData = JSON.parse(userString);
        if (userData) {
          setIsRestoringLogin(true);
          dispatch(login(userData));
        }
      }
    };
    asyncFn()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, [dispatch, isSignedIn]);

  const generateTemplate = () => {
    if (isRestoringLogin) {
      return (
        <SafeAreaView>
          <View style={{height: '80%'}} />
          <View
            style={{
              position: 'absolute',
              width: 100,
              height: 100,
              paddingTop: 10,
              backgroundColor: '#ffffff',
              borderRadius: 15,
              top: '50%',
              left: '35%',
              alignItems: 'center',
              justifyContent: 'center',
              shadowOffset: {width: 10, height: 10},
              shadowColor: '#000000',
              shadowOpacity: 1,
              elevation: 3,
            }}>
            <FlippingImage source={appLogo} delay={1} />
          </View>
        </SafeAreaView>
      );
    }
    return isSignedIn ? <MainStack /> : <SignedOutStack />;
  };

  return generateTemplate();
};

export default AppNavigation;
