import React, {useState} from 'react';
import {
  I18nManager,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {logout} from '../../../state/features/user';
import {useDispatch} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsScreen = ({navigation}) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [logoutModalVisibility, setLogoutModalVisibility] = useState(false);
  const dispatch = useDispatch();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#21B861',
        paddingTop: 50,
        flex: 1,
      }}>
      <Modal animationType="slide" transparent={true} visible={modalVisibility}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '30%',
            alignSelf: 'center',
            borderRadius: 8,
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
              paddingLeft: '38%',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
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
                  marginTop: 1.5,
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
                
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 15,
              }}>
              Invia richiesta
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutModalVisibility}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '45%',
            alignSelf: 'center',
            borderRadius: 8,
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
              paddingLeft: '40%',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
              }}>
              Logout
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setLogoutModalVisibility(false);
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
              marginVertical: 10,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 18,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
                paddingHorizontal: 30,
                textAlign: 'center',
              }}>
              Sei sicuro di voler effettuare il logout?
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#D9E0E8',
              height: 0.5,
              width: '90%',
              alignSelf: 'center',
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#E02D3C',
              width: '92%',
              marginHorizontal: 10,
              marginTop: 10,
              alignSelf: 'center',
              borderRadius: 10,
            }}
            onPress={() => {
              dispatch(logout());
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 15,
              }}>
              Sì, esci da questo account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#F2FDF7',
              width: '92%',
              marginHorizontal: 10,
              marginTop: 10,
              alignSelf: 'center',
              borderRadius: 10,
            }}
            onPress={() => {
              setLogoutModalVisibility(false);
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 16,
                
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 15,
              }}>
              No, annulla
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#F2FDF7',
            borderRadius: 10,
            alignSelf: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 20,
          }}
          onPress={() => {
            setModalVisibility(true);
          }}>
          <MaterialCommunityIcons
            name="help-circle"
            size={20}
            color={'#21B861'}
            style={{paddingLeft: 20}}
          />
          <Text
            style={{
              color: '#21B861',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              paddingVertical: 12,
              paddingRight: 20,
              marginLeft: 5,
            }}>
            Supporto
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            color: '#000000',
            fontSize: 22,
            
            fontFamily: 'Poppins-Bold',
            paddingLeft: 20,
          }}>
          Ciao @nomeutente
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 10,
          height: '100%',
          width: '100%',
          paddingTop: 30,
          marginTop: 30,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginBottom: 15,
          }}
          onPress={() => {
            navigation.navigate('Account');
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="account-circle"
              size={20}
              color={'#000000'}
            />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
                marginLeft: 10,
              }}>
              Il mio account
            </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={'#000000'}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#D9E0E8',
            height: 1,
            marginBottom: 15,
            marginHorizontal: 15,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginBottom: 15,
          }}
          onPress={() => {
            navigation.navigate('PaymentMethods');
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="credit-card-outline"
              size={20}
              color={'#000000'}
            />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
                marginLeft: 10,
              }}>
              Metodi di pagamento
            </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={'#000000'}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#D9E0E8',
            height: 1,
            marginBottom: 15,
            marginHorizontal: 15,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginBottom: 15,
          }}
          onPress={() => {
            navigation.navigate('UserPreferences');
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="heart" size={20} color={'#000000'} />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
                marginLeft: 10,
              }}>
              Preferenze
            </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={'#000000'}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#D9E0E8',
            height: 1,
            marginBottom: 15,
            marginHorizontal: 15,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginBottom: 15,
          }}
          onPress={() => {
            navigation.navigate('AppNotifications');
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="bell" size={20} color={'#000000'} />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
                marginLeft: 10,
              }}>
              Notifiche
            </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={'#000000'}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#D9E0E8',
            height: 1,
            marginBottom: 15,
            marginHorizontal: 15,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginBottom: 15,
          }}
          onPress={() => {
            navigation.navigate('Ordini');
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="shopping"
              size={20}
              color={'#000000'}
            />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
                marginLeft: 10,
              }}>
              I miei ordini
            </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={'#000000'}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#D9E0E8',
            height: 1,
            marginBottom: 30,
            marginHorizontal: 15,
          }}
        />
        <View
          style={{
            backgroundColor: '#D9E0E8',
            height: 1,
            marginBottom: 15,
            marginHorizontal: 15,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginBottom: 15,
          }}
          onPress={() => {
            navigation.navigate('Business');
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="store-plus"
              size={20}
              color={'#000000'}
            />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
                marginLeft: 10,
              }}>
              Hai un negozio?
            </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={'#000000'}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#D9E0E8',
            height: 1,
            marginBottom: 15,
            marginHorizontal: 15,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginBottom: 15,
          }}
          onPress={() => {
            setLogoutModalVisibility(true);
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="logout" size={20} color={'#000000'} />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
                marginLeft: 10,
              }}>
              Logout
            </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={'#000000'}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#D9E0E8',
            height: 1,
            marginBottom: 30,
            marginHorizontal: 15,
          }}
        />
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#F2FDF7',
            marginHorizontal: 15,
            marginBottom: 80,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <MaterialCommunityIcons
            name="piggy-bank"
            size={50}
            color={'#21B861'}
            style={{margin: 20}}
          />
          <View>
            <Text
              style={{
                color: '#3C434B',
                fontSize: 12,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
              }}>
              Denaro risparmiato
            </Text>
            <Text
              style={{
                color: '#020905',
                fontSize: 18,
                fontWeight: '600',
                fontFamily: 'Poppins-Bold',
              }}>
              € 56,35
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
