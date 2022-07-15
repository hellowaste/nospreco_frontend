import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#eee',
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <View
        style={{alignItems: 'center', justifyContent: 'center', height: '40%'}}>
        <Image
          source={require('../../assets/logo/app/app_logo.png')}
          style={{width: 300, height: 300}}
        />
      </View>
      <View style={{paddingBottom: 50}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#b9ceac',
            justifyContent: 'center',
            marginHorizontal: 30,
            borderRadius: 20,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 5,
          }}
          onPress={() => navigation.navigate('RegistrationScreen')}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
              color: '#2e650a',
              paddingVertical: 10,
            }}>
            Crea account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#b9ceac',
            justifyContent: 'center',
            marginHorizontal: 30,
            borderRadius: 20,
            marginTop: 20,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 5,
          }}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
              color: '#2e650a',
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
