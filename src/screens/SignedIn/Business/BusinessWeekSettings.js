import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BusinessWeekSettings = ({navigation}) => {
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
          paddingTop: 10,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'Poppins-Regular',
          }}>
          Benvenuto!
        </Text>
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'Poppins-Regular',
          }}>
          Controlla i dettagli del tuo store
        </Text>
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
          invenduti del tuo store e ritirarli nell’orario da te stabilito.
          Questa impostazione può essere sempre modificata.
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
              <MaterialCommunityIcons
                name="check"
                color={'#ffffff'}
                size={18}
              />
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
              <MaterialCommunityIcons
                name="check"
                color={'#ffffff'}
                size={18}
              />
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
              <MaterialCommunityIcons
                name="check"
                color={'#ffffff'}
                size={18}
              />
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
              <MaterialCommunityIcons
                name="check"
                color={'#ffffff'}
                size={18}
              />
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
              <MaterialCommunityIcons
                name="check"
                color={'#ffffff'}
                size={18}
              />
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
              <MaterialCommunityIcons
                name="check"
                color={'#ffffff'}
                size={18}
              />
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
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#21B861',
          borderRadius: 10,
          marginTop: 50,
          width: '90%',
          alignSelf: 'center',
        }}
        onPress={() => {
          navigation.navigate('BusinessDay');
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
            
            fontFamily: 'Poppins-Regular',
            paddingVertical: 15,
            textAlign: 'center',
          }}>
          Salva dettagli
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BusinessWeekSettings;
