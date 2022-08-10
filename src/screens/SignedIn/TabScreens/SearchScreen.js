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

const SearchScreen = ({navigation}) => {
  const [activeMap, setActiveMap] = useState(false);
  const [searchVisibility, setSearchVisibility] = useState(false);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: !activeMap ? '#ffffff' : '#eee'}}>
      <View
        style={{
          paddingHorizontal: 10,
          paddingBottom: 10,
          backgroundColor: !activeMap ? '#ffffff' : '#eee',
          zIndex: 99,
        }}>
        <View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 15,
                marginTop: 20,
                padding: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight: 20,
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 10,
              }}
              onPress={() => navigation.navigate('UserPositionScreen')}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialCommunityIcons
                    name="map-marker-outline"
                    size={20}
                    color={'#000000'}
                  />
                  <Text
                    style={{color: '#000000', fontSize: 16, fontWeight: '700'}}>
                    Posizione attuale
                  </Text>
                </View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: '700',
                    marginLeft: 20,
                  }}>
                  Entro 5 km
                </Text>
              </View>
              <View>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={20}
                  color={'#000000'}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: !activeMap ? '#ffffff' : '#eee',
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
              justifyContent: 'center',
              marginVertical: 20,
            }}>
            {activeMap == false ? (
              <View
                style={{
                  width: '45%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#ffffff',
                  borderRadius: 10,
                  margin: 3,
                  shadowOffset: {width: 10, height: 10},
                  shadowColor: '#000000',
                  shadowOpacity: 1,
                  elevation: 5,
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
                  width: '45%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 3,
                  backgroundColor: '#eee',
                  borderRadius: 10,
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
                  width: '45%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#ffffff',
                  borderRadius: 10,
                  margin: 3,
                  shadowOffset: {width: 10, height: 10},
                  shadowColor: '#000000',
                  shadowOpacity: 1,
                  elevation: 5,
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
                  width: '45%',
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
                  borderRadius: 15,
                  height: 40,
                  width: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 5,
                  marginRight: 20,
                  shadowOffset: {width: 10, height: 10},
                  shadowColor: '#000000',
                  shadowOpacity: 1,
                  elevation: 5,
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
                    borderRadius: 15,
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 5,
                    marginRight: 20,
                    shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    elevation: 5,
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
                    margin: 5,
                    shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    elevation: 5,
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
          {!activeMap ? (
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
                color={'#000000'}
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
                Cambia la posizione o allarga l'area di ricerca per più
                risultati.
              </Text>
            </View>
          ) : null}
        </ScrollView>
      </View>
      {activeMap ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginBottom: 10,
            marginRight: -70,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 20,
              shadowOffset: {width: 10, height: 10},
              shadowColor: '#000000',
              shadowOpacity: 1,
              elevation: 3,
            }}>
            <Text
              style={{
                color: '#b9ceac',
                fontSize: 18,
                fontWeight: '600',
                paddingHorizontal: 15,
                paddingVertical: 5,
              }}>
              MOSTRA GLI STORE VICINI
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 30,
              marginLeft: 10,
              shadowOffset: {width: 10, height: 10},
              shadowColor: '#000000',
              shadowOpacity: 1,
              elevation: 3,
            }}>
            <MaterialCommunityIcons
              name="crosshairs-gps"
              size={30}
              color={'#b9ceac'}
              style={{padding: 10}}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default SearchScreen;
