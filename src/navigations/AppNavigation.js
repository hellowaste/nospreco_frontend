import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SignedOutStack from './Navigators/SignedOutStack';
import {MainStack} from './Navigators/SignedInStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from '../state/features/user';
import {SafeAreaView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Loader from 'react-native-modal-loader';

const AppNavigation = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(state => !!state.user.token);
  const [isRestoringLogin, setIsRestoringLogin] = useState(false);

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
          <Spinner visible={true} />
          <Loader loading={true} color="#FC0D0C" title="loading" />
        </SafeAreaView>
      );
    }
    return isSignedIn ? <MainStack /> : <SignedOutStack />;
  };

  return generateTemplate();
};

export default AppNavigation;
