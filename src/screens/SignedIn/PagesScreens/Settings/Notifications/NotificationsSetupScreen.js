import React, {useState} from 'react';
import {SafeAreaView, Switch, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NotificationsSetupScreen = ({navigation}) => {
  const [isPushNotificationsEnabled, setIsPushNotificationsEnabled] =
    useState(false);
  const [isNewsletterEnabled, setIsNewsletterEnabled] = useState(false);
  const togglePushNotificationsSwitch = () =>
    setIsPushNotificationsEnabled(previousState => !previousState);
  const toggleNewsletterSwitch = () =>
    setIsNewsletterEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1, paddingTop: 20}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginRight: 30,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={45}
              color={'#000000'}
            />
          </TouchableOpacity>
          <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
            Notifiche
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <MaterialCommunityIcons
              name="home-outline"
              size={30}
              color={'#000000'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginLeft: 10, marginRight: 20, marginTop: 20}}>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
            fontWeight: '700',
            marginBottom: 10,
          }}>
          Imposta preferenze notifiche
        </Text>
      </View>
      <View style={{marginTop: 20, marginHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#000000', fontSize: 16}}>Notifiche push</Text>
          <Switch
            trackColor={{false: '#767577', true: '#d7d7d7'}}
            thumbColor={isPushNotificationsEnabled ? '#3a9b2b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={togglePushNotificationsSwitch}
            value={isPushNotificationsEnabled}
            style={{marginTop: 10}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#000000', fontSize: 16}}>Newsletter</Text>
          <Switch
            trackColor={{false: '#767577', true: '#d7d7d7'}}
            thumbColor={isNewsletterEnabled ? '#3a9b2b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleNewsletterSwitch}
            value={isNewsletterEnabled}
            style={{marginTop: 10}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationsSetupScreen;
