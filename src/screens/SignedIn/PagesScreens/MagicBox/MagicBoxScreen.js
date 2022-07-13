import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MagicBoxScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#b9ceac',
      }}>
      <View>
        <ImageBackground
          source={{
            uri: 'https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg',
          }}
          style={{width: '100%', height: 100}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              width: 35,
              height: 35,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}
            onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              color={'#000000'}
              size={30}
            />
          </TouchableOpacity>
          <View style={{backgroundColor: '#000000', marginTop: 20}}>
            <Text
              style={{
                color: '#ffffff',
                fontWeight: '700',
                fontSize: 18,
                marginLeft: 10,
              }}>
              Pizzeria Da Michele
            </Text>
          </View>
        </ImageBackground>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginRight: 20,
            }}>
            <View
              style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
              <MaterialCommunityIcons
                name="shopping-outline"
                color={'#000000'}
                size={20}
                style={{marginRight: 5}}
              />
              <Text style={{color: '#000000', fontWeight: '700', fontSize: 18}}>
                Magic Box Pizza
              </Text>
            </View>
            <View>
              <Text style={{color: '#000000', fontSize: 30, fontWeight: '800'}}>
                € 7.99
              </Text>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
            <MaterialCommunityIcons
              name="clock-outline"
              color={'#000000'}
              size={20}
              style={{marginRight: 5}}
            />
            <Text style={{color: '#000000', fontWeight: '700', fontSize: 18}}>
              Ritira: 14:00 - 21:00
            </Text>
          </View>
          <View style={{height: 1, backgroundColor: '#000000'}} />
          <View style={{marginHorizontal: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <MaterialCommunityIcons
                name="map-marker"
                color={'#000000'}
                size={20}
              />
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                Via Vittorio Veneto, 1, Napoli 00000 NA
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: '#494949',
                  fontSize: 12,
                  fontWeight: '500',
                  marginLeft: 15,
                  marginTop: 5,
                }}>
                Scopri di più sullo store
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 10,
            }}>
            <MaterialCommunityIcons
              name="food-outline"
              color={'#00807a'}
              size={20}
              style={{marginRight: 10}}
            />
            <Text style={{color: '#00807a', fontSize: 16, fontWeight: '600'}}>
              Ingredienti e allergie
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
              marginTop: 20,
            }}>
            <MaterialCommunityIcons name="star" color={'#00807a'} size={30} />
            <MaterialCommunityIcons name="star" color={'#00807a'} size={30} />
            <MaterialCommunityIcons name="star" color={'#00807a'} size={30} />
            <MaterialCommunityIcons name="star" color={'#00807a'} size={30} />
            <MaterialCommunityIcons
              name="star-half-full"
              color={'#00807a'}
              size={30}
            />
            <Text style={{color: '#00807a', fontSize: 22, fontWeight: '600'}}>
              4.8
            </Text>
          </View>
          <View
            style={{marginHorizontal: 10, marginTop: 20, marginBottom: 100}}>
            <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
              Cosa puoi trovare
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '400',
                marginTop: 10,
              }}>
              Descrizione della magic box e del suo contenuto.
            </Text>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          backgroundColor: '#00807a',
          borderRadius: 20,
          marginBottom: 20,
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 20,
            fontWeight: '800',
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}>
          Prenota
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MagicBoxScreen;
