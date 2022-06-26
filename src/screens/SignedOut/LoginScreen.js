import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay/src';
import Loader from 'react-native-modal-loader';
import {login} from '../../state/features/user';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [emailAlert, setEmailAlert] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordAlert, setPasswordAlert] = useState(false);

  const loginUser = async values => {
    let res;
    await axios
      .post('https://nospreco-backend.herokuapp.com/user/login', values)
      .then(response => {
        console.log(response.data);
        res = response.data;
      })
      .catch(error => console.log(error));
    return res;
  };
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, justifyContent: 'space-between', paddingTop: 50}}>
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
          Accedi
        </Text>
      </View>
      <View>
        <View
          style={{
            backgroundColor: '#69d2af',
            height: 100,
            borderRadius: 30,
            marginBottom: -50,
          }}
        />
        <View style={{backgroundColor: '#69d2af', paddingBottom: 50}}>
          <View style={{marginHorizontal: 20}}>
            {emailAlert ? (
              <Text
                style={{
                  color: '#ff0000',
                  marginBottom: 7,
                  fontSize: 12,
                  fontWeight: '700',
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
                padding: 10,
                shadowOpacity: 0.5,
                shadowColor: '#bebebe',
                shadowRadius: 10,
              }}>
              <TextInput
                placeholder="Email"
                style={{width: '100%', fontSize: 20}}
                placeholderTextColor={'#3d3d3d'}
                autoCapitalize={'none'}
                value={email}
                onChangeText={value => {
                  setEmail(value);
                  setEmailAlert(false);
                }}
              />
            </View>
            {passwordAlert ? (
              <Text
                style={{
                  color: '#ff0000',
                  marginVertical: 5,
                  fontSize: 12,
                  fontWeight: '700',
                }}>
                Password obbligatoria
              </Text>
            ) : (
              <Text
                style={{
                  color: '#ff0000',
                  marginVertical: 5,
                  fontSize: 12,
                  fontWeight: '700',
                }}
              />
            )}
            <View
              style={{
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
                style={{width: '100%', fontSize: 20}}
                placeholderTextColor={'#3d3d3d'}
                value={password}
                onChangeText={value => {
                  setPassword(value);
                  setPasswordAlert(false);
                }}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#1daf70',
                marginHorizontal: 40,
                borderRadius: 30,
                marginTop: 50,
                shadowOpacity: 0.5,
                shadowColor: '#009b6e',
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
                  loginUser(requestPayload)
                    .then(res => {
                      setIsVisible(false);
                      if (res.hasOwnProperty('error')) {
                        alert(res.error);
                      } else {
                        dispatch(login(res));
                      }
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
                Accedi
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
      </View>
    </View>
  );
};

export default LoginScreen;
