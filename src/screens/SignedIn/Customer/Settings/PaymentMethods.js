import React, {useState} from 'react';
import {Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PaymentMethods = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: 15,
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 15,
          marginTop: 50,
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={30}
          color={'#000000'}
        />
        <Text
          style={{
            color: '#000000',
            fontSize: 20,
            fontWeight: '800',
          }}>
          Metodi di pagamento
        </Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: '#D9E0E8',
          height: 1,
          marginVertical: 10,
        }}
      />
      <View style={{marginHorizontal: 15}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '800',
              fontFamily: 'poppins',
            }}>
            Metodi salvati
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              borderRadius: 10,
              padding: 10,
            }}>
            <MaterialCommunityIcons name="plus" size={20} color={'#ffffff'} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
            fontWeight: '800',
            fontFamily: 'poppins',
            marginTop: 20,
          }}>
          Altri metodi di pagamento
        </Text>
      </View>
    </View>
  );
};

export default PaymentMethods;
