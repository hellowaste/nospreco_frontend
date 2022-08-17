import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {logout} from '../../../state/features/user';
import {useDispatch} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView
        style={{
          marginTop: 30,
          marginHorizontal: 20,
          backgroundColor: '#ffffff',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            margin: 5,
            paddingHorizontal: 10,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 5,
          }}
          onPress={() => navigation.navigate('AccountDetailsScreen')}>
          <MaterialCommunityIcons name="account" size={30} color={'#000000'} />
          <Text
            style={{
              paddingVertical: 15,
              marginLeft: 5,
              fontSize: 16,
              fontWeight: '700',
              color: '#000000',
            }}>
            Dettagli account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            margin: 5,
            marginTop: 20,
            paddingHorizontal: 10,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 5,
          }}
          onPress={() => navigation.navigate('OrdersHistory')}>
          <MaterialCommunityIcons name="receipt" size={30} color={'#000000'} />
          <Text
            style={{
              paddingVertical: 15,
              marginLeft: 5,
              fontSize: 16,
              fontWeight: '700',
              color: '#000000',
            }}>
            Storico ordini
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            margin: 5,
            marginTop: 20,
            paddingHorizontal: 10,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 5,
          }}>
          <MaterialCommunityIcons
            name="face-agent"
            size={30}
            color={'#000000'}
          />
          <Text
            style={{
              paddingVertical: 15,
              marginLeft: 5,
              fontSize: 16,
              fontWeight: '700',
              color: '#000000',
            }}>
            Supporto
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            margin: 5,
            marginTop: 20,
            marginBottom: 10,
            paddingHorizontal: 10,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 5,
          }}
          onPress={() => dispatch(logout())}>
          <MaterialCommunityIcons name="logout" size={30} color={'#000000'} />
          <Text
            style={{
              paddingVertical: 15,
              marginLeft: 5,
              fontSize: 16,
              fontWeight: '700',
              color: '#000000',
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
