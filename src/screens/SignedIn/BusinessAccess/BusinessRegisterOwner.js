import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BusinessRegisterOwner = ({navigation}) => {
  const [supportModal, setSupportModal] = useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 50,
        paddingHorizontal: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            color={'#000000'}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#000000',
            fontSize: 22,
            
            fontFamily: 'Poppins-Regular',
          }}>
          Registra il tuo store
        </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="help-circle"
            size={30}
            color={'#21B861'}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 12,
            fontWeight: '400',
            fontFamily: 'Poppins-Regular',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Completa questa procedura per richiedere l’accesso come venditore e
          dire addio agli sprechi del tuo store!
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="numeric-1-circle"
            size={40}
            color={'#A3AEB4'}
          />
          <Text
            style={{
              paddingTop: 2,
              color: '#A3AEB4',
              fontSize: 14,
              lineHeight: 12,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
            }}>
            Informazioni
          </Text>
          <Text
            style={{
              color: '#A3AEB4',
              fontSize: 14,
              lineHeight: 12,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
            }}>
           negozio
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="numeric-2-circle"
            size={40}
            color={'#21B861'}
          />
          <Text
            style={{
              paddingTop: 2,
              color: '#21B861',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
            }}>
            Informazioni
          </Text>
          <Text
            style={{
              color: '#21B861',
              fontSize: 14,
              lineHeight: 12,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
            }}>
           referente
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="numeric-3-circle"
            size={40}
            color={'#A3AEB4'}
          />
          <Text
            style={{
              paddingTop: 2,
              color: '#A3AEB4',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
            }}>
            Verifica 
          </Text>
          <Text
            style={{
              color: '#A3AEB4',
              fontSize: 14,
              lineHeight: 12,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
            }}>
             informazioni
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#D9E0E8',
          height: 1,
          width: '100%',
          marginTop: 10,
        }}
      />
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'Poppins-Regular',
          }}>
          Informazioni sul referente dello store
        </Text>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Nome e Cognome
          </Text>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#B5B5B5',
            }}>
            <TextInput
              placeholder={'Inserisci il nome e cognome del referente'}
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Numero di telefono
          </Text>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#B5B5B5',
            }}>
            <TextInput
              placeholder={'Inserisci il numero di telefono del referente'}
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            IBAN Persona Giuridica
          </Text>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#B5B5B5',
            }}>
            <TextInput
              placeholder={
                'Inserisci l’IBAN su cui verranno eseguiti i pagamenti'
              }
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#21B861',
            borderRadius: 10,
            marginTop: 30,
            marginBottom: 80,
          }}
          onPress={() => {
            navigation.navigate('BusinessRegisterSummary');
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
              paddingVertical: 15,
            }}>
            Continua
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BusinessRegisterOwner;
