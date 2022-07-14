import React from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ShopDetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#b9ceac'}}>
      <TouchableOpacity
        style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}
        onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={50}
          color={'#000000'}
        />
        <Text style={{color: '#000000', fontSize: 26, fontWeight: '500'}}>
          Shop
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 25,
          marginBottom: 10,
        }}>
        <Image
          source={{
            uri: 'https://www.giallozafferano.it/images/238-23809/Pizza-Margherita_450x300.jpg',
          }}
          style={{
            borderRadius: 50,
            width: 50,
            height: 50,
          }}
        />
        <View>
          <Text
            style={{
              color: '#000000',
              fontSize: 24,
              fontWeight: '700',
              marginLeft: 20,
            }}>
            Pizzeria Da Michele
          </Text>
          <Text
            style={{
              color: '#363636',
              fontSize: 12,
              fontWeight: '700',
              marginLeft: 20,
            }}>
            1.8 km
          </Text>
        </View>
      </View>
      <View style={{height: 1, backgroundColor: '#000000'}} />
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "https://www.google.com/maps/place/L'Antica+Pizzeria+Da+Michele/@40.8497563,14.2611115,17z/data=!3m1!4b1!4m5!3m4!1s0x133b083f8db6b079:0x5ab2972d7365b642!8m2!3d40.8497551!4d14.2632971",
          )
        }>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 10,
          }}>
          <MaterialCommunityIcons
            name="map-marker"
            color={'#00807a'}
            size={20}
          />
          <Text style={{color: '#00807a', fontSize: 16, fontWeight: '600'}}>
            Via Vittorio Veneto, 1, Napoli 00000 NA
          </Text>
        </View>
        <Text
          style={{
            color: '#2d2d2d',
            fontSize: 12,
            fontWeight: '600',
            marginLeft: 20,
          }}>
          Clicca per aprire la mappa
        </Text>
      </TouchableOpacity>
      <View style={{height: 1, backgroundColor: '#000000', marginTop: 20}} />
      <View style={{marginHorizontal: 10, marginTop: 15}}>
        <Text style={{color: '#000000', fontSize: 18, fontWeight: '600'}}>
          Magic Box di questo store
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('MagicBoxScreen')}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={{
                      uri: 'https://www.giallozafferano.it/images/238-23809/Pizza-Margherita_450x300.jpg',
                    }}
                    style={{
                      borderRadius: 50,
                      width: 50,
                      height: 50,
                      marginRight: 20,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 18,
                        fontWeight: '500',
                      }}>
                      Magic box piccola
                    </Text>
                    <Text style={{color: '#000000', fontSize: 16}}>
                      Oggi: 12:00 - 14:00
                    </Text>
                    <Text
                      style={{
                        color: '#00807a',
                        fontWeight: '800',
                        fontSize: 20,
                      }}>
                      € 3.99
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={30}
                  color={'#000000'}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontWeight: '600',
            marginBottom: 30,
          }}>
          Altre info
        </Text>
        <Text style={{color: '#000000', fontSize: 18, fontWeight: '600'}}>
          Scopri di più
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="information-outline"
            color={'#000000'}
            size={20}
          />
          <Text style={{color: '#000000', marginLeft: 10}}>
            IVA n. IT00000000000
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShopDetailsScreen;
