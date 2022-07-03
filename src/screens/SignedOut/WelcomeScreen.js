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
          source={{
            uri: 'https://cdn.shopify.com/s/files/1/0407/5181/products/mixed-box-med_grande.png?v=1519552514',
          }}
          style={{width: 200, height: 200}}
        />
        <Text>Logo da sostituire</Text>
      </View>
      <View style={{paddingBottom: 20}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#00807a',
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
            backgroundColor: '#00807a',
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
