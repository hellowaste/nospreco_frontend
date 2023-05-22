import React, {useState} from 'react';
import {
  Image, Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BusinessStatistics = ({navigation}) => {
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
            Statistiche
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
            HeroBag in vendita e monitore o modificare gli ordini del giorno.
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
                setUserGuideModal(false);
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                  
                  fontFamily: 'Poppins-Bold',
                  textAlign: 'center',
                  paddingVertical: 20,
                }}>
                Fine
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
          Statistiche
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: '#3C434B',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'Poppins-Bold',
          }}>
          Novembre 2022
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="chevron-up"
              size={20}
              color={'#000000'}
              style={{
                marginHorizontal: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={'#000000'}
              style={{
                marginHorizontal: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#D9E0E8',
              borderWidth: 0.5,
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,
              width: '45%',
            }}>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 12,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
              }}>
              HeroBag vendute
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 22,
                
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
              }}>
              234
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#D9E0E8',
              borderWidth: 0.5,
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,
              width: '45%',
            }}>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 12,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
              }}>
              Ricavi totali
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 22,
                
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
              }}>
              € 937,36
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#D9E0E8',
              borderWidth: 0.5,
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,
              width: '45%',
            }}>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 12,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
              }}>
              Recensioni totali
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 22,
                
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
              }}>
              187
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#D9E0E8',
              borderWidth: 0.5,
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,
              width: '45%',
            }}>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 12,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
              }}>
              Valore recensioni
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 22,
                
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
              }}>
              4.6 su 5.0
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 25,
          marginHorizontal: 15,
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'Poppins-Bold',
          }}>
          Recensioni utenti
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#3C434B',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Bold',
              marginRight: 5,
            }}>
            Utente 1 ha assegnato 2
          </Text>
          <MaterialCommunityIcons name="star" size={20} color={'#FBBC04'} />
        </View>
        <Text
          style={{
            color: '#A3AEB4',
            fontSize: 10,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
          }}>
          Recensione pubblicata il: 12 Novembre 2022, 19:23
        </Text>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 16,
            fontWeight: '400',
            fontFamily: 'Poppins-Regular',
            marginTop: 10,
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text.
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 15,
          marginTop: 10,
          borderColor: '#A3AEB4',
          borderWidth: 1,
          borderRadius: 10,
        }}>
        <TextInput
          placeholder="Rispondi a questa recensione"
          placeholderTextColor={'#21B861'}
          style={{
            color: '#000000',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Bold',
          }}
        />
      </View>
    </ScrollView>
  );
};

export default BusinessStatistics;
