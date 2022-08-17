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
import MapView, {Marker} from 'react-native-maps';

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
          zIndex: 99,
          backgroundColor: '#ffffff',
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
              }}>
              <TouchableOpacity
                style={{
                  borderRadius: 30,
                  marginBottom: 15,
                  shadowOffset: {width: 10, height: 10},
                  shadowColor: '#a2a2a2',
                  shadowOpacity: 0.5,
                  elevation: 5,
                }}>
                <MaterialCommunityIcons
                  name="tune-variant"
                  size={24}
                  color={'#000000'}
                  style={{padding: 5}}
                />
              </TouchableOpacity>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 20,
                    borderColor: '#00807a',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    margin: 5,
                    marginBottom: 15,
                    marginHorizontal: 10,
                    shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    elevation: 10,
                  }}
                  onPress={() => navigation.navigate('SuggestionsSetupScreen')}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 16,
                      fontWeight: '600',
                      paddingVertical: 5,
                      paddingHorizontal: 15,
                      textAlign: 'center',
                    }}>
                    Scegli preferenze
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  borderRadius: 30,
                  marginBottom: 15,
                  shadowOffset: {width: 10, height: 10},
                  shadowColor: '#a2a2a2',
                  shadowOpacity: 0.5,
                  elevation: 5,
                }}
                onPress={() => navigation.navigate('Preferiti')}>
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={24}
                  color={'#000000'}
                  style={{padding: 5}}
                />
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: -10,
                }}
                onPress={() => navigation.navigate('UserPositionScreen')}>
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
                <MaterialCommunityIcons
                  name="format-list-bulleted"
                  size={20}
                  color={'#00807a'}
                  style={{
                    padding: 10,
                  }}
                />
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
                <MaterialCommunityIcons
                  name="format-list-bulleted"
                  size={20}
                  color={'#000000'}
                  style={{
                    padding: 10,
                  }}
                />
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
                <MaterialCommunityIcons
                  name="map"
                  size={20}
                  color={'#00807a'}
                  style={{
                    padding: 10,
                  }}
                />
              </View>
            ) : (
              <TouchableOpacity
                style={{
                  width: '45%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setActiveMap(true)}>
                <MaterialCommunityIcons
                  name="map"
                  size={20}
                  color={'#000000'}
                  style={{
                    padding: 10,
                  }}
                />
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
            marginRight: -20,
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
              size={30}
              color={'#00807a'}
              style={{padding: 5}}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default SearchScreen;
