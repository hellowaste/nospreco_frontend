import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BusinessRegisterSummary = ({navigation}) => {
  const [supportModal, setSupportModal] = useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 50,
        paddingHorizontal: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            color={'#000000'}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#000000',
            fontSize: 22,
            fontWeight: '700',
            fontFamily: 'poppins',
          }}>
          Registra il tuo store
        </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="help-circle"
            size={30}
            color={'#21B861'}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 12,
            fontWeight: '400',
            fontFamily: 'poppins',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Completa questa procedura per richiedere l’accesso come venditore e
          dire addio agli sprechi del tuo store!
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="numeric-1-circle"
            size={40}
            color={'#A3AEB4'}
          />
          <Text
            style={{
              color: '#A3AEB4',
              fontSize: 12,
              fontWeight: '400',
              fontFamily: 'poppins',
              textAlign: 'center',
            }}>
            Informazioni negozio
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="numeric-2-circle"
            size={40}
            color={'#A3AEB4'}
          />
          <Text
            style={{
              color: '#A3AEB4',
              fontSize: 12,
              fontWeight: '400',
              fontFamily: 'poppins',
              textAlign: 'center',
            }}>
            Informazioni referente
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="numeric-3-circle"
            size={40}
            color={'#21B861'}
          />
          <Text
            style={{
              color: '#21B861',
              fontSize: 12,
              fontWeight: '400',
              fontFamily: 'poppins',
              textAlign: 'center',
            }}>
            Verifica informazioni
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#D9E0E8',
          height: 1,
          width: '100%',
          marginTop: 10,
        }}
      />
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'poppins',
          }}>
          Controlla le informazioni
        </Text>
        <Text
          style={{
            marginTop: 10,
            color: '#000000',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'poppins',
          }}>
          Informazioni sullo store
        </Text>
        <View
          style={{
            marginTop: 10,
          }}>
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Nome Store
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D9E0E8',
              marginVertical: 5,
            }}
          />
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Indirizzo
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D9E0E8',
              marginVertical: 5,
            }}
          />
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Città
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D9E0E8',
              marginVertical: 5,
            }}
          />
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Provincia
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D9E0E8',
              marginVertical: 5,
            }}
          />
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Codice postale
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D9E0E8',
              marginVertical: 5,
            }}
          />
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Ragione sociale
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D9E0E8',
              marginVertical: 5,
            }}
          />
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            P. IVA
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D9E0E8',
              marginVertical: 5,
            }}
          />
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Codice SDI
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D9E0E8',
              marginVertical: 5,
            }}
          />
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            PEC
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D9E0E8',
              marginVertical: 5,
            }}
          />
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Numero di telefono
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D9E0E8',
              marginVertical: 5,
            }}
          />
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Email
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D9E0E8',
              marginVertical: 5,
            }}
          />
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Categoria
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D9E0E8',
              marginVertical: 5,
            }}
          />
          <Text
            style={{
              marginTop: 10,
              color: '#000000',
              fontSize: 16,
              fontWeight: '600',
              fontFamily: 'poppins',
            }}>
            Informazioni sul referente
          </Text>
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Nome e Cognome
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D9E0E8',
              marginVertical: 5,
            }}
          />
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Numero di telefono
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D9E0E8',
              marginVertical: 5,
            }}
          />
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            IBAN Persona Giuridica
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D9E0E8',
              marginVertical: 5,
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'poppins',
            }}>
            Accetto i{' '}
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'poppins',
              textDecorationLine: 'underline',
            }}>
            Termini e Condizioni{' '}
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'poppins',
            }}>
            e{' '}
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'poppins',
              textDecorationLine: 'underline',
            }}>
            Privacy Policy
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#21B861',
            borderRadius: 10,
            marginTop: 30,
            marginBottom: 80,
          }}
          onPress={() => {
            navigation.navigate('BusinessWeekSettings');
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
            Completa registrazione
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BusinessRegisterSummary;
