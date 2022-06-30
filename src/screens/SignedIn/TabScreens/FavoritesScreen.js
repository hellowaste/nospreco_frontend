import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const FavoriteScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{marginTop: 130}}>
        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '600'}}>
          Non hai alcuno store preferito
        </Text>
        <Text
          style={{textAlign: 'center', marginHorizontal: 30, marginTop: 20}}>
          Tocca il cuore accanto ad uno store per aggiungerlo alla tua lista
          degli store preferiti
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#1dc279',
            borderRadius: 20,
            shadowOpacity: 0.5,
            shadowColor: '#969696',
            marginTop: 50,
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{fontSize: 18, fontWeight: '600', padding: 10}}>
            Esplora gli store
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;
