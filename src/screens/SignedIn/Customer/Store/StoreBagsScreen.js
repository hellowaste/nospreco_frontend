import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StoreBagsScreen = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: 0,
      }}>
      <ImageBackground
        source={require('../../../../assets/app/store/img-1.png')}
        style={{
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginRight: 15,
          }}>
          <TouchableOpacity
            style={{
              marginTop: 50,
              marginLeft: 30,
              backgroundColor: 'rgba(255,255,255,0.35)',
              borderRadius: 10,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={30}
              color={'#ffffff'}
              style={{
                margin: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 50,
              marginLeft: 30,
              backgroundColor: 'rgba(255,255,255,0.35)',
              borderRadius: 10,
            }}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={30}
              color={'#ffffff'}
              style={{
                margin: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: 'rgba(255,255,255,0.35)',
            borderRadius: 10,
            alignSelf: 'flex-end',
            marginRight: 15,
          }}>
          <MaterialCommunityIcons
            name="share-variant-outline"
            size={30}
            color={'#ffffff'}
            style={{
              margin: 10,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#21B861',
            borderRadius: 10,
            width: '60%',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            2 offerte disponibili
          </Text>
        </View>
      </ImageBackground>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Nome Store
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="star" size={20} color={'#FBBC04'} />
            <Text
              style={{
                color: '#020905',
                fontSize: 12,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
              }}>
              4.2
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
          }}>
          <Text
            style={{
              color: '#020905',
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Via Roma 1, 24100, Milano (MI)
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="map-marker"
              size={20}
              color={'#8C979D'}
            />
            <Text
              style={{
                color: '#020905',
                fontSize: 12,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
              }}>
              8,3 Km
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginLeft: 15,
          }}>
          <Text
            style={{
              color: '#21B861',
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
              
            }}>
            Vedi mappa
          </Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#D9E0E8',
            height: 1,
            marginHorizontal: 15,
            marginTop: 20,
          }}
        />
        <Text
          style={{
            color: '#020905',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
            marginLeft: 15,
            marginTop: 10,
          }}>
          HeroBag in vendita
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 10,
            backgroundColor: '#ffffff',
            elevation: 3,
            marginHorizontal: 15,
            marginVertical: 20,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}
          onPress={() => {
            navigation.navigate('HeroBagScreen');
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../../../assets/app/store/img-1.png')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginRight: 10,
              }}
            />
            <View>
              <Text
                style={{
                  color: '#020905',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 15,
                  marginTop: 10,
                }}>
                HeroBag pasti pronti
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="shopping"
                  size={20}
                  color={'#21B861'}
                  style={{
                    marginLeft: 12,
                    marginRight: 5,
                  }}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 12,
                    fontWeight: '400',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  1 disponibili
                </Text>
              </View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 15,
                }}>
                Ritiro oggi 13:00 -15:00
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: '#21B861',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
              marginLeft: 15,
              marginTop: 10,
            }}>
            € 8,99
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 10,
            backgroundColor: '#ffffff',
            elevation: 3,
            marginHorizontal: 15,
            marginBottom: 20,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../../../assets/app/store/img-1.png')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginRight: 10,
              }}
            />
            <View>
              <Text
                style={{
                  color: '#020905',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 15,
                  marginTop: 10,
                }}>
                HeroBag Prodotti da forno
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="shopping"
                  size={20}
                  color={'#21B861'}
                  style={{
                    marginLeft: 12,
                    marginRight: 5,
                  }}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 12,
                    fontWeight: '400',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  6 disponibili
                </Text>
              </View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 15,
                }}>
                Ritiro oggi 13:00 -15:00
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: '#21B861',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
              marginLeft: 15,
              marginTop: 10,
            }}>
            € 4,99
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#D9E0E8',
            height: 1,
            marginHorizontal: 15,
            marginTop: 0,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            marginTop: 15,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Recensioni (0)
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 12,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
              }}>
              Leggi tutte
            </Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={'#000000'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: 15,
            marginTop: 20,
            marginBottom: 80,
            backgroundColor: '#F2FDF7',
            borderRadius: 10,
            padding: 10,
          }}>
          <Text
            style={{
              color: '#3C434B',
              fontSize: 12,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Hai già acquistato da questo store?
          </Text>
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Scrivi una recensione!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default StoreBagsScreen;
