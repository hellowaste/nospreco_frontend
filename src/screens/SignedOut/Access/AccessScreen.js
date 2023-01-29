import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {login} from '../../../state/features/user';

const AccessScreen = ({navigation}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rememberPassword, setRememberPassword] = useState(false);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: 50,
      }}>
      <View style={{width: '100%'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}>
          <Text
            style={{
              color: '#21B861',
              fontSize: 14,
              fontWeight: '400',
              textDecorationLine: 'underline',
              alignSelf: 'flex-end',
              paddingRight: 30,
            }}>
            Registrati
          </Text>
        </TouchableOpacity>
        <View style={{paddingLeft: 10}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 22,
              fontWeight: '700',
            }}>
            Ehi, bentornato!
          </Text>
          <View>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 14,
                fontWeight: '500',
                paddingRight: 90,
                marginTop: 15,
              }}>
              Accedi al tuo account
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View
          style={{justifyContent: 'space-between', flexDirection: 'column'}}>
          <View>
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
              <View style={{marginTop: 15}}>
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 14,
                    fontWeight: '600',
                    fontFamily: 'poppins',
                    marginBottom: 5,
                  }}>
                  Password
                </Text>
                <View
                  style={{
                    borderStyle: 'solid',
                    borderWidth: 0.3,
                    borderColor: '#000000',
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: 5,
                    paddingRight: 10,
                  }}>
                  <TextInput
                    placeholder="Crea una nuova password"
                    placeholderTextColor="#000000"
                    secureTextEntry={passwordVisibility}
                    autoFocus={false}
                    style={{
                      marginLeft: 5,
                      fontSize: 16,
                      color: '#000000',
                      fontWeight: '500',
                      fontFamily: 'poppins',
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setPasswordVisibility(!passwordVisibility);
                    }}>
                    {passwordVisibility === true ? (
                      <MaterialCommunityIcons
                        name="eye-off"
                        size={20}
                        color={'#21B861'}
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="eye"
                        size={20}
                        color={'#21B861'}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                marginTop: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {rememberPassword === true ? (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#21B861',
                      width: 20,
                      height: 20,
                      borderRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      setRememberPassword(!rememberPassword);
                    }}>
                    <MaterialCommunityIcons
                      name="check"
                      color={'#ffffff'}
                      size={18}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#ffffff',
                      width: 20,
                      height: 20,
                      borderRadius: 3,
                      borderStyle: 'solid',
                      borderWidth: 0.5,
                      borderColor: '#21B861',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      setRememberPassword(!rememberPassword);
                    }}
                  />
                )}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 5,
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: '400',
                      fontFamily: 'poppins',
                    }}>
                    Ricordami
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RecoverPasswordScreen');
                }}>
                <Text
                  style={{
                    color: '#21B861',
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    textDecorationLine: 'underline',
                  }}>
                  Hai dimenticato la password?
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <View style={{marginTop: 20}}>
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 12,
                    fontWeight: '400',
                    fontFamily: 'poppins',
                    textAlign: 'center',
                    marginBottom: 20,
                  }}>
                  Oppure accedi con:
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                }}>
                <View
                  style={{
                    width: '31%',
                    height: 50,
                    borderColor: '#3C434B',
                    borderStyle: 'solid',
                    borderWidth: 0.3,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="facebook"
                    size={30}
                    color={'#1877F2'}
                  />
                </View>
                <View
                  style={{
                    width: '31%',
                    height: 50,
                    borderColor: '#3C434B',
                    borderStyle: 'solid',
                    borderWidth: 0.3,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../../../assets/app/access/img-google.png')}
                    style={{width: 30, height: 30}}
                  />
                </View>
                <View
                  style={{
                    width: '31%',
                    height: 50,
                    borderColor: '#3C434B',
                    borderStyle: 'solid',
                    borderWidth: 0.3,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="apple"
                    size={30}
                    color={'#000000'}
                  />
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={{width: '100%', alignItems: 'center', marginTop: 30}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#21B861',
                  width: '90%',
                  borderRadius: 10,
                }}
                onPress={() => {
                  const payload = {
                    token: 'jwtToken',
                  };
                  dispatch(login(payload));
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
                  Accedi
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccessScreen;
