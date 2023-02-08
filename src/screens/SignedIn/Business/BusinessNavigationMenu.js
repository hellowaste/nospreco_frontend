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
import {logout} from '../../../state/features/user';

const BusinessNavigationMenu = ({navigation}) => {
  const [supportModal, setSupportModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
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
            height: '35%',
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: '#bebebe',
            top: '65%',
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
                fontFamily: 'poppins',
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
              fontFamily: 'poppins',
              textAlign: 'center',
            }}>
            Con questo veloce tour avrai una panoramica generale
            dell’applicazione.
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
                backgroundColor: '#CED5DD',
                borderRadius: 10,
                width: '45%',
              }}
              onPress={() => {
                setUserGuideModal(false);
              }}>
              <Text
                style={{
                  color: '#8C979D',
                  fontSize: 16,
                  fontWeight: '700',
                  fontFamily: 'poppins',
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
                navigation.navigate('BusinessDay');
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                  fontWeight: '700',
                  fontFamily: 'poppins',
                  textAlign: 'center',
                  paddingVertical: 20,
                }}>
                Avanti
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={supportModal}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '25%',
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
                fontFamily: 'poppins',
              }}>
              Supporto
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setSupportModal(false);
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
                  fontFamily: 'poppins',
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
                  fontFamily: 'poppins',
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
                  fontFamily: 'poppins',
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
                  fontFamily: 'poppins',
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
                fontWeight: '700',
                fontFamily: 'poppins',
                textAlign: 'center',
                paddingVertical: 15,
              }}>
              Invia richiesta
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={logoutModal}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '25%',
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
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'poppins',
              }}>
              Logout
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setLogoutModal(false);
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
                fontWeight: '600',
                fontFamily: 'poppins',
                paddingHorizontal: 50,
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
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'poppins',
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
              setLogoutModal(false);
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'poppins',
                textAlign: 'center',
                paddingVertical: 15,
              }}>
              No, annulla
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
            navigation.navigate('BusinessDay');
          }}>
          <MaterialCommunityIcons name="close" size={20} color={'#000000'} />
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'poppins',
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
          }}>
          <MaterialCommunityIcons name="bell" size={20} color={'#000000'} />
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'poppins',
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
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/app/store/img-1.png')}
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              marginRight: 10,
            }}
          />
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Nome Store
          </Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="chevron-right"
            size={30}
            color={'#000000'}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}
          onPress={() => {
            navigation.navigate('BusinessDay');
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="view-dashboard"
              size={20}
              color={'#000000'}
            />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'poppins',
                marginLeft: 5,
              }}>
              La tua giornata
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            backgroundColor: '#D9E0E8',
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}
          onPress={() => {
            navigation.navigate('BusinessWeek');
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="clock" size={20} color={'#000000'} />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'poppins',
                marginLeft: 5,
              }}>
              La tua settimana
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            backgroundColor: '#D9E0E8',
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}
          onPress={() => {
            navigation.navigate('BusinessOrders');
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
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
                fontFamily: 'poppins',
                marginLeft: 5,
              }}>
              Ordini
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            backgroundColor: '#D9E0E8',
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}
          onPress={() => {
            navigation.navigate('BusinessWallet');
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="wallet" size={20} color={'#000000'} />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'poppins',
                marginLeft: 5,
              }}>
              Wallet
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            backgroundColor: '#D9E0E8',
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}
          onPress={() => {
            navigation.navigate('BusinessStatistics');
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="chart-box"
              size={20}
              color={'#000000'}
            />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'poppins',
                marginLeft: 5,
              }}>
              Statistiche
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            backgroundColor: '#D9E0E8',
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}
          onPress={() => {
            navigation.navigate('BusinessSettings');
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="cog" size={20} color={'#000000'} />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'poppins',
                marginLeft: 5,
              }}>
              Impostazioni
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            backgroundColor: '#D9E0E8',
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="share-variant"
              size={20}
              color={'#000000'}
            />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'poppins',
                marginLeft: 5,
              }}>
              Condividi
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            backgroundColor: '#D9E0E8',
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}
          onPress={() => {
            setSupportModal(true);
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="help-circle"
              size={20}
              color={'#000000'}
            />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'poppins',
                marginLeft: 5,
              }}>
              Supporto
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            backgroundColor: '#D9E0E8',
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}
          onPress={() => {
            setUserGuideModal(true);
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="lightbulb-on"
              size={20}
              color={'#000000'}
            />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'poppins',
                marginLeft: 5,
              }}>
              Guida all'app
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            backgroundColor: '#D9E0E8',
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="repeat" size={20} color={'#000000'} />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'poppins',
                marginLeft: 5,
              }}>
              Passa all'app Clienti
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            backgroundColor: '#D9E0E8',
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 10,
          }}
          onPress={() => {
            setLogoutModal(true);
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="logout" size={20} color={'#000000'} />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'poppins',
                marginLeft: 5,
              }}>
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            backgroundColor: '#D9E0E8',
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 80,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default BusinessNavigationMenu;
