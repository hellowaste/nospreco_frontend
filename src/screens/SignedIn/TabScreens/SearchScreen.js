import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';

const SearchScreen = ({navigation}) => {
  const [visibleMap, setVisibleMap] = useState(false);
  const [searchVisibility, setSearchVisibility] = useState(false);
  const [userPosition, setUserPosition] = useState('');
  const [currentLat, setCurrentLat] = useState(45.464194547658806);
  const [currentLong, setCurrentLong] = useState(9.190585679617246);

  useEffect(() => {
    Geolocation.getCurrentPosition(res => {
      console.log(JSON.stringify(res));
      setUserPosition(res);
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      {!visibleMap ? (
        <View
          style={{
            paddingHorizontal: 10,
            paddingBottom: 10,
            zIndex: 99,
            backgroundColor: '#ffffff',
            height: '8%',
          }}>
          <View>
            <View>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 15,
                  marginTop: 15,
                  marginHorizontal: 10,
                  padding: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              />
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: -10,
                  }}
                  onPress={() =>
                    navigation.navigate('UserPositionScreen', {
                      userPosition: userPosition,
                    })
                  }>
                  <Text
                    style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
                    Posizione attuale
                  </Text>
                  <MaterialCommunityIcons
                    name="chevron-down"
                    size={20}
                    color={'#000000'}
                    style={{marginLeft: 10}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      {visibleMap ? (
        <View style={{height: '100%'}}>
          <View
            style={{
              position: 'absolute',
              zIndex: 999,
              marginTop: 20,
              alignSelf: 'center',
              height: '93%',
              justifyContent: 'space-between',
            }}
            pointerEvents={'box-none'}>
            <View>
              <TouchableOpacity
                style={{
                  marginBottom: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#ffffff',
                  borderRadius: 10,
                  padding: 10,
                  width: '90%',
                  alignSelf: 'center',
                  shadowOffset: {width: 10, height: 10},
                  shadowColor: '#000000',
                  shadowOpacity: 1,
                  elevation: 5,
                }}
                onPress={() =>
                  navigation.navigate('UserPositionScreen', {
                    userPosition: userPosition,
                  })
                }>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 18,
                    fontWeight: '700',
                    textAlign: 'center',
                  }}>
                  Posizione attuale
                </Text>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={20}
                  color={'#000000'}
                  style={{marginLeft: 10}}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.37)',
                    borderRadius: 10,
                    width: '45%',
                    alignItems: 'center',
                  }}
                  onPress={() => setVisibleMap(false)}>
                  <MaterialCommunityIcons
                    name="format-list-bulleted"
                    size={20}
                    color={'#000000'}
                    style={{
                      padding: 15,
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    width: '45%',
                    alignItems: 'center',
                    marginHorizontal: 5,
                    shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    elevation: 5,
                  }}>
                  <MaterialCommunityIcons
                    name="map"
                    size={20}
                    color={'#00807a'}
                    style={{
                      padding: 15,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  marginHorizontal: 20,
                }}>
                <TouchableOpacity
                  style={{
                    marginRight: 20,
                    backgroundColor: '#ffffff',
                    borderRadius: 8,
                    shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    elevation: 5,
                  }}>
                  <MaterialCommunityIcons
                    name="filter-outline"
                    size={26}
                    color={'#00807a'}
                    style={{padding: 7}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginRight: 20,
                    backgroundColor: '#ffffff',
                    borderRadius: 8,
                    shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    elevation: 5,
                  }}>
                  <MaterialCommunityIcons
                    name="magnify"
                    size={26}
                    color={'#00807a'}
                    style={{padding: 7}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
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
                      color: '#00807a',
                      fontSize: 18,
                      fontWeight: '800',
                      paddingHorizontal: 15,
                      paddingVertical: 10,
                    }}>
                    STORE VICINI
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
                    size={26}
                    color={'#00807a'}
                    style={{padding: 5}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <MapView
            showsBuildings={true}
            style={{width: '100%', height: '100%'}}
            initialRegion={{
              latitude: currentLat,
              latitudeDelta: 0.05,
              longitude: currentLong,
              longitudeDelta: 0.05,
            }}>
            <Marker
              coordinate={{
                latitude: currentLat,
                latitudeDelta: 0.005,
                longitude: currentLong,
                longitudeDelta: 0.005,
              }}
            />
          </MapView>
        </View>
      ) : (
        <View>
          <View
            style={{
              position: 'absolute',
              zIndex: 999,
              marginTop: 20,
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 10,
                  width: '45%',
                  alignItems: 'center',
                  shadowOffset: {width: 10, height: 10},
                  shadowColor: '#000000',
                  shadowOpacity: 1,
                  elevation: 5,
                }}
                onPress={() => setVisibleMap(false)}>
                <MaterialCommunityIcons
                  name="format-list-bulleted"
                  size={20}
                  color={'#00807a'}
                  style={{
                    padding: 15,
                  }}
                />
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 10,
                  width: '45%',
                  alignItems: 'center',
                  marginHorizontal: 5,
                }}
                onPress={() => setVisibleMap(true)}>
                <MaterialCommunityIcons
                  name="map"
                  size={20}
                  color={'#000000'}
                  style={{
                    padding: 15,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                marginHorizontal: 20,
              }}>
              <TouchableOpacity
                style={{
                  marginRight: 20,
                  backgroundColor: '#ffffff',
                  borderRadius: 8,
                }}>
                <MaterialCommunityIcons
                  name="filter-outline"
                  size={26}
                  color={'#00807a'}
                  style={{padding: 7}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginRight: 20,
                  backgroundColor: '#ffffff',
                  borderRadius: 8,
                }}>
                <MaterialCommunityIcons
                  name="magnify"
                  size={26}
                  color={'#00807a'}
                  style={{padding: 7}}
                />
              </TouchableOpacity>
            </View>
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
                  paddingHorizontal: 0,
                  color: '#656565',
                }}>
                Cambia la posizione o allarga l'area di ricerca.
              </Text>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
