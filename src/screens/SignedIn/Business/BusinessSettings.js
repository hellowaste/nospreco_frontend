import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BusinessSettings = ({navigation}) => {
  const [section, setSection] = useState(1);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 50,
      }}>
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
          Impostazioni
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 15,
          marginTop: 10,
        }}>
        {section == 1 ? (
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#21B861',
              borderWidth: 0.5,
              borderRadius: 10,
              width: '30%',
            }}
            onPress={() => {
              setSection(1);
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                textAlign: 'center',
                paddingVertical: 10,
              }}>
              Store
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#D9E0E8',
              borderWidth: 0.5,
              borderRadius: 10,
              width: '30%',
            }}
            onPress={() => {
              setSection(1);
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                textAlign: 'center',
                paddingVertical: 10,
              }}>
              Store
            </Text>
          </TouchableOpacity>
        )}
        {section == 2 ? (
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#21B861',
              borderWidth: 0.5,
              borderRadius: 10,
              width: '30%',
            }}
            onPress={() => {
              setSection(2);
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                textAlign: 'center',
                paddingVertical: 10,
              }}>
              Notifiche
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#D9E0E8',
              borderWidth: 0.5,
              borderRadius: 10,
              width: '30%',
            }}
            onPress={() => {
              setSection(2);
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                textAlign: 'center',
                paddingVertical: 10,
              }}>
              Notifiche
            </Text>
          </TouchableOpacity>
        )}
        {section == 3 ? (
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#21B861',
              borderWidth: 0.5,
              borderRadius: 10,
              width: '30%',
            }}
            onPress={() => {
              setSection(3);
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                textAlign: 'center',
                paddingVertical: 10,
              }}>
              Account
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#D9E0E8',
              borderWidth: 0.5,
              borderRadius: 10,
              width: '30%',
            }}
            onPress={() => {
              setSection(3);
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                textAlign: 'center',
                paddingVertical: 10,
              }}>
              Account
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 15,
          marginBottom: 180,
        }}>
        {section == 1 ? <StoreSettings /> : null}
        {section == 2 ? <NotificationSettings /> : null}
        {section == 3 ? <AccountSettings /> : null}
      </View>
    </ScrollView>
  );
};

const StoreSettings = () => {
  return (
    <View>
      <Text
        style={{
          color: '#000000',
          fontSize: 18,
          fontWeight: '600',
          fontFamily: 'Poppins-Regular',
          marginTop: 20,
        }}>
        Quando sei aperto?
      </Text>
      <Text
        style={{
          color: '#3C434B',
          fontSize: 12,
          fontWeight: '600',
          fontFamily: 'Poppins-Regular',
          marginTop: 10,
        }}>
        Durante i giorni di apertura, i clienti potranno prenotare i prodotti
        invenduti del tuo store e ritirarli nell’orario da te stabilito. Questa
        impostazione può essere sempre modificata.
      </Text>
      <View style={{marginTop: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#21B861',
              borderWidth: 0.5,
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 5,
            }}
          />
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              marginLeft: 10,
            }}>
            Lunedì
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 5,
            }}>
            <MaterialCommunityIcons name="check" color={'#ffffff'} size={18} />
          </TouchableOpacity>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              marginLeft: 10,
            }}>
            Martedì
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 5,
            }}>
            <MaterialCommunityIcons name="check" color={'#ffffff'} size={18} />
          </TouchableOpacity>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              marginLeft: 10,
            }}>
            Mercoledì
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 5,
            }}>
            <MaterialCommunityIcons name="check" color={'#ffffff'} size={18} />
          </TouchableOpacity>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              marginLeft: 10,
            }}>
            Giovedì
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 5,
            }}>
            <MaterialCommunityIcons name="check" color={'#ffffff'} size={18} />
          </TouchableOpacity>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              marginLeft: 10,
            }}>
            Venerdì
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 5,
            }}>
            <MaterialCommunityIcons name="check" color={'#ffffff'} size={18} />
          </TouchableOpacity>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              marginLeft: 10,
            }}>
            Sabato
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 5,
            }}>
            <MaterialCommunityIcons name="check" color={'#ffffff'} size={18} />
          </TouchableOpacity>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              marginLeft: 10,
            }}>
            Domenica
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: '#000000',
          fontSize: 16,
          fontWeight: '600',
          fontFamily: 'Poppins-Regular',
          marginTop: 20,
        }}>
        Informazioni sullo store
      </Text>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          Nome Store
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B5B5B5',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder={'Campo precompilato'}
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons name="pencil" size={20} color={'#000000'} />
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          Indirizzo Store
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B5B5B5',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder={'Campo precompilato'}
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons name="pencil" size={20} color={'#000000'} />
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          Ragione sociale
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B5B5B5',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder={'Campo precompilato'}
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons name="pencil" size={20} color={'#000000'} />
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          P. IVA
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B5B5B5',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder={'Campo precompilato'}
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons name="pencil" size={20} color={'#000000'} />
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          Numero di telefono
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B5B5B5',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder={'Campo precompilato'}
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons name="pencil" size={20} color={'#000000'} />
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          Email
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B5B5B5',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder={'Campo precompilato'}
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons name="pencil" size={20} color={'#000000'} />
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          Logo Store
        </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="pencil"
            size={20}
            color={'#000000'}
            style={{
              alignSelf: 'flex-end',
            }}
          />
          <Image
            source={require('../../../assets/logo/app/logo.png')}
            style={{
              width: 50,
              height: 50,
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          Logo Store
        </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="pencil"
            size={20}
            color={'#000000'}
            style={{
              alignSelf: 'flex-end',
            }}
          />
          <Image
            source={require('../../../assets/app/store/img-1.png')}
            style={{
              width: '90%',
              height: 120,
              alignSelf: 'center',
              borderRadius: 10,
              marginTop: 10,
            }}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: '#000000',
          fontSize: 16,
          fontWeight: '600',
          fontFamily: 'Poppins-Regular',
          marginTop: 20,
        }}>
        Informazioni sul referente
      </Text>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          Nome e Cognome
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B5B5B5',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder={'Campo precompilato'}
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons name="pencil" size={20} color={'#000000'} />
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          Numero di telefono
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B5B5B5',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder={'Campo precompilato'}
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons name="pencil" size={20} color={'#000000'} />
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          IBAN Persona Giuridica
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B5B5B5',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder={'Campo precompilato'}
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons name="pencil" size={20} color={'#000000'} />
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#21B861',
          width: '100%',
          borderRadius: 10,
          marginTop: 20,
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
            
            fontFamily: 'Poppins-Regular',
            textAlign: 'center',
            paddingVertical: 15,
          }}>
          Salva dettagli
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const NotificationSettings = () => {
  const [isPushNotificationsEnabled, setIsPushNotificationsEnabled] =
    useState(true);
  const togglePushNotificationsSwitch = () =>
    setIsPushNotificationsEnabled(previousState => !previousState);
  return (
    <View
      style={{
        marginTop: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
            fontWeight: '400',
            fontFamily: 'Poppins-Regular',
          }}>
          Notifiche Push
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
          backgroundColor: '#D9E0E8',
          height: 1,
          marginVertical: 20,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Conferma ordine
          </Text>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 12,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Email inviata per ogni ordine effettuato.
          </Text>
        </View>
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
          backgroundColor: '#D9E0E8',
          height: 1,
          marginVertical: 20,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Cancellazione ordine
          </Text>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 12,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Email inviata se un ordine
          </Text>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 12,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            viene cancellato prima del ritiro.
          </Text>
        </View>
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
          backgroundColor: '#D9E0E8',
          height: 1,
          marginVertical: 20,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Nuova recensione
          </Text>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 12,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Email inviata ogni volta che un utente
          </Text>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 12,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            pubblica una recensione sul tuo store.
          </Text>
        </View>
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
          backgroundColor: '#D9E0E8',
          height: 1,
          marginVertical: 20,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Newsletter
          </Text>
        </View>
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
          backgroundColor: '#D9E0E8',
          height: 1,
          marginVertical: 20,
        }}
      />
      <View style={{marginTop: 30}}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          Email store associata:
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B5B5B5',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder={'Campo precompilato'}
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons name="pencil" size={20} color={'#000000'} />
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#21B861',
          width: '100%',
          borderRadius: 10,
          marginTop: 20,
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
            
            fontFamily: 'Poppins-Regular',
            textAlign: 'center',
            paddingVertical: 15,
          }}>
          Salva modifiche
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const AccountSettings = () => {
  return (
    <View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          Nome Utente
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B5B5B5',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder={'@NomeUtente'}
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons name="pencil" size={20} color={'#000000'} />
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          Email
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B5B5B5',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder={'indirizzoemail@email.com'}
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons name="pencil" size={20} color={'#000000'} />
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          Numero di telefono
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B5B5B5',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder={'+39 333 3333333'}
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons name="pencil" size={20} color={'#000000'} />
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          Password
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B5B5B5',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder={'**********'}
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons name="pencil" size={20} color={'#000000'} />
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#21B861',
          width: '100%',
          borderRadius: 10,
          marginTop: 20,
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
            
            fontFamily: 'Poppins-Regular',
            textAlign: 'center',
            paddingVertical: 15,
          }}>
          Salva modifiche
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BusinessSettings;
