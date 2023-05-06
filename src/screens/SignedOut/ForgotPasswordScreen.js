import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ForgotPasswordScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [emailAlert, setEmailAlert] = useState(false);
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#b9ceac',
        flex: 1,
        paddingTop: 20,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            color={'#000000'}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            fontFamily:'Poppins-Bold',
            color: '#000000',
            marginLeft: 20,
          }}>
          Reset password
        </Text>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 50}}>
        {emailAlert ? (
          <Text
            style={{
              color: '#ff0000',
              marginBottom: 7,
              fontSize: 12,
              
              fontFamily:'Poppins-Regular'
            }}>
            Email obbligatoria
          </Text>
        ) : (
          <Text
            style={{
              color: '#ffffff',
              marginBottom: 7,
              fontSize: 12,
              fontWeight: '500',
            }}
          />
        )}
        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 5,
            padding: 5,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 3,
          }}>
          <TextInput
            placeholder="Email"
            style={{width: '100%', fontSize: 20, color: '#000000'}}
            placeholderTextColor={'#3d3d3d'}
            autoCapitalize={'none'}
            value={email}
            onChangeText={value => {
              setEmail(value);
              setEmailAlert(false);
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            marginHorizontal: 40,
            borderRadius: 30,
            marginTop: 50,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 3,
          }}
          onPress={() => {
            if (email == '') {
              setEmailAlert(true);
            } else {
              const requestPayload = {
                email: email,
              };
              setIsVisible(true);
              setIsVisible(false);
            }
          }}>
          <Text
            style={{
              textAlign: 'center',
              paddingVertical: 10,
              fontSize: 20,
              
              color: '#2e650a',
            }}>
            Recupera password
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
