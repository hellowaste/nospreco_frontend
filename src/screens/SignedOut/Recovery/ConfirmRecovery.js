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

const ConfirmRecovery = ({navigation}) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: 50,
        justifyContent: 'space-between',
      }}>
      <Modal animationType="slide" transparent={true} visible={modalVisibility}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '25%',
            alignSelf: 'center',
            borderRadius: 8,
            borderColor: '#000000',
            borderWidth: 0.1,
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
              paddingLeft: '38%',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
              }}>
              Supporto
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
          <ScrollView>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'left',
                }}>
                Richieste di supporto
              </Text>
              <View
                style={{
                  borderColor: '#999da1',
                  borderWidth: 0.3,
                  borderRadius: 10,
                  marginTop: 2,
                }}>
                <TextInput
                  placeholder="Specificare il problema"
                  placeholderTextColor={'#000000'}
                />
              </View>
            </View>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
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
            </View>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'left',
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
                  placeholder="indirizzoemail@email.com"
                  placeholderTextColor={'#000000'}
                />
                <MaterialCommunityIcons
                  name="pencil"
                  size={20}
                  color={'#000000'}
                  style={{marginRight: 10}}
                />
              </View>
            </View>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'left',
                }}>
                Quale problema hai riscontrato?
              </Text>
              <View
                style={{
                  borderColor: '#999da1',
                  borderWidth: 0.3,
                  borderRadius: 10,
                  marginTop: 2,
                }}>
                <TextInput
                  placeholder="Spiega cosa è successo"
                  placeholderTextColor={'#000000'}
                />
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              width: '92%',
              marginHorizontal: 10,
              marginTop: 10,
              alignSelf: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                
                fontFamily: 'Poppins-Regular',
                textAlign: 'center',
                paddingVertical: 15,
              }}>
              Invia richiesta
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
              fontFamily: 'Poppins-Regular',
            }}>
            Indietro
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{
            backgroundColor: '#F2FDF7',
            borderRadius: 10,
            width: 100,
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <MaterialCommunityIcons
            name="email"
            size={45}
            color={'#21B861'}
            style={{padding: 20}}
          />
        </View>
        <View>
          <Text
            style={{
              color: '#000000',
              fontSize: 22,
              fontFamily: 'Poppins-Bold',
              marginTop: 15,
              textAlign: 'center',
            }}>
            Controlla la tua email
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
              marginTop: 15,
              textAlign: 'center',
              paddingHorizontal: 30,
            }}>
            Abbiamo inviato una email a indirizzoemail@mail.com con le
            istruzioni per ripristinare la tua password.
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: '#A3AEB4',
              borderRadius: 15,
              marginHorizontal: 20,
            }}
            onPress={() => {
              navigation.navigate('SetupPasswordScreen');
            }}>
            <Text
              style={{
                color: '#585F67',
                fontSize: 16,
                fontFamily: 'Poppins-Bold',
                paddingVertical: 15,
                textAlign: 'center',
              }}>
              Reinvia email (30 secondi)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: '#F2FDF7',
              borderRadius: 15,
              marginHorizontal: 20,
            }}
            onPress={() => {
              setModalVisibility(true);
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 16,
                fontFamily: 'Poppins-Bold',
                paddingVertical: 15,
                textAlign: 'center',
              }}>
              Hai bisogno di aiuto?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          paddingBottom: 40,
          paddingHorizontal: 50,
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 12,
            fontFamily: 'Poppins-Regular',
            textAlign: 'center',
          }}>
          Non hai ricevuto l'email? Controlla prima nella casella spam, se il
          problema persiste richiedi un'altra mail o contattaci.
        </Text>
      </View>
    </View>
  );
};

export default ConfirmRecovery;
