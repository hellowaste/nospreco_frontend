import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchScreen = () => {
  const [activeMap, setActiveMap] = useState(false);
  const [searchVisibility, setSearchVisibility] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View
        style={{
          paddingHorizontal: 10,
          paddingBottom: 10,
          backgroundColor: '#ffffff',
          borderRadius: 20,
          zIndex: 99,
        }}>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '700',
              marginVertical: 10,
              color: '#000000',
            }}>
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
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={20}
                color={'#000000'}
              />
              <Text style={{fontSize: 18, fontWeight: '600', color: '#000000'}}>
                Posizione attuale
              </Text>
            </View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                marginLeft: 20,
                color: '#000000',
              }}>
              entro 5 km
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#b9ceac',
              borderRadius: 20,
              marginRight: 5,
            }}>
            <Text style={{fontWeight: '500', color: '#ffffff', padding: 7}}>
              Modifica
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#eee',
          flex: 1,
          paddingTop: 20,
          marginTop: -40,
          paddingHorizontal: 10,
        }}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{marginTop: 20}}>
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
                  shadowOpacity: 0.1,
                  shadowColor: '#00807a',
                }}>
                <Text
                  style={{
                    padding: 10,
                    color: '#00807a',
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
                    color: '#000000',
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
                  shadowOpacity: 0.1,
                  shadowColor: '#00807a',
                }}>
                <Text
                  style={{
                    padding: 10,
                    fontSize: 16,
                    color: '#00807a',
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
                    color: '#000000',
                  }}>
                  Mappa
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{flexDirection: 'row', alignItems: 'center', width: 300}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 3,
                  height: 40,
                  width: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 20,
                }}
                onPress={() => setSearchVisibility(false)}>
                <MaterialCommunityIcons
                  name="filter-outline"
                  size={30}
                  color={'#00807a'}
                />
              </TouchableOpacity>
              {!searchVisibility ? (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 3,
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 20,
                  }}
                  onPress={() => setSearchVisibility(true)}>
                  <MaterialCommunityIcons
                    name="magnify"
                    size={30}
                    color={'#00807a'}
                  />
                </TouchableOpacity>
              ) : (
                <View
                  style={{
                    height: 40,
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    flex: 1,
                  }}>
                  <TextInput
                    placeholder="Cerca"
                    placeholderTextColor={'#212121'}
                    autoFocus={true}
                    style={{width: '100%', fontSize: 18, paddingVertical: 5}}
                  />
                </View>
              )}
            </View>
          </ScrollView>
          <View style={{alignItems: 'center', marginTop: 50}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                textAlign: 'center',
                color: '#000000',
              }}>
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
                fontWeight: '500',
                textAlign: 'center',
                marginTop: 20,
                marginHorizontal: 50,
                color: '#000000',
              }}>
              Cambia la posizione o allarga l'area di ricerca per più risultati.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
