import React, {useState} from 'react';
import {Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppNotifications = ({navigation}) => {
  const [isPushNotificationsEnabled, setIsPushNotificationsEnabled] =
    useState(true);
  const togglePushNotificationsSwitch = () =>
    setIsPushNotificationsEnabled(previousState => !previousState);
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
            
          }}>
          Notifiche
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
              fontSize: 18,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Notifiche Push
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#d7d7d7'}}
            thumbColor={isPushNotificationsEnabled ? '#21B861' : '#D9E0E8'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={togglePushNotificationsSwitch}
            value={isPushNotificationsEnabled}
            style={{marginTop: 10}}
          />
        </View>
        <View
          style={{
            backgroundColor: '#D9E0E8',
            height: 1,
            marginVertical: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 18,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Nuove offerte disponibili
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#d7d7d7'}}
            thumbColor={isPushNotificationsEnabled ? '#21B861' : '#D9E0E8'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={togglePushNotificationsSwitch}
            value={isPushNotificationsEnabled}
            style={{marginTop: 10}}
          />
        </View>
        <View
          style={{
            backgroundColor: '#D9E0E8',
            height: 1,
            marginVertical: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 18,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Newsletter
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#d7d7d7'}}
            thumbColor={isPushNotificationsEnabled ? '#21B861' : '#D9E0E8'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={togglePushNotificationsSwitch}
            value={isPushNotificationsEnabled}
            style={{marginTop: 10}}
          />
        </View>
        <View
          style={{
            backgroundColor: '#D9E0E8',
            height: 1,
            marginVertical: 10,
          }}
        />
      </View>
    </View>
  );
};

export default AppNotifications;
