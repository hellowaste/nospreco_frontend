import React, {useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BusinessOrders = ({navigation}) => {
  const [isPushNotificationsEnabled, setIsPushNotificationsEnabled] =
    useState(true);
  const togglePushNotificationsSwitch = () =>
    setIsPushNotificationsEnabled(previousState => !previousState);
  const [userGuideModal, setUserGuideModal] = useState(true);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 50,
      }}>
      <Modal animationType="slide" transparent={true} visible={userGuideModal}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '100%',
            height: '45%',
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: '#bebebe',
            top: '55%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingRight: 15,
              paddingLeft: '38%',
              paddingTop: 20,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
              }}>
              Guida all'app
            </Text>
            <TouchableOpacity
              onPress={() => {
                setUserGuideModal(false);
              }}>
              <MaterialCommunityIcons
                name="close"
                size={30}
                color={'#000000'}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#D9E0E8',
              height: 1,
              width: '90%',
              alignSelf: 'center',
              marginVertical: 10,
            }}
          />
          <Text
            style={{
              color: '#000000',
              fontSize: 18,
              fontWeight: '600',
              fontFamily: 'Poppins-Bold',
              textAlign: 'center',
            }}>
            Ordini
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
              paddingHorizontal: 10,
            }}>
            Visualizza e monitora gli ordini in corso e conclusi
            con tutte le info necessarie nella tabella, così da poter tenere
            sempre traccia di tutte le attività.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#F2FDF7',
                borderRadius: 10,
                width: '45%',
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Text
                style={{
                  color: '#21B861',
                  fontSize: 16,
                  
                  fontFamily: 'Poppins-Bold',
                  textAlign: 'center',
                  paddingVertical: 20,
                }}>
                Indietro
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#21B861',
                borderRadius: 10,
                width: '45%',
              }}
              onPress={() => {
                navigation.navigate('BusinessWallet');
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                  
                  fontFamily: 'Poppins-Bold',
                  textAlign: 'center',
                  paddingVertical: 20,
                }}>
                Avanti
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('BusinessNavigationMenu');
          }}>
          <MaterialCommunityIcons name="menu" size={20} color={'#000000'} />
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Menù
          </Text>
        </TouchableOpacity>
        <Image
          source={require('../../../assets/logo/app/logo.png')}
          style={{
            width: 40,
            height: 40,
          }}
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('BusinessNotificationCenter');
          }}>
          <MaterialCommunityIcons name="bell" size={20} color={'#000000'} />
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Notifiche
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#D9E0E8',
          width: '100%',
          marginVertical: 10,
        }}
      />
      <View
        style={{
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'Poppins-Bold',
          }}>
          Ordini
        </Text>
        <Text
          style={{
            color: '#3C434B',
            fontSize: 12,
            fontWeight: '400',
            fontFamily: 'Poppins-Regular',
          }}>
          Qui puoi vedere o modificare lo stato dei tuoi ordini, gli ordini sono
          modificabili al massimo fino a 2 ore prima dell'inizio del ritiro.
          Ricorda: L'utente per ritirare l'ordine deve mostrare il codice ordine
          e convalidare il ritiro in app, così la transazione si concluderà e la
          HeroBag potrà essere consegnata.
        </Text>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'Poppins-Bold',
            marginTop: 0,
          }}>
          Pianificazione odierna
        </Text>
        <Text
          style={{
            color: '#000000',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Bold',
            marginTop: 10,
          }}>
          Martedì, 15 Novembre
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '600',
              fontFamily: 'Poppins-Regular',
              marginTop: 10,
            }}>
            HeroBag disponibili?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#A3AEB4',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'Poppins-Bold',
                marginRight: 5,
              }}>
              No
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#d7d7d7'}}
              thumbColor={isPushNotificationsEnabled ? '#21B861' : '#D9E0E8'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglePushNotificationsSwitch}
              value={isPushNotificationsEnabled}
            />
            <Text
              style={{
                color: '#21B861',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'Poppins-Bold',
                marginLeft: 5,
              }}>
              SI
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              color: '#3C434B',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Orario di ritiro:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View
              style={{
                borderColor: '#D9E0E8',
                borderWidth: 0.5,
                borderRadius: 10,
                width: '45%',
                alignItems: 'center',
              }}>
              <TextInput
                placeholder="10:00"
                placeholderTextColor={'#000000'}
                style={{
                  color: '#000000',
                  fontSize: 16,
                }}
              />
            </View>
            <View
              style={{
                borderColor: '#D9E0E8',
                borderWidth: 0.5,
                borderRadius: 10,
                width: '45%',
                alignItems: 'center',
              }}>
              <TextInput
                placeholder="10:00"
                placeholderTextColor={'#000000'}
                style={{
                  color: '#000000',
                  fontSize: 16,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#CED5DD',
            height: 1,
            marginTop: 20,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#21B861',
              borderWidth: 1,
              height: 40,
              borderRadius: 10,
              width: '40%',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 12,
                fontWeight: '400',
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 8,
              }}>
              Ordini in corso
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#D9E0E8',
              borderWidth: 0.5,
              borderRadius: 10,
              width: '45%',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 12,
                fontWeight: '400',
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 8,
              }}>
              Ordini conclusi
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 20,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
              marginRight: 75,
            }}>
            ID Ordine
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
              marginRight: 75,
            }}>
            Stato
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
              marginRight: 75,
            }}>
            ID Bag
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
              marginRight: 75,
            }}>
            Cliente
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
              marginRight: 75,
            }}>
            Orario ritiro
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
              marginRight: 75,
            }}>
            Prezzo
          </Text>
        </ScrollView>
        <Text
          style={{
            color: '#000000',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
            textAlign: 'center',
          }}>
          Nessun ordine
        </Text>
      </View>
    </ScrollView>
  );
};

export default BusinessOrders;
