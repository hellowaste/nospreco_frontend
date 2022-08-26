import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ShopScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
      }}>
      <ImageBackground
        source={{
          uri: 'https://static.fanpage.it/wp-content/uploads/sites/30/2021/10/poke-1200x675.jpg',
        }}
        style={{
          height: '50%',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            marginTop: 20,
          }}>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                width: 40,
                height: 40,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={25}
                color={'#000000'}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                width: 40,
                height: 40,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
              }}>
              <MaterialCommunityIcons
                name="share-variant-outline"
                size={25}
                color={'#000000'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                width: 40,
                height: 40,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
              }}>
              <MaterialCommunityIcons
                name="heart-outline"
                size={25}
                color={'#000000'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignSelf: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 10,
            marginTop: 50,
            width: '85%',
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 10,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 23,
              fontWeight: '500',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Poke Take Away
          </Text>
          <View
            style={{
              backgroundColor: '#f3f3f3',
              borderRadius: 20,
              marginTop: 10,
              marginHorizontal: 50,
              padding: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons
                  name="basket-outline"
                  size={16}
                  color={'#000000'}
                  style={{marginRight: 3}}
                />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                    Bag:
                  </Text>
                  <Text
                    style={{color: '#000000', fontSize: 14, fontWeight: '700'}}>
                    17
                  </Text>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: '700',
                      marginRight: 10,
                    }}>
                    Scegli
                  </Text>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={20}
                    color={'#000000'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 15,
              marginBottom: 15,
              marginHorizontal: 75,
            }}>
            <View>
              <MaterialCommunityIcons
                name="clock-outline"
                size={20}
                color={'#000000'}
                style={{alignSelf: 'center'}}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  textAlign: 'center',
                }}>
                Ritiro
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 12,
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                16:00 - 20:00
              </Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="currency-eur"
                size={20}
                color={'#000000'}
                style={{alignSelf: 'center'}}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  textAlign: 'center',
                  textDecorationLine: 'line-through',
                }}>
                12,99
              </Text>
              <Text
                style={{
                  color: '#04be06',
                  fontSize: 14,
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                3,99
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 10,
            marginTop: 20,
            width: '85%',
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={20}
                color={'#000000'}
                style={{marginRight: 10}}
              />
              <View>
                <Text
                  style={{color: '#000000', fontSize: 14, fontWeight: '400'}}>
                  Via Roma, 1 24100 Milano
                </Text>
                <Text
                  style={{color: '#000000', fontSize: 14, fontWeight: '400'}}>
                  MI, Italia
                </Text>
                <Text
                  style={{color: '#a2a2a2', fontSize: 12, fontWeight: '400'}}>
                  Scopri di più sullo store
                </Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              color={'#000000'}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            alignSelf: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 10,
            marginTop: 20,
            width: '85%',
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              marginVertical: 15,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="information-variant"
                size={20}
                color={'#000000'}
                style={{marginRight: 10}}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '400',
                    marginRight: 5,
                  }}>
                  Tipo:
                </Text>
                <Text
                  style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                  Prodotti da forno
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '600',
              marginHorizontal: 40,
              marginBottom: 5,
            }}>
            Info del venditore:
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              marginHorizontal: 40,
              marginBottom: 30,
            }}>
            Descrizione del prodotto da parte del venditore
          </Text>
        </View>
      </ImageBackground>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#00807a',
            marginHorizontal: 100,
            borderRadius: 30,
            marginBottom: 15,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#ffffff',
              fontSize: 25,
              fontWeight: '500',
              padding: 5,
            }}>
            Acquista
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ShopScreen;
