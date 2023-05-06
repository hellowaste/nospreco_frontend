import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BusinessNotificationCenter = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 50,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('BusinessNavigationMenu');
          }}>
          <MaterialCommunityIcons name="menu" size={20} color={'#000000'} />
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Menù
          </Text>
        </TouchableOpacity>
        <Image
          source={require('../../../assets/logo/app/logo.png')}
          style={{
            width: 40,
            height: 40,
          }}
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialCommunityIcons name="bell" size={20} color={'#21B861'} />
          <Text
            style={{
              color: '#21B861',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Notifiche
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#D9E0E8',
          width: '100%',
          marginVertical: 10,
        }}
      />
      <View
        style={{
          paddingTop: 10,
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
              }}>
              Hai ricevuto un nuovo ordine
            </Text>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
              }}>
              1x Hero Bag - Prodotti da forno
            </Text>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
              }}>
              Orario di ritiro: 10-00 / 15-00
            </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={30}
            color={'#000000'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default BusinessNotificationCenter;
