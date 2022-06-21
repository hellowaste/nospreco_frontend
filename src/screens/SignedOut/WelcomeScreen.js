import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate('RegistrationScreen')}>
        <Text>Registrazione</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
