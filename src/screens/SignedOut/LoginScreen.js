import React, {useState} from 'react';
import {
  Image,
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
  const [imageLoader, setImageLoader] = useState(false);
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
    console.log(res);
    return res;
  };
  const dispatch = useDispatch();

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
            color={'#000000'}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 23,
            fontWeight: '600',
            color: '#000000',
            marginLeft: 20,
          }}>
          Accedi
        </Text>
      </View>
      <View>
        <View
          style={{
            backgroundColor: '#b9ceac',
            height: 100,
            borderRadius: 30,
            marginBottom: -50,
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 15,
            zIndex: -1,
          }}
        />
        <View style={{backgroundColor: '#b9ceac', paddingBottom: 50}}>
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
                padding: 5,
                shadowRadius: 10,
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 3,
              }}>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={{width: '100%', fontSize: 20, color: '#000000'}}
                placeholderTextColor={'#3d3d3d'}
                value={password}
                onChangeText={value => {
                  setPassword(value);
                  setPasswordAlert(false);
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                <Text
                  style={{color: '#2e650a', fontSize: 12, fontWeight: '600'}}>
                  Password dimenticata?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('RegistrationScreen')}>
                <Text
                  style={{color: '#2e650a', fontSize: 12, fontWeight: '600'}}>
                  Non hai ancora un account?
                </Text>
              </TouchableOpacity>
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
                  paddingVertical: 10,
                  fontSize: 20,
                  fontWeight: '700',
                  color: '#2e650a',
                }}>
                Accedi
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 50,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 5,
                marginRight: 10,
              }}>
              <View style={{padding: 10}}>
                <Image
                  source={require('../../assets/logo/facebook/facebook.png')}
                  style={{width: 25, height: 25}}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: '#ffffff', borderRadius: 5}}>
              <View style={{padding: 10}}>
                <Image
                  source={require('../../assets/logo/google/google.png')}
                  style={{width: 25, height: 25}}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Spinner visible={isVisible} textContent={'Loading...'} />
          <Loader loading={isVisible} color="#FC0D0C" title="loading" />
        </View>
      </View>
      {/*<View*/}
      {/*  style={{*/}
      {/*    position: 'absolute',*/}
      {/*    width: 100,*/}
      {/*    height: 100,*/}
      {/*    backgroundColor: '#ffffff',*/}
      {/*    borderRadius: 15,*/}
      {/*    top: '50%',*/}
      {/*    left: '35%',*/}
      {/*    alignItems: 'center',*/}
      {/*    justifyContent: 'center',*/}
      {/*    shadowOffset: {width: 10, height: 10},*/}
      {/*    shadowColor: '#000000',*/}
      {/*    shadowOpacity: 1,*/}
      {/*    elevation: 3,*/}
      {/*  }}>*/}
      {/*  <Image*/}
      {/*    source={require('../../assets/logo/app/app_logo.png')}*/}
      {/*    style={{height: 120, width: 120}}*/}
      {/*  />*/}
      {/*</View>*/}
    </SafeAreaView>
  );
};

export default LoginScreen;
