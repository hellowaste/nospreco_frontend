import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SupermarketScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#eee'}}>
      <TouchableOpacity
        style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}
        onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={50}
          color={'#00807a'}
        />
        <Text style={{color: '#000000', fontSize: 26, fontWeight: '500'}}>
          Store
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
            uri: 'https://www.foodweb.it/wp-content/uploads/2021/10/Carrefour_logo.jpg',
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
              
              marginLeft: 20,
            }}>
            Carrefour
          </Text>
          <Text
            style={{
              color: '#363636',
              fontSize: 12,
              
              marginLeft: 20,
            }}>
            1.8 km
          </Text>
        </View>
      </View>
      <View style={{height: 1, backgroundColor: '#000000'}} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginLeft: 10,
        }}>
        <MaterialCommunityIcons name="map-marker" color={'#00807a'} size={20} />
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
                      uri: 'https://www.foodweb.it/wp-content/uploads/2021/10/Carrefour_logo.jpg',
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
      </View>
    </SafeAreaView>
  );
};

export default SupermarketScreen;
