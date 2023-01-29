import React, {useState} from 'react';
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SetupPassword = ({navigation}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: 50,
      }}>
      <Modal animationType="slide" transparent={true} visible={modalVisibility}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '40%',
            alignSelf: 'center',
            borderRadius: 10,
            borderColor: '#000000',
            borderWidth: 0.3,
            paddingVertical: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              paddingBottom: 5,
              paddingLeft: '28%',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'poppins',
              }}>
              Richiesta completata
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setModalVisibility(false);
              }}>
              <MaterialCommunityIcons
                name="close"
                size={30}
                color={'#020905'}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#D9E0E8',
              height: 0.5,
              width: '90%',
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              backgroundColor: '#21B861',
              width: 100,
              height: 100,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <MaterialCommunityIcons name="check" size={60} color={'#ffffff'} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#08875D',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'poppins',
              }}>
              Password reimpostata
            </Text>
            <Text
              style={{
                color: '#3C434B',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'poppins',
              }}>
              {' '}
              correttamente.
            </Text>
          </View>
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'poppins',
              textAlign: 'center',
              paddingHorizontal: 50,
            }}>
            Esegui di nuovo il login con le nuove credenziali.
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              borderRadius: 10,
              marginHorizontal: 20,
              marginTop: 20,
            }}
            onPress={() => {
              setModalVisibility(false);
              navigation.navigate('AccessScreen');
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '800',
                fontFamily: 'poppins',
                textAlign: 'center',
                paddingVertical: 15,
              }}>
              Vai al login
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View>
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
      </View>
      <View style={{paddingHorizontal: 15, marginTop: 10}}>
        <Text
          style={{
            color: '#000000',
            fontSize: 22,
            fontWeight: '700',
            fontFamily: 'poppins',
          }}>
          Crea nuova password
        </Text>
        <Text
          style={{
            color: '#000000',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'poppins',
            paddingRight: 20,
          }}>
          La tua nuova password deve essere diversa da quella usata in
          precedenza.
        </Text>
        <View
          style={{
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'poppins',
            }}>
            Password
          </Text>
          <View
            style={{
              borderColor: '#aeb2b7',
              borderWidth: 0.3,
              borderRadius: 8,
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <TextInput
              placeholder="Inserisci la nuova password"
              placeholderTextColor={'#000000'}
              secureTextEntry={!passwordVisibility}
            />
            <TouchableOpacity
              onPress={() => {
                setPasswordVisibility(!passwordVisibility);
              }}>
              {passwordVisibility ? (
                <MaterialCommunityIcons
                  name="eye"
                  size={20}
                  color={'#21B861'}
                />
              ) : (
                <MaterialCommunityIcons
                  name="eye-off"
                  size={20}
                  color={'#21B861'}
                />
              )}
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 12,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Almeno 8 caratteri
          </Text>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'poppins',
              marginTop: 15,
            }}>
            Conferma Password
          </Text>
          <View
            style={{
              borderColor: '#aeb2b7',
              borderWidth: 0.3,
              borderRadius: 8,
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <TextInput
              placeholder="Reinserisci password"
              placeholderTextColor={'#000000'}
              secureTextEntry={!confirmPasswordVisibility}
            />
            <TouchableOpacity
              onPress={() => {
                setConfirmPasswordVisibility(!confirmPasswordVisibility);
              }}>
              {confirmPasswordVisibility ? (
                <MaterialCommunityIcons
                  name="eye"
                  size={20}
                  color={'#21B861'}
                />
              ) : (
                <MaterialCommunityIcons
                  name="eye-off"
                  size={20}
                  color={'#21B861'}
                />
              )}
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 12,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Le password devono coincidere
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 25,
          backgroundColor: '#21B861',
          marginHorizontal: 15,
          borderRadius: 12,
        }}
        onPress={() => {
          setModalVisibility(true);
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
            fontWeight: '700',
            fontFamily: 'poppins',
            textAlign: 'center',
            paddingVertical: 15,
          }}>
          Reset password
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetupPassword;
