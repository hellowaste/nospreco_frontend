import React, {useState} from 'react';
import {
  Image,
  Modal,
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
  const [faceId, setFaceId] = useState(false);
  const [touchId, setTouchId] = useState(false);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: 50,
      }}>
      <Modal animationType="slide" transparent={true} visible={faceId}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '90%',
            borderRadius: 10,
            borderColor: '#b0b0b0',
            borderWidth: 0.5,
            alignSelf: 'center',
            top: '30%',
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Accedi con il Face ID
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Sblocca Hello Waste! con il tuo volto!
          </Text>
          <Image
            source={require('../../../assets/app/access/face_id.png')}
            style={{
              width: 70,
              height: 70,
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
              marginVertical: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                setFaceId(false);
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  textAlign: 'center',
                  marginTop: 10,
                }}>
                Annulla
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setFaceId(false);
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  textAlign: 'center',
                  marginTop: 10,
                }}>
                Accedi con le credenziali
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={touchId}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '90%',
            borderRadius: 10,
            borderColor: '#b0b0b0',
            borderWidth: 0.5,
            alignSelf: 'center',
            top: '30%',
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Accedi con l’impronta
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Conferma la tua impronta toccando il sensore per accedere
            velocemente al tuo account Hello Waste.
          </Text>
          <Image
            source={require('../../../assets/app/access/imprint.png')}
            style={{
              width: 50,
              height: 50,
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              textAlign: 'center',
            }}>
            Tocca il sensore
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
              marginVertical: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                setTouchId(false);
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  textAlign: 'center',
                  marginTop: 10,
                }}>
                Annulla
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setTouchId(false);
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  textAlign: 'center',
                  marginTop: 10,
                }}>
                Accedi con le credenziali
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{width: '100%'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}>
          <Text
            style={{
              color: '#21B861',
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              fontWeight: '400',             
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
              fontSize: 24,
              fontFamily:'Poppins-Bold'
            }}>
            Ehi, bentornato!
          </Text>
          <View>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                paddingRight: 90,
                marginTop: 5,
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
                    fontFamily: 'Poppins-Regular',
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
                      fontFamily: 'Poppins-Regular',
                    }}
                  />
                </View>
              </View>
              <View style={{marginTop: 20}}>
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 14,
                    fontWeight: '600',
                    fontFamily: 'Poppins-Regular',
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
                      fontFamily: 'Poppins-Regular',
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
                      fontFamily: 'Poppins-Regular',
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
                    fontFamily: 'Poppins-Regular',
                    
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
                    fontFamily: 'Poppins-Regular',
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
                  borderColor: '#21B861',
                  borderStyle: 'solid',
                  borderWidth: 1,
                  borderRadius: 15,
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
                    borderColor: '#21B861',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderRadius: 15,
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
                      borderColor: '#21B861',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      borderRadius: 15,
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 100,
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{
                width: '31%',
                height: 50,
                borderColor: '#3C434B',
                borderStyle: 'solid',
                borderWidth: 0.3,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                setFaceId(true);
              }}>
              <Image
                source={require('../../../assets/app/access/face_id.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '31%',
                height: 50,
                borderColor: '#3C434B',
                borderStyle: 'solid',
                borderWidth: 0.3,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                setTouchId(true);
              }}>
              <Image
                source={require('../../../assets/app/access/imprint.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
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
                    fontFamily: 'Poppins-Bold',
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
