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
  const [incorrectEmail, setIncorrectEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [passwordLengthAlert, setPasswordLengthAlert] = useState(false);
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

  const validateEmail = email => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const validatePassword = password => {
    let re = /^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,99})$/;
    return re.test(password);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#eee',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            color={'#00807a'}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 23,
            fontWeight: '600',
            color: '#000000',
            marginLeft: 20,
          }}>
          Registrati
        </Text>
      </View>
      <View style={{marginBottom: 50}}>
        <View style={{marginHorizontal: 20}}>
          {emailAlert ? (
            <Text
              style={{
                color: '#ff0000',
                marginBottom: 7,
                fontSize: 12,
                fontWeight: '500',
              }}>
              Email obbligatoria
            </Text>
          ) : null}
          {incorrectEmail ? (
            <Text
              style={{
                color: '#ff0000',
                marginBottom: 7,
                fontSize: 12,
                fontWeight: '500',
              }}>
              Email non valida
            </Text>
          ) : null}
          <View
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 5,
              padding: 5,
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
              onChangeText={value => {
                setEmail(value);
                setEmailAlert(false);
                setIncorrectEmail(false);
              }}
            />
          </View>
          {passwordAlert ? (
            <Text
              style={{
                color: '#ff0000',
                marginBottom: -10,
                fontSize: 12,
                fontWeight: '500',
                marginTop: 10,
              }}>
              Password obbligatoria
            </Text>
          ) : null}
          {passwordLengthAlert ? (
            <Text
              style={{
                color: '#ff0000',
                marginBottom: -10,
                fontSize: 12,
                fontWeight: '500',
                marginTop: 10,
              }}>
              Richiesti almeno 8 caratteri, una lettera maiuscola e un numero
            </Text>
          ) : null}
          <View
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 5,
              padding: 5,
              marginTop: 20,
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
              onChangeText={value => {
                setPassword(value);
                setPasswordAlert(false);
                if (value.length >= 8) {
                  setPasswordLengthAlert(false);
                }
              }}
            />
          </View>
          {registrationConfirmation ? (
            <View>
              <Text
                style={{
                  marginTop: 20,
                  textAlign: 'center',
                  color: '#00807a',
                  marginBottom: 10,
                }}>
                Utente creato correttamente
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#00807a',
                  marginHorizontal: 40,
                  borderRadius: 30,
                  marginTop: 50,
                  shadowOpacity: 0.5,
                  shadowColor: '#8f8f8f',
                }}
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingVertical: 15,
                    fontSize: 16,
                    fontWeight: '700',
                    color: '#ffffff',
                  }}>
                  Accedi
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <TouchableOpacity
            style={{
              backgroundColor: '#00807a',
              marginHorizontal: 40,
              borderRadius: 30,
              marginTop: 50,
              shadowOpacity: 0.5,
              shadowColor: '#8f8f8f',
            }}
            onPress={() => {
              if (email == '') {
                setEmailAlert(true);
              } else if (!validateEmail(email)) {
                setIncorrectEmail(true);
              } else if (password == '') {
                setPasswordAlert(true);
              } else if (!validatePassword(password)) {
                setPasswordLengthAlert(true);
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
                paddingVertical: 15,
                fontSize: 16,
                fontWeight: '700',
                color: '#ffffff',
              }}>
              Crea account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              marginHorizontal: 40,
              borderRadius: 30,
              marginTop: 10,
              shadowOpacity: 0.5,
              shadowColor: '#8f8f8f',
            }}
            onPress={() => navigation.navigate('BusinessRegistrationScreen')}>
            <Text
              style={{
                textAlign: 'center',
                paddingVertical: 15,
                fontSize: 16,
                fontWeight: '700',
                color: '#00807a',
              }}>
              Hai un punto vendita?
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
