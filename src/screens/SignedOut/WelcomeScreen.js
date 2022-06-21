import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate('RegistrationScreen')}>
        <Text style={{fontSize: 16, fontWeight: '600', marginTop: 20}}>
          Registrazione
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={{fontSize: 16, fontWeight: '600', marginTop: 20}}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
