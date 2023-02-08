import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const BusinessOnboarding = ({navigation}) => {
  const [section, setSection] = useState(1);
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 70,
        paddingHorizontal: 15,
      }}>
      <View style={{width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 14,
                fontWeight: '400',
                textDecorationLine: 'underline',
                alignSelf: 'flex-end',
                paddingRight: 30,
              }}>
              Torna all'app Clienti
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BusinessRegister');
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 14,
                fontWeight: '400',
                textDecorationLine: 'underline',
                alignSelf: 'flex-end',
              }}>
              Salta
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../../assets/logo/app/logo.png')}
          style={{height: 70, width: 70, alignSelf: 'center'}}
        />
      </View>
      {section === 1 ? <FirstSection /> : null}
      {section === 2 ? <SecondSection /> : null}
      {section === 3 ? <ThirdSection /> : null}
      <View style={{width: '100%', alignItems: 'center'}}>
        {section != 3 ? (
          <TouchableOpacity
            style={{backgroundColor: '#21B861', width: '90%', borderRadius: 10}}
            onPress={() => {
              setSection(section + 1);
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'poppins',
                textAlign: 'center',
                paddingVertical: 14,
              }}>
              Continua
            </Text>
          </TouchableOpacity>
        ) : null}
        {section === 3 ? (
          <TouchableOpacity
            style={{backgroundColor: '#21B861', width: '90%', borderRadius: 10}}
            onPress={() => {
              navigation.navigate('BusinessRegister');
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'poppins',
                textAlign: 'center',
                paddingVertical: 14,
              }}>
              Registra adesso lo store!
            </Text>
          </TouchableOpacity>
        ) : null}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'center',
            width: '100%',
          }}>
          {section === 1 ? (
            <View
              style={{
                backgroundColor: '#21B861',
                width: 10,
                height: 10,
                borderRadius: 50,
              }}
            />
          ) : (
            <View
              style={{
                backgroundColor: '#A3AEB4',
                width: 10,
                height: 10,
                borderRadius: 50,
              }}
            />
          )}
          {section === 2 ? (
            <View
              style={{
                backgroundColor: '#21B861',
                width: 10,
                height: 10,
                borderRadius: 50,
                marginHorizontal: 10,
              }}
            />
          ) : (
            <View
              style={{
                backgroundColor: '#A3AEB4',
                width: 10,
                height: 10,
                borderRadius: 50,
                marginHorizontal: 10,
              }}
            />
          )}
          {section === 3 ? (
            <View
              style={{
                backgroundColor: '#21B861',
                width: 10,
                height: 10,
                borderRadius: 50,
              }}
            />
          ) : (
            <View
              style={{
                backgroundColor: '#A3AEB4',
                width: 10,
                height: 10,
                borderRadius: 50,
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const FirstSection = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/business/onboarding/img-1.jpeg')}
        style={{
          height: 180,
          width: 180,
          borderRadius: 100,
          alignSelf: 'center',
          marginBottom: 30,
        }}
      />
      <Text
        style={{
          color: '#000000',
          fontSize: 22,
          fontWeight: '800',
          fontFamily: 'poppins',
          textAlign: 'center',
        }}>
        Vendere non è mai stato così facile, non ci credi?
      </Text>
      <Text
        style={{
          color: '#6D747C',
          fontSize: 14,
          fontWeight: '400',
          fontFamily: 'poppins',
          textAlign: 'center',
          paddingHorizontal: 30,
        }}>
        Pianifica ed organizza le tue vendite su base settimanale, crea e
        componi le tue Hero Bag ed indica tutte informazioni necessarie per
        farti notare dai potenziali clienti.
      </Text>
    </View>
  );
};

const SecondSection = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/app/store/img-1.png')}
        style={{
          height: 180,
          width: 180,
          borderRadius: 100,
          alignSelf: 'center',
          marginBottom: 30,
        }}
      />
      <Text
        style={{
          color: '#000000',
          fontSize: 22,
          fontWeight: '800',
          fontFamily: 'poppins',
          textAlign: 'center',
          paddingHorizontal: 30,
        }}>
        Cosa fare quando arriva un cliente?
      </Text>
      <Text
        style={{
          color: '#6D747C',
          lineHeight: 20,
          fontSize: 14,
          fontWeight: '400',
          fontFamily: 'poppins',
          textAlign: 'center',
        }}>
        Controlla il codice ordine e consegna le Hero Bag ai clienti, ricorda di
        far convalidare la consegna altrimenti l'ordine risulterà non
        consegnato.
      </Text>
    </View>
  );
};

const ThirdSection = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/business/onboarding/img-2.png')}
        style={{
          height: 180,
          width: 180,
          borderRadius: 100,
          alignSelf: 'center',
          marginBottom: 30,
        }}
      />
      <Text
        style={{
          color: '#000000',
          fontSize: 22,
          fontWeight: '800',
          fontFamily: 'poppins',
          textAlign: 'center',
          paddingHorizontal: 30,
        }}>
        Adesso possiamo davvero darti il benvenuto!
      </Text>
      <Text
        style={{
          color: '#6D747C',
          lineHeight: 20,
          fontSize: 14,
          fontWeight: '400',
          fontFamily: 'poppins',
          textAlign: 'center',
          marginTop: 5,
        }}>
        Il nostro obiettivo è quello di aiutarti ad eliminare gli sprechi
        relativi ai costi rimanenze o surplus di produzione, con Hello Waste
        farai crescere la tua attività in modo esponenziale! Registra adesso il
        tuo store inserendo tutti i dati necessari sulla tua attività.
      </Text>
    </View>
  );
};

export default BusinessOnboarding;
