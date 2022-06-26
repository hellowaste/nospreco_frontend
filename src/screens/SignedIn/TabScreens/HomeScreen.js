import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const currentUser = useSelector(state => state.user);
  return (
    <SafeAreaView style={{marginHorizontal: 10}}>
      <View>
        <Text style={{fontSize: 25, fontWeight: '700', marginVertical: 10}}>
          Esplora
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="map-marker-outline" size={20} />
            <Text style={{fontSize: 18, fontWeight: '500'}}>
              Posizione attuale
            </Text>
          </View>
          <Text style={{fontSize: 12, marginLeft: 20}}>entro 5 km</Text>
        </View>
        <View>
          <Text style={{fontWeight: '500'}}>Modifica</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
