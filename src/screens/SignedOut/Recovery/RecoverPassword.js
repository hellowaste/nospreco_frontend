import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RecoverPassword = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: 50,
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 10,
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
            fontSize: 14,
            fontWeight: '300',
            fontFamily: 'poppins',
          }}>
          Indietro
        </Text>
      </TouchableOpacity>
      <View style={{paddingLeft: 10, marginTop: 15}}>
        <Text
          style={{
            color: '#000000',
            fontSize: 22,
            fontWeight: '700',
          }}>
          Reset password
        </Text>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 15,
            fontWeight: '400',
            paddingRight: 50,
            marginTop: 15,
          }}>
          Inserisci l'email associata al tuo account, ti invieremo una mail con
          le istruzioni per ripristinare la tua password.
        </Text>
      </View>
      <View style={{paddingHorizontal: 10, marginTop: 20}}>
        <View>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 14,
              fontWeight: '600',
              fontFamily: 'poppins',
              marginBottom: 5,
            }}>
            Email
          </Text>
          <View
            style={{
              borderStyle: 'solid',
              borderWidth: 0.3,
              borderColor: '#000000',
              borderRadius: 10,
            }}>
            <TextInput
              placeholder="Inserisci la tua email"
              placeholderTextColor="#000000"
              keyboardType="email-address"
              autoFocus={false}
              style={{
                marginLeft: 5,
                fontSize: 16,
                color: '#000000',
                fontWeight: '500',
                fontFamily: 'poppins',
              }}
            />
          </View>
        </View>
      </View>
      <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#21B861',
            width: '95%',
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate('ConfirmRecoveryScreen');
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '700',
              fontFamily: 'poppins',
              textAlign: 'center',
              paddingVertical: 14,
            }}>
            Invia istruzioni
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecoverPassword;
