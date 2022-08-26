import React from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity} from 'react-native';
import {logout} from '../../../state/features/user';
import {useDispatch} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BusinessSettingsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff', paddingTop: 20}}>
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
          onPress={() => navigation.navigate('BusinessAccountDetailsScreen')}>
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
          onPress={() => navigation.navigate('Auth')}>
          <MaterialCommunityIcons name="repeat" size={30} color={'#000000'} />
          <Text
            style={{
              paddingVertical: 15,
              marginLeft: 5,
              fontSize: 16,
              fontWeight: '700',
              color: '#000000',
            }}>
            Vai all'app consumatori
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BusinessSettingsScreen;
