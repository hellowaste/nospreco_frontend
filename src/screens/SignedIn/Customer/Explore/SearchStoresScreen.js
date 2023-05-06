import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchStoresScreen = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '45%',
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          Cerca
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialCommunityIcons name="close" size={20} color={'#000000'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#D9E0E8',
          width: '100%',
          marginVertical: 20,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#F9FAFB',
          borderRadius: 10,
          height: 50,
          width: '100%',
          justifyContent: 'space-between',
          paddingRight: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons
            name="magnify"
            size={20}
            color={'#21B861'}
            style={{
              margin: 10,
            }}
          />
          <Text
            style={{
              color: '#6D747C',
              fontSize: 12,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              marginRight: 50,
            }}>
            Cerca
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 1,
              height: 20,
              backgroundColor: '#A3AEB4',
              marginRight: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('StoresFiltersScreen');
            }}>
            <MaterialCommunityIcons
              name="filter"
              size={20}
              color={'#21B861'}
              style={{
                margin: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 12,
            fontWeight: '400',
            fontFamily: 'Poppins-Regular',
            marginTop: 10,
          }}>
          Ricerche recenti
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 10,
            elevation: 3,
            flexDirection: 'row',
            alignItems: 'center',
            margin: 10,
          }}>
          <View>
            <Image
              source={require('../../../../assets/logo/app/logo.png')}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                margin: 10,
              }}
            />
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  marginRight: 100,
                }}>
                Nome Store
              </Text>
              <MaterialCommunityIcons
                name="heart"
                size={20}
                color={'#21B861'}
                style={{
                  marginRight: 10,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="shopping"
                size={20}
                color={'#21B861'}
              />
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 12,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 5,
                  marginRight: 50,
                }}>
                8 disponibili a partire da €4,99
              </Text>
            </View>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
              }}>
              Ritiro oggi 20:00 - 22:00
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons name="star" size={15} color={'#FBBC04'} />
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 10,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  marginRight: 10,
                }}>
                4.2 (45)
              </Text>
              <MaterialCommunityIcons
                name="map-marker"
                size={10}
                color={'#8C979D'}
              />
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 10,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  marginRight: 10,
                }}>
                3,0 Km da te
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchStoresScreen;
