import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const StorePayoutDetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff', paddingTop: 20}}>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            color: '#000000',
            fontSize: 23,
            fontWeight: '700',
            marginLeft: 20,
          }}>
          Crea il tuo store
        </Text>
        <View>
          <View
            style={{
              height: 3,
              width: '80%',
              backgroundColor: '#00807a',
              alignSelf: 'center',
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: '#00807a',
                borderRadius: 30,
                width: 10,
                height: 10,
              }}
            />
            <View
              style={{
                backgroundColor: '#ffffff',
                borderWidth: 1,
                borderColor: '#00807a',
                borderRadius: 30,
                width: 10,
                height: 10,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              marginLeft: 20,
              width: '90%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#000000', fontSize: 14, fontWeight: '400'}}>
              Dati Store
            </Text>
            <Text style={{color: '#000000', fontSize: 14, fontWeight: '800'}}>
              Pagamenti
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginTop: 20, paddingHorizontal: 20}}>
        <View>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
            IBAN Persona Giuridica
          </Text>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
              backgroundColor: '#ffffff',
              borderRadius: 5,
              padding: 5,
              shadowOffset: {width: 10, height: 10},
              shadowColor: '#000000',
              shadowOpacity: 1,
              elevation: 3,
            }}>
            <TextInput placeholder={'IBAN'} placeholderTextColor={'#000000'} />
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            marginBottom: 30,
            marginHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              borderColor: '#00807a',
              borderRadius: 20,
              backgroundColor: '#ffffff',
              margin: 10,
              alignItems: 'center',
              shadowOffset: {width: 10, height: 10},
              shadowColor: '#000000',
              shadowOpacity: 1,
              elevation: 5,
            }}
            onPress={() => navigation.goBack()}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '600',
                padding: 10,
                textAlign: 'center',
              }}>
              Indietro
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              borderColor: '#00807a',
              borderRadius: 20,
              backgroundColor: '#00807a',
              margin: 10,
              alignItems: 'center',
              shadowOffset: {width: 10, height: 10},
              shadowColor: '#000000',
              shadowOpacity: 1,
              elevation: 10,
            }}
            onPress={() => navigation.navigate('Business')}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: '600',
                padding: 10,
                textAlign: 'center',
              }}>
              Conferma e prosegui
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StorePayoutDetailsScreen;
