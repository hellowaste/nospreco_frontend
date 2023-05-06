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

const BusinessDay = ({navigation}) => {
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
              paddingLeft: '40%',
              paddingTop: 20,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
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
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
            }}>
            La tua giornata
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
            In questa schermata potrai gestire in totale autonomia le vendite
            della giornata odierna, qui infatti puoi inserire o modificare le
            Hero Bag in vendita e monitore o modificare gli ordini del giorno.
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
                  
                  fontFamily: 'Poppins-Regular',
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
                navigation.navigate('BusinessWeek');
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                  
                  fontFamily: 'Poppins-Regular',
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
            fontFamily: 'Poppins-Regular',
          }}>
          La tua giornata
        </Text>
        <Text
          style={{
            color: '#000000',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
            marginTop: 10,
          }}>
          Martedì, 15 Novembre
        </Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#21B861',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Ritiro disponibile
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#d7d7d7'}}
            thumbColor={isPushNotificationsEnabled ? '#21B861' : '#D9E0E8'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={togglePushNotificationsSwitch}
            value={isPushNotificationsEnabled}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#A3AEB4',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Hero Bag in vendita
          </Text>
          <Text
            style={{
              color: '#21B861',
              fontSize: 22,
              
              fontFamily: 'Poppins-Regular',
            }}>
            5
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#A3AEB4',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Orario di ritiro
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderRadius: 12,
                borderColor: '#D9E0E8',
                borderWidth: 0.5,
              }}>
              <TextInput
                placeholder="dalle 13:00"
                placeholderTextColor={'#000000'}
                style={{
                  paddingHorizontal: 10,
                }}
              />
            </View>
            <View
              style={{
                borderRadius: 12,
                borderColor: '#D9E0E8',
                borderWidth: 0.5,
                marginLeft: 5,
              }}>
              <TextInput
                placeholder="alle 15:00"
                placeholderTextColor={'#000000'}
                style={{
                  paddingHorizontal: 10,
                }}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#21B861',
            width: '90%',
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 15,
          }}
          onPress={() => {
            navigation.navigate('BusinessAddBag');
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
              paddingVertical: 15,
            }}>
            Aggiungi nuova Hero Bag
          </Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#CED5DD',
            height: 1,
            width: '100%',
            alignSelf: 'center',
            marginVertical: 20,
          }}
        />
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'Poppins-Regular',
          }}>
          Modifica Hero Bag esistenti
        </Text>
        <Text
          style={{
            color: '#3C434B',
            fontSize: 12,
            fontWeight: '400',
            fontFamily: 'Poppins-Regular',
          }}>
          Per modificare una Hero Bag esistente, clicca sul suo ID Bag. Per
          eliminare una Hero Bag dal catalogo, clicca sull’icona della “X”
          rossa.
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                marginRight: 75,
                marginLeft: 50,
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
              Categoria
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                marginRight: 75,
              }}>
              Tipologia
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                marginRight: 75,
              }}>
              Descrizione contenuto
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                marginRight: 75,
              }}>
              Quantità
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                marginRight: 75,
              }}>
              Valore reale Hero Bag
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                marginRight: 75,
              }}>
              Prezzo in app
            </Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BusinessUpdateBag');
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '600',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
              marginTop: 20,
            }}>
            Nessuna Bag
          </Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#CED5DD',
            height: 1,
            width: '100%',
            alignSelf: 'center',
            marginVertical: 20,
          }}
        />
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'Poppins-Regular',
          }}>
          Gestione ordini
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
          Hero Bag bag potrà essere consegnata.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 50,
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#21B861',
              borderRadius: 10,
              borderWidth: 0.5,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                paddingVertical: 10,
                paddingHorizontal: 30,
              }}>
              Ordini in corso
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#D9E0E8',
              borderRadius: 10,
              borderWidth: 0.5,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                paddingVertical: 10,
                paddingHorizontal: 30,
              }}>
              Ordini conclusi
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                marginRight: 75,
                marginLeft: 50,
              }}>
              ID ordine
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
          </View>
        </ScrollView>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'Poppins-Regular',
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 100,
          }}>
          Nessun ordine
        </Text>
      </View>
    </ScrollView>
  );
};

export default BusinessDay;
