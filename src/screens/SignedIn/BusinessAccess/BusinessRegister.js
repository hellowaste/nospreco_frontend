import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BusinessRegister = ({navigation}) => {
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
        <TouchableOpacity>
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
            
            fontFamily: 'Poppins-Regular',
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
            fontFamily: 'Poppins-Regular',
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
            color={'#21B861'}
          />
          <Text
            style={{
              paddingTop: 2,
              color: '#21B861',
              fontSize: 14,
              lineHeight: 12,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
            }}>
            Informazioni
          </Text>
          <Text
            style={{
              color: '#21B861',
              fontSize: 14,
              lineHeight: 12,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
            }}>
           negozio
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
              paddingTop: 2,
              color: '#A3AEB4',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
            }}>
            Informazioni
          </Text>
          <Text
            style={{
              color: '#A3AEB4',
              fontSize: 14,
              lineHeight: 12,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
            }}>
           referente
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="numeric-3-circle"
            size={40}
            color={'#A3AEB4'}
          />
          <Text
            style={{
              paddingTop: 2,
              color: '#A3AEB4',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
            }}>
            Verifica 
          </Text>
          <Text
            style={{
              color: '#A3AEB4',
              fontSize: 14,
              lineHeight: 12,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
            }}>
             informazioni
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
            fontFamily: 'Poppins-Regular',
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
            }}>
            <TextInput
              placeholder={'Inserisci il nome dello store'}
              placeholderTextColor={'#000000'}
            />
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
            Indirizzo
          </Text>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#B5B5B5',
            }}>
            <TextInput
              placeholder={'Inserisci l’indirizzo completo dello store'}
              placeholderTextColor={'#000000'}
            />
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
            Città
          </Text>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#B5B5B5',
            }}>
            <TextInput
              placeholder={'Inserisci la città'}
              placeholderTextColor={'#000000'}
            />
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
            Provincia
          </Text>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#B5B5B5',
            }}>
            <TextInput
              placeholder={'Inserisci la provincia'}
              placeholderTextColor={'#000000'}
            />
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
            Codice postale
          </Text>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#B5B5B5',
            }}>
            <TextInput
              placeholder={'Inserisci il CAP'}
              placeholderTextColor={'#000000'}
            />
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
            }}>
            <TextInput
              placeholder={'Inserisci la ragione sociale'}
              placeholderTextColor={'#000000'}
            />
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
            Partita IVA
          </Text>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#B5B5B5',
            }}>
            <TextInput
              placeholder={'Inserisci la partita IVA'}
              placeholderTextColor={'#000000'}
            />
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
            Codice SDI
          </Text>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#B5B5B5',
            }}>
            <TextInput
              placeholder={'Inserisci il codice SDI'}
              placeholderTextColor={'#000000'}
            />
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
            PEC
          </Text>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#B5B5B5',
            }}>
            <TextInput
              placeholder={'Inserisci la PEC'}
              placeholderTextColor={'#000000'}
            />
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
            }}>
            <TextInput
              placeholder={'Inserisci il numero di telefono'}
              placeholderTextColor={'#000000'}
            />
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
            }}>
            <TextInput
              placeholder={'Inserisci l’email dello store'}
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
              marginTop: 10,
            }}>
            Categoria
          </Text>
          <Text
            style={{
              color: '#A3AEB4',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Qui puoi selezionare le categorie dei prodotti principali offerti dal tuo store 
          </Text>
        </View>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B5B5B5',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: 10,
            marginTop: 10,
          }}>
          <TextInput
            placeholder={'Seleziona la categoria'}
            placeholderTextColor={'#000000'}
          />
          <MaterialCommunityIcons
            name="chevron-down"
            size={30}
            color={'#000000'}
          />
        </View>
        <View>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
              marginTop: 10,
            }}>
            Logo Negozio
          </Text>
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#F9FAFB',
            borderRadius: 10,
            paddingVertical: 30,
            marginTop: 20,
          }}>
          <MaterialCommunityIcons
            name="file-upload"
            size={50}
            color={'#000000'}
          />
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Carica il logo del negozio qui
          </Text>
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
              paddingHorizontal: 50,
              textAlign: 'center',
            }}>
            Foto accettate: JPG, PNG, JPEG Dimensioni massime: 5MB
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#21B861',
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 80,
          }}
          onPress={() => {
            navigation.navigate('BusinessRegisterOwner');
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
              paddingVertical: 15,
            }}>
            Continua
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BusinessRegister;
