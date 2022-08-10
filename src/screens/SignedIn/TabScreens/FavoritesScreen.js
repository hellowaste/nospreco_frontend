import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const FavoriteScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1}}>
      <View style={{marginTop: 130, backgroundColor: '#ffffff'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '900',
            color: '#000000',
          }}>
          Non hai alcuno store preferito
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
            fontWeight: '600',
            marginHorizontal: 50,
            marginTop: 20,
            color: '#000000',
          }}>
          Tocca il cuore accanto ad uno store per aggiungerlo alla tua lista
          degli store preferiti
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 20,
            marginTop: 50,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 5,
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              padding: 10,
              color: '#000000',
            }}>
            Esplora gli store
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;
