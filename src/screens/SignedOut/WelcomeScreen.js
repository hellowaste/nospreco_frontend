import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const WelcomeScreen = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Text>Registrazione</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
