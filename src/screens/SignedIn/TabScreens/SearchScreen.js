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
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#c2bfbf',
                borderRadius: 3,
                height: 40,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 20,
              }}>
              <MaterialCommunityIcons
                name="filter-outline"
                size={30}
                color={'#eee'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#c2bfbf',
                borderRadius: 3,
                height: 40,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 20,
              }}>
              <MaterialCommunityIcons name="magnify" size={30} color={'#eee'} />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Text style={{fontSize: 20, fontWeight: '700', textAlign: 'center'}}>
            Non ci sono store qui al momento!
          </Text>
          <MaterialCommunityIcons
            name="store-search-outline"
            size={50}
            color={'#c5c2c2'}
            style={{marginTop: 20}}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              textAlign: 'center',
              marginTop: 20,
              marginHorizontal: 50,
            }}>
            Cambia la posizione o allarga l'area di ricerca per più risultati.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
