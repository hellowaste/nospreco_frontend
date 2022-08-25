import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoriesScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#00807a', paddingTop: 20}}>
      <Text
        style={{
          marginTop: 50,
          marginBottom: 20,
          marginLeft: 20,
          color: '#ffffff',
          fontSize: 30,
          fontWeight: '600',
        }}>
        Ciao @utente
      </Text>
      <View
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          height: '100%',
          borderRadius: 15,
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 20,
            fontWeight: '700',
            margin: 20,
          }}>
          Categorie
        </Text>
        <View style={{marginHorizontal: 20}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="food-outline"
                size={25}
                color={'#000000'}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: '400',
                  marginLeft: 10,
                }}>
                Cibo
              </Text>
            </View>
            <View>
              <View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={20}
                  color={'#000000'}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 40,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons name="paw" size={25} color={'#000000'} />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: '400',
                  marginLeft: 10,
                }}>
                Animali
              </Text>
            </View>
            <View>
              <View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={20}
                  color={'#000000'}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="dots-horizontal-circle-outline"
                size={25}
                color={'#000000'}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: '400',
                  marginLeft: 10,
                }}>
                Altro
              </Text>
            </View>
            <View>
              <View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={20}
                  color={'#000000'}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#00807a',
              borderRadius: 20,
              padding: 10,
              marginTop: 100,
              marginHorizontal: 30,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              Suggerisci categoria
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
