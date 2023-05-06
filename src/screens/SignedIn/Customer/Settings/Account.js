import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Account = ({navigation}) => {
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
          Il mio account
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
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
            textAlign: 'left',
          }}>
          Nome utente
        </Text>
        <View
          style={{
            borderColor: '#999da1',
            borderWidth: 0.3,
            borderRadius: 10,
            marginTop: 2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="@NomeUtente"
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons
            name="pencil"
            size={20}
            color={'#000000'}
            style={{marginRight: 10}}
          />
        </View>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
            textAlign: 'left',
            marginTop: 20,
          }}>
          Email
        </Text>
        <View
          style={{
            borderColor: '#999da1',
            borderWidth: 0.3,
            borderRadius: 10,
            marginTop: 2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="indirizzoemail@mail.com"
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons
            name="pencil"
            size={20}
            color={'#000000'}
            style={{marginRight: 10}}
          />
        </View>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
            textAlign: 'left',
            marginTop: 20,
          }}>
          Numero di telefono
        </Text>
        <View
          style={{
            borderColor: '#999da1',
            borderWidth: 0.3,
            borderRadius: 10,
            marginTop: 2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="+39 393 333 3333"
            placeholderTextColor={'#000000'}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UpdateAccount');
            }}>
            <MaterialCommunityIcons
              name="pencil"
              size={20}
              color={'#000000'}
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
            textAlign: 'left',
            marginTop: 20,
          }}>
          Password
        </Text>
        <View
          style={{
            borderColor: '#999da1',
            borderWidth: 0.3,
            borderRadius: 10,
            marginTop: 2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput placeholder="*********" placeholderTextColor={'#000000'} />
          <MaterialCommunityIcons
            name="pencil"
            size={20}
            color={'#000000'}
            style={{marginRight: 10}}
          />
        </View>
      </View>
    </View>
  );
};

export default Account;
