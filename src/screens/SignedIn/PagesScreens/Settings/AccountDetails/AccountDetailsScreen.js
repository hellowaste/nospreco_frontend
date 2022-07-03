import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountDetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'eee', flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={45}
            color={'#00807a'}
          />
        </TouchableOpacity>
        <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
          Dettagli account
        </Text>
      </View>
      <View style={{marginHorizontal: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#00807a',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginBottom: 20,
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
              fontWeight: '700',
              color: '#000000',
            }}>
            Il mio profilo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#00807a',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginBottom: 20,
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
              fontWeight: '700',
              color: '#000000',
            }}>
            Metodi di pagamento
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#00807a',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}
          onPress={() => navigation.navigate('SuggestionsSetupScreen')}>
          <MaterialCommunityIcons
            name="file-multiple-outline"
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
            Consigli
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountDetailsScreen;
