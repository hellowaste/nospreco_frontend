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

const RegisterScreen = ({navigation}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(true);
  const [termsAcceptance, setTermsAcceptance] = useState(true);
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
            navigation.navigate('AccessScreen');
          }}>
          <Text
            style={{
              color: '#21B861',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Bold',
              alignSelf: 'flex-end',
              paddingRight: 30,
            }}>
            Accedi
          </Text>
        </TouchableOpacity>
        <View style={{paddingLeft: 10}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 22,
              fontFamily: 'Poppins-Bold',
              
            }}>
            Hello Waste
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 22,
              fontFamily: 'Poppins-Bold',
              
            }}>
            ti dà il benvenuto!
          </Text>
          <View>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 14,
                fontWeight: '500',
                paddingRight: 90,
                marginTop: 5,
              }}>
              Crea il tuo profilo ed alleati con noi per combattere lo spreco!
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          paddingHorizontal: 12,
        }}>
        <View style={{marginTop: 20}}>
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
          <View style={{marginTop: 10}}>
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
                paddingRight: 10
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
          <View style={{marginTop: 16}}>
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
                placeholder="Ripeti password"
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
                  setConfirmPasswordVisibility(!confirmPasswordVisibility);
                }}>
                {confirmPasswordVisibility === true ? (
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
          style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
          {termsAcceptance === true ? (
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
                setTermsAcceptance(!termsAcceptance);
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
                borderWidth: 0.3,
                borderColor: '#000000',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                setTermsAcceptance(!termsAcceptance);
              }}
            />
          )}
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5}}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
              }}>
              Accetto i{' '}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
                
              }}>
              Termini e Condizioni
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
              }}>
              {' '}
              e{' '}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
                
              }}>
              Privacy Policy
            </Text>
          </View>
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
              Oppure registrati con:
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
        <View style={{width: '100%', alignItems: 'center', marginTop: 50}}>
          <TouchableOpacity
            style={{backgroundColor: '#21B861', width: '90%', borderRadius: 10}}
            onPress={() => {}}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontFamily: 'Poppins-Bold',
                marginTop: 4,
                textAlign: 'center',
                paddingVertical: 12,
              }}>
              Crea account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;
