import React from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity} from 'react-native';
import {logout} from '../../../state/features/user';
import {useDispatch} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{marginTop: 30, marginHorizontal: 20}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#00807a',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
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
            backgroundColor: '#00807a',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginTop: 20,
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
            backgroundColor: '#00807a',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginTop: 20,
          }}>
          <MaterialCommunityIcons name="lifebuoy" size={30} color={'#000000'} />
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
            backgroundColor: '#00807a',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginTop: 20,
          }}>
          <MaterialCommunityIcons
            name="newspaper-variant-outline"
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
            Blog
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#00807a',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginTop: 20,
          }}
          onPress={() => dispatch(logout())}>
          <MaterialCommunityIcons name="logout" size={30} color={'#ffffff'} />
          <Text
            style={{
              paddingVertical: 15,
              marginLeft: 5,
              fontSize: 16,
              fontWeight: '700',
              color: '#ffffff',
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
