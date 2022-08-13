import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountInformationsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={45}
            color={'#000000'}
          />
        </TouchableOpacity>
        <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
          Profilo
        </Text>
      </View>
      <View style={{marginLeft: 10, marginRight: 20, marginTop: 20}}>
        <Text
          style={{
            color: '#000000',
            fontSize: 20,
            fontWeight: '700',
            marginBottom: 10,
          }}>
          Dettagli profilo
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            backgroundColor: '#ffffff',
            borderRadius: 5,
            paddingHorizontal: 5,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 3,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '700',
              paddingVertical: 10,
            }}>
            Nome
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '500',
            }}>
            Mario Rossi
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            backgroundColor: '#ffffff',
            borderRadius: 5,
            paddingHorizontal: 5,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 3,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '700',
              paddingVertical: 10,
            }}>
            Email
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '500',
            }}>
            mariorossi@gmail.com
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            backgroundColor: '#ffffff',
            borderRadius: 5,
            paddingHorizontal: 5,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 3,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '700',
              paddingVertical: 10,
            }}>
            Numero di telefono
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '500',
            }}>
            +39 393 1111503
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
            borderRadius: 5,
            paddingHorizontal: 5,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 3,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '700',
              paddingVertical: 10,
            }}>
            Paese
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '500',
            }}>
            Italia
          </Text>
        </View>
        <Text
          style={{
            color: '#000000',
            fontSize: 20,
            fontWeight: '700',
            marginBottom: 10,
            marginTop: 30,
          }}>
          Impostazioni
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            backgroundColor: '#ffffff',
            borderRadius: 5,
            paddingHorizontal: 5,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 3,
          }}
          onPress={() => navigation.navigate('NotificationsSetupScreen')}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '700',
              paddingVertical: 10,
            }}>
            Notifiche
          </Text>
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={'#000000'}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountInformationsScreen;
