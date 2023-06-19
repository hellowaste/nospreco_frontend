import React, {useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const EditPaymentMethod = ({navigation}) => {
  const [cancelPaymentMethod, setCancelPaymentMethod] = useState(false);
  return (
    <ScrollView
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: 15,
      }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={cancelPaymentMethod}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '45%',
            alignSelf: 'center',
            borderRadius: 8,
            borderColor: '#000000',
            borderWidth: 0.4,
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
                fontFamily: 'Poppins-Regular',
              }}>
              Rimuovi
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setCancelPaymentMethod(false);
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
              color: '#000000',
              fontSize: 18,
              fontWeight: '600',
              fontFamily: 'Poppins-Bold',
              textAlign: 'center',
            }}>
            Vuoi rimuovere questo metodo di pagamento ?
          </Text>
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
                
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 15,
              }}>
              Sì, rimuovi
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
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 16,
                
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 15,
              }}>
              No, annulla
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 16,
          marginTop: 60,
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
            color: '#020905',
            fontSize: 22,
            fontStyle :'normal',
            fontFamily :'Poppins-Bold',
            
            lineHeight: 24,
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 20,
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
            }}
          />
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Mastercard **** 8765
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#EA4335',
            borderRadius: 10,
            padding: 10,
          }}
          onPress={() => {
            setCancelPaymentMethod(true);
          }}>
          <MaterialCommunityIcons
            name="trash-can"
            size={25}
            color={'#ffffff'}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginHorizontal: 20,
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
                marginBottom: 2,
                marginRight:7,
              }}>
              MM
            </Text>
            <View
              style={{
                borderRadius: 10,
                borderColor: '#D9E0E8',
                borderWidth: 0.5,
              }}>
              <TextInput
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
                marginBottom: 2,
                marginRight: 9,
              }}>
              AAAA
            </Text>
            <View
              style={{
                borderRadius: 10,
                borderColor: '#D9E0E8',
                borderWidth: 0.5,
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
              marginBottom: 2,
              marginRight:9,
            }}>
            CVC
          </Text>
          <View
            style={{
              borderRadius: 10,
              borderColor: '#D9E0E8',
              borderWidth: 0.5,
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
          marginHorizontal: 20,
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
          Numero carta
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderColor: '#D9E0E8',
            borderWidth: 0.3,
          }}>
          <TextInput
            placeholder="Es: 0000 0000 0000 0000"
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
          marginHorizontal: 20,
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
          Intestatario carta 
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderColor: '#D9E0E8',
            borderWidth: 0.3,
          }}>
          <TextInput
            placeholder="Es : Mario Rossi"
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
          marginHorizontal: 20,
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
              fontFamily: 'Poppins-Bold',
              textAlign: 'center',
              paddingVertical: 15,
            }}>
            Salva modifiche
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditPaymentMethod;
