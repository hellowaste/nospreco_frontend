import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const WelcomeScreen = ({navigation}) => {
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
      }}>
      <View style={{width: '100%'}}>
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
            Salta
          </Text>
        </TouchableOpacity>
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
              navigation.navigate('RegisterScreen');
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
              Alleati!
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
        source={require('../../../assets/app/onboarding/img-1-onboarding.jpeg')}
        style={{
          height: 160,
          width: 160,
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
        Abbiamo un sogno!
      </Text>
      <Text
        style={{
          color: '#000000',
          fontSize: 22,
          fontWeight: '800',
          fontFamily: 'poppins',
          textAlign: 'center',
          paddingHorizontal: 30,
        }}>
        Un mondo verde e senza sprechi, combatti insieme a noi per raggiungerlo!
      </Text>
    </View>
  );
};

const SecondSection = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/app/onboarding/img-2-onboarding.png')}
        style={{
          height: 160,
          width: 160,
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
        Cerca i nostri store alleati più vicini a te e scegli le tue HeroBag
        scontate fino al 70%!
      </Text>
      <Text
        style={{
          color: '#000000',
          lineHeight: 20,
          fontSize: 14,
          fontWeight: '400',
          fontFamily: 'poppins',
          textAlign: 'center',
          paddingHorizontal: 90,
          marginTop: 10,
        }}>
        Ricorda, le nostre HeroBag contengono prodotti invenduti ma ancora
        eccezionali.
      </Text>
    </View>
  );
};

const ThirdSection = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/app/onboarding/img-3-onboarding.png')}
        style={{
          height: 160,
          width: 160,
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
        Acquistarle sarà facilissimo!
      </Text>
      <Text
        style={{
          color: '#000000',
          fontSize: 22,
          fontWeight: '800',
          fontFamily: 'poppins',
          textAlign: 'center',
          paddingHorizontal: 30,
        }}>
        Seleziona le tue HeroBag preferite e paga comodamente in app!
      </Text>
      <Text
        style={{
          color: '#000000',
          lineHeight: 20,
          fontSize: 14,
          fontWeight: '400',
          fontFamily: 'poppins',
          textAlign: 'center',
          paddingHorizontal: 90,
          marginTop: 10,
        }}>
        Le tue HeroBag ti aspettano direttamente in store, mostra il tuo codice
        d'ordinazione allo staff e convalida il ritiro.
      </Text>
    </View>
  );
};

export default WelcomeScreen;
