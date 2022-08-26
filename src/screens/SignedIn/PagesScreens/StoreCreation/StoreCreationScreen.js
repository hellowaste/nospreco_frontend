import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const StoreCreationScreen = ({navigation}) => {
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
                backgroundColor: '#ffffff',
                borderWidth: 1,
                borderColor: '#00807a',
                borderRadius: 30,
                width: 10,
                height: 10,
              }}
            />
            <View
              style={{
                backgroundColor: '#00807a',
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
            <Text style={{color: '#000000', fontSize: 14, fontWeight: '800'}}>
              Dati Store
            </Text>
            <Text style={{color: '#000000', fontSize: 14, fontWeight: '400'}}>
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
            Denominazione
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
            <TextInput
              placeholder={'Nome Store'}
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
            Indirizzo
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
            <TextInput
              placeholder={'Indirizzo Store'}
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
            Città
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
            <TextInput
              placeholder={'Città Store'}
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
            Cap
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
            <TextInput
              placeholder={'CAP Store'}
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
            Provincia
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
            <TextInput
              placeholder={'Provincia Store'}
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
            Ragione sociale
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
            <TextInput
              placeholder={'Ragione sociale'}
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
            Partita IVA
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
            <TextInput
              placeholder={'P. IVA'}
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
            Telefono
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
            <TextInput
              placeholder={'Telefono Store'}
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
            Email
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
            <TextInput
              placeholder={'Email Store'}
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
            Referente
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
            <TextInput
              placeholder={'Referente Store'}
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
            Recapito telefonico referente
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
            <TextInput
              placeholder={'Telefono referente'}
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
            Logo Store
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              borderColor: '#00807a',
              borderRadius: 20,
              backgroundColor: '#ffffff',
              marginTop: 20,
              marginHorizontal: 50,
              marginVertical: 10,
              alignItems: 'center',
              shadowOffset: {width: 10, height: 10},
              shadowColor: '#000000',
              shadowOpacity: 1,
              elevation: 5,
            }}>
            <Text
              style={{
                color: '#00807a',
                fontSize: 16,
                fontWeight: '600',
                padding: 10,
                textAlign: 'center',
              }}>
              Carica foto
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, marginBottom: 30}}>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              borderColor: '#00807a',
              borderRadius: 20,
              backgroundColor: '#ffffff',
              marginHorizontal: 50,
              marginVertical: 10,
              alignItems: 'center',
              shadowOffset: {width: 10, height: 10},
              shadowColor: '#000000',
              shadowOpacity: 1,
              elevation: 5,
            }}
            onPress={() => navigation.navigate('StorePayoutDetailsScreen')}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '600',
                padding: 10,
                textAlign: 'center',
              }}>
              Prosegui
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoreCreationScreen;
