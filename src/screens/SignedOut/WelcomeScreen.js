import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          alignItems: 'center',
          height: '40%',
          marginTop: 100,
        }}>
        <Image
          source={require('../../assets/logo/app/logonew.png')}
          style={{width: 200, height: 200}}
        />
        <Text
          style={{
            color: '#17942e',
            fontSize: 30,
            fontWeight: '800',
            marginTop: 30,
          }}>
          Ciao spreco!
        </Text>
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
              fontWeight: '800',
              textAlign: 'center',
              color: '#ffffff',
              paddingVertical: 10,
            }}>
            CREA ACCOUNT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
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
              fontWeight: '800',
              textAlign: 'center',
              color: '#b9ceac',
              paddingVertical: 10,
            }}>
            ACCEDI
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
