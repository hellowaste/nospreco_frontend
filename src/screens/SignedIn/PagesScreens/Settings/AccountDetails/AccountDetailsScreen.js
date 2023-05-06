import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountDetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1, paddingTop: 20}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={45}
            color={'#000000'}
          />
        </TouchableOpacity>
        <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
          Dettagli account
        </Text>
      </View>
      <View style={{marginTop: 20, marginHorizontal: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            margin: 5,
            marginBottom: 20,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 10,
          }}
          onPress={() => navigation.navigate('AccountInformationsScreen')}>
          <MaterialCommunityIcons
            name="account-cog-outline"
            size={30}
            color={'#000000'}
          />
          <Text
            style={{
              paddingVertical: 15,
              marginLeft: 5,
              fontSize: 16,
              
              color: '#000000',
            }}>
            Il mio profilo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            margin: 5,
            marginBottom: 20,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 10,
          }}
          onPress={() => navigation.navigate('PayoutSetupScreen')}>
          <MaterialCommunityIcons
            name="credit-card-outline"
            size={30}
            color={'#000000'}
          />
          <Text
            style={{
              paddingVertical: 15,
              marginLeft: 5,
              fontSize: 16,
              
              color: '#000000',
            }}>
            Metodi di pagamento
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            margin: 5,
            marginBottom: 20,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 10,
          }}
          onPress={() => navigation.navigate('SuggestionsSetupScreen')}>
          <MaterialCommunityIcons
            name="star-outline"
            size={30}
            color={'#000000'}
          />
          <Text
            style={{
              paddingVertical: 15,
              marginLeft: 5,
              fontSize: 16,
              
              color: '#000000',
            }}>
            Preferenze
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountDetailsScreen;
