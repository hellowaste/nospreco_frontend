import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay/src';
import Loader from 'react-native-modal-loader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RegistrationScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [emailAlert, setEmailAlert] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [registrationConfirmation, setRegistrationConfirmation] =
    useState(false);

  const createUser = async values => {
    let res;
    await axios
      .post('https://nospreco-backend.herokuapp.com/user/register', values)
      .then(response => {
        console.log(response.data);
        res = response.data;
      })
      .catch(error => console.log(error));
    return res;
  };
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            color={'#1daf70'}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 23,
            fontWeight: '600',
            color: '#1daf70',
            marginLeft: 20,
          }}>
          Registrati
        </Text>
      </View>
      <View style={{marginBottom: 50}}>
        <View style={{marginHorizontal: 20}}>
          {emailAlert ? <Text>Email obbligatoria</Text> : null}
          <View
            style={{
              marginTop: 20,
              backgroundColor: '#ffffff',
              borderRadius: 5,
              padding: 10,
              shadowOpacity: 0.5,
              shadowColor: '#bebebe',
              shadowRadius: 10,
            }}>
            <TextInput
              placeholder="Email"
              style={{width: '100%', fontSize: 18}}
              placeholderTextColor={'#3d3d3d'}
              autoCapitalize={'none'}
              value={email}
              onChangeText={value => setEmail(value)}
            />
          </View>
          {passwordAlert ? <Text>Password obbligatoria</Text> : null}
          <View
            style={{
              marginTop: 20,
              backgroundColor: '#ffffff',
              borderRadius: 5,
              padding: 10,
              shadowOpacity: 0.5,
              shadowColor: '#bebebe',
              shadowRadius: 10,
            }}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={{width: '100%', fontSize: 18}}
              placeholderTextColor={'#3d3d3d'}
              value={password}
              onChangeText={value => setPassword(value)}
            />
          </View>
          {registrationConfirmation ? (
            <Text style={{marginTop: 20, textAlign: 'center'}}>
              Utente creato correttamente
            </Text>
          ) : null}
          <TouchableOpacity
            style={{
              backgroundColor: '#1daf70',
              marginHorizontal: 40,
              borderRadius: 20,
              marginTop: 50,
              shadowOpacity: 0.5,
              shadowColor: '#8f8f8f',
            }}
            onPress={() => {
              if (email == '') {
                setEmailAlert(true);
              } else if (password == '') {
                setPasswordAlert(true);
              } else {
                const requestPayload = {
                  email: email,
                  password: password,
                };
                setIsVisible(true);
                createUser(requestPayload)
                  .then(() => {
                    setIsVisible(false);
                    setRegistrationConfirmation(true);
                  })
                  .catch(error => console.log(error));
              }
            }}>
            <Text
              style={{
                textAlign: 'center',
                paddingVertical: 10,
                fontSize: 16,
                fontWeight: '700',
                color: '#ffffff',
              }}>
              Crea account
            </Text>
          </TouchableOpacity>
        </View>
        <Spinner
          visible={isVisible}
          textContent={'Loading...'}
          // textStyle={styles.spinnerTextStyle}
        />
        <Loader loading={isVisible} color="#FC0D0C" title="loading" />
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
