import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const currentUser = useSelector(state => state.user);
  return (
    <SafeAreaView style={{marginHorizontal: 10, flex: 1}}>
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
        <TouchableOpacity>
          <Text style={{fontWeight: '500'}}>Modifica</Text>
        </TouchableOpacity>
      </View>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 30}}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: '700'}}>
              Nessuno store presente in quest'area per ora!
            </Text>
            <Text style={{marginVertical: 20, fontSize: 16, fontWeight: '500'}}>
              Riprova in seguito
            </Text>
            <Text style={{marginVertical: 20}}>oppure</Text>
            <TouchableOpacity
              style={{backgroundColor: '#ffffff', borderRadius: 30}}>
              <Text
                style={{
                  padding: 10,
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#1daf70',
                }}>
                Cambia posizione
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 2,
              backgroundColor: '#000000',
              marginHorizontal: 20,
              marginTop: 50,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
