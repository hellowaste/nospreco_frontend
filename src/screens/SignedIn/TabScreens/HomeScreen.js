import React from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, Text} from 'react-native';

const HomeScreen = () => {
  const currentUser = useSelector(state => state.user);
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Text>Benvenuto {currentUser.email}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
