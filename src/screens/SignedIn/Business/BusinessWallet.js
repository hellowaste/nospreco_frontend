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

const BusinessWallet = ({navigation}) => {
  const [infoModal, setInfoModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  const [confirmWithdrawalModal, setConfirmWithdrawModal] = useState(false);
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
            Wallet
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
            Qui potrai tenere sotto controllo l’area finanziaria relativa alle
            tue vendite, infatti potrai visualizzare tutti i dettagli del tuo
            saldo e del saldo disponibile per un prelievo. Sempre qui, troverai
            lo storico dei prelievi da te effettuati.
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
                navigation.navigate('BusinessStatistics');
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmWithdrawalModal}>
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
              paddingBottom: 10,
              paddingLeft: '25%',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
              }}>
              Richiesta completata
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setConfirmWithdrawModal(false);
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
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
              backgroundColor: '#21B861',
              marginVertical: 10,
            }}>
            <MaterialCommunityIcons
              name="check"
              size={50}
              color={'#ffffff'}
              style={{
                margin: 30,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                marginTop: 10,
              }}>
              Prelievo{' '}
            </Text>
            <Text
              style={{
                color: '#3C434B',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                marginTop: 10,
              }}>
              completato correttamente.
            </Text>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={infoModal}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '55%',
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
              paddingBottom: 10,
              paddingLeft: '30%',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
              }}>
              Saldo disponibile
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setInfoModal(false);
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
          <Text
            style={{
              color: '#3C434B',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Il saldo disponibile corrisponde al totale delle HeroBag vendute
            detratto per le nostre commissioni
          </Text>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={withdrawModal}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '30%',
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
              paddingBottom: 10,
              paddingLeft: '40%',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
              }}>
              Prelievo
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setWithdrawModal(false);
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
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
              marginTop: 10,
              marginLeft: 10,
            }}>
            IBAN
          </Text>
          <View
            style={{
              borderRadius: 10,
              borderColor: '#A3AEB4',
              borderWidth: 0.5,
              marginHorizontal: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginTop: 5,
            }}>
            <TextInput
              placeholder="Campo precompilato       "
              placeholderTextColor={'#000000'}
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
              }}
            />
            <MaterialCommunityIcons name="pencil" size={20} color={'#000000'} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 16,
                
                fontFamily: 'Poppins-Bold',
                marginTop: 10,
                marginLeft: 10,
              }}>
              Saldo disponibile:
            </Text>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 18,
                
                fontFamily: 'Poppins-Bold',
                marginTop: 10,
                marginRight: 10,
              }}>
              € 4.000,86
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#F9FAFB',
              borderRadius: 10,
              width: '70%',
              alignSelf: 'center',
              marginTop: 25,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TextInput
              placeholder="€ 500,00   "
              placeholderTextColor={'#000000'}
              style={{
                color: '#000000',
                fontSize: 19,
                fontFamily: 'Poppins-Bold',
                textAlign:'left',
                marginTop: 10,
                marginLeft: 5,
                marginRight: 5,
              }}
            />
            <MaterialCommunityIcons
              name="close-circle"
              size={20}
              color={'#A3AEB4'}
              style={{
                marginLeft: 60,
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              borderRadius: 10,
              width: '90%',
              alignSelf: 'center',
              marginVertical: 15,
            }}
            onPress={() => {
              setWithdrawModal(false);
              setConfirmWithdrawModal(true);
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 15,
              }}>
              Conferma prelievo
            </Text>
          </TouchableOpacity>
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
          Wallet
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#F2FDF7',
          borderRadius: 10,
          width: '90%',
          alignSelf: 'center',
          marginTop: 10,
          paddingVertical: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginVertical: 10,
          }}>
          <Text
            style={{
              color: '#3C434B',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              marginRight: 10,
            }}>
            Saldo disponibile
          </Text>
          <TouchableOpacity
            onPress={() => {
              setInfoModal(!infoModal);
            }}>
            <MaterialCommunityIcons
              name="information"
              size={20}
              color={'#3C434B'}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: '#000000',
            fontSize: 22,
            
            fontFamily: 'Poppins-Bold',
            textAlign: 'center',
          }}>
          € 49,50
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#21B861',
            borderRadius: 10,
            width: '80%',
            alignSelf: 'center',
            marginTop: 20,
          }}
          onPress={() => {
            setWithdrawModal(true);
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              
              fontFamily: 'Poppins-Bold',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            Preleva
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#3C434B',
            fontSize: 10,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
            paddingHorizontal: 35,
            marginTop: 5,
            marginBottom: 20,
          }}>
          Ti ricordiamo che la funzione Prelievo è usabile per un massimo di una volta al mese per un importo minimo di 39 euro.
(I primi 39 euro saranno a copertura della quota annua)
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'Poppins-Bold',
          }}>
          Dettagli del tuo saldo
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
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            HeroBag vendute
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            € 49,50
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Commissioni
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            € 18,50
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Residuo quota annua
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            € 0,00 su € 39,00
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'Poppins-Bold',
          }}>
          Storico prelievi
        </Text>
        <Text
          style={{
            color: '#000000',
            fontSize: 14,
            fontWeight: '400',
            fontFamily: 'Poppins-Regular',
            marginTop: 10,
          }}>
          Prelievo € 100,00 in data 20/05/2022
        </Text>
        <Text
          style={{
            color: '#000000',
            fontSize: 14,
            fontWeight: '400',
            fontFamily: 'Poppins-Regular',
          }}>
          Prelievo € 48,00 in data 28/04/2022
        </Text>
      </View>
    </ScrollView>
  );
};

export default BusinessWallet;
