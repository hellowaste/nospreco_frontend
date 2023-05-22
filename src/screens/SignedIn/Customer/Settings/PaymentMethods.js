import React, {useState} from 'react';
import {
  Image,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PaymentMethods = ({navigation}) => {
  const [newPaymentMethod, setNewPaymentMethod] = useState(false);
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: 15,
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 15,
          marginTop: 50,
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={30}
          color={'#000000'}
        />
        <Text
          style={{
            color: '#000000',
            fontSize: 20,
            fontFamily: 'Poppins-Bold',
            
          }}>
          Metodi di pagamento
        </Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: '#D9E0E8',
          height: 1,
          marginVertical: 10,
        }}
      />
      {newPaymentMethod == false ? (
        <View style={{marginHorizontal: 15}}>
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
                
                fontFamily: 'Poppins-Bold',
              }}>
              Metodi salvati
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#21B861',
                borderRadius: 10,
                padding: 10,
              }}
              onPress={() => {
                setNewPaymentMethod(true);
              }}>
              <MaterialCommunityIcons name="plus" size={20} color={'#ffffff'} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 15,
              borderColor: '#D9E0E8',
              borderWidth: 0.3,
              paddingVertical: 10,
              paddingHorizontal: 10,
              marginTop: 10,
            }}
            onPress={() => {
              navigation.navigate('EditPaymentMethod');
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../../assets/app/payments/mc_logo.png')}
                style={{
                  width: 50,
                  height: 25,
                  marginRight: 10,
                }}
              />
              <View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontWeight: '400',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Mastercard **** 8765
                </Text>
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 12,
                    fontWeight: '400',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Scade in data 10/2025
                </Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              
              fontFamily: 'Poppins-Bold',
              marginTop: 20,
            }}>
            Altri metodi di pagamento
          </Text>
        </View>
      ) : (
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 50,
              }}>
              <View
                style={{
                  marginRight: 20,
                }}>
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'Poppins-Regular',
                    textAlign: 'center',
                    marginBottom: 5,
                  }}>
                  MM
                </Text>
                <View
                  style={{
                    borderRadius: 10,
                    borderColor: '#D9E0E8',
                    borderWidth: 0.3,
                  }}>
                  <TextInput
                    placeholder="MM"
                    placeholderTextColor={'#646464'}
                    style={{
                      margin: 10,
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: '500',
                      fontFamily: 'Poppins-Regular',
                    }}
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
                    textAlign: 'center',
                    marginBottom: 5,
                  }}>
                  AAAA
                </Text>
                <View
                  style={{
                    borderRadius: 10,
                    borderColor: '#D9E0E8',
                    borderWidth: 0.3,
                  }}>
                  <TextInput
                    placeholder="AAAA"
                    placeholderTextColor={'#646464'}
                    style={{
                      margin: 10,
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: '500',
                      fontFamily: 'Poppins-Regular',
                    }}
                  />
                </View>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'center',
                  marginBottom: 5,
                }}>
                CVC
              </Text>
              <View
                style={{
                  borderRadius: 10,
                  borderColor: '#D9E0E8',
                  borderWidth: 0.3,
                }}>
                <TextInput
                  placeholder="CVC"
                  placeholderTextColor={'#646464'}
                  style={{
                    margin: 10,
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'Poppins-Regular',
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              marginRight: 20,
              marginTop: 20,
            }}>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                textAlign: 'left',
                marginBottom: 5,
              }}>
              Intestario carta
            </Text>
            <View
              style={{
                borderRadius: 10,
                borderColor: '#D9E0E8',
                borderWidth: 0.3,
              }}>
              <TextInput
                placeholder="Nome Cognome"
                placeholderTextColor={'#646464'}
                style={{
                  margin: 10,
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}
              />
            </View>
          </View>
          <View
            style={{
              marginRight: 20,
              marginTop: 20,
            }}>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                textAlign: 'left',
                marginBottom: 5,
              }}>
              Indirizzo associato
            </Text>
            <View
              style={{
                borderRadius: 10,
                borderColor: '#D9E0E8',
                borderWidth: 0.3,
              }}>
              <TextInput
                placeholder="Via Roma 1, 24100, Milano (MI)"
                placeholderTextColor={'#646464'}
                style={{
                  margin: 10,
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#21B861',
                borderRadius: 10,
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
        </View>
      )}
    </View>
  );
};

export default PaymentMethods;
