import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchScreen = () => {
  const [activeMap, setActiveMap] = useState(false);
  return (
    <SafeAreaView style={{marginHorizontal: 10, flex: 1}}>
      <View>
        <Text style={{fontSize: 25, fontWeight: '700', marginVertical: 10}}>
          Ricerca
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          {activeMap == false ? (
            <View
              style={{
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  padding: 10,
                  color: '#1ecc8e',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                Lista
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => setActiveMap(!activeMap)}>
              <Text
                style={{
                  padding: 10,
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                Lista
              </Text>
            </TouchableOpacity>
          )}
          {activeMap ? (
            <View
              style={{
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  padding: 10,
                  fontSize: 16,
                  color: '#1ecc8e',
                  fontWeight: '600',
                }}>
                Mappa
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => setActiveMap(true)}>
              <Text
                style={{
                  padding: 10,
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                Mappa
              </Text>
            </TouchableOpacity>
          )}
          <Text>{activeMap}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
