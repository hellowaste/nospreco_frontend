import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{marginTop: 580}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#1daf70',
            justifyContent: 'center',
            marginHorizontal: 30,
            borderRadius: 20,
            shadowOpacity: 0.5,
            shadowColor: '#808080',
            shadowRadius: 10,
          }}
          onPress={() => navigation.navigate('RegistrationScreen')}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
              color: '#ffffff',
              paddingVertical: 10,
            }}>
            Crea account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#1daf70',
            justifyContent: 'center',
            marginHorizontal: 30,
            borderRadius: 20,
            marginTop: 20,
            shadowOpacity: 0.5,
            shadowColor: '#808080',
            shadowRadius: 10,
          }}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
              color: '#ffffff',
              paddingVertical: 10,
            }}>
            Accedi
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
