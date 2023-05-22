import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const UserPreferences = ({navigation}) => {
  const [hideStores, setHideStores] = useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={30}
          color={'#000000'}
          style={{
            marginRight: 20,
          }}
        />
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            
            fontFamily: 'Poppins-Bold',
          }}>
          Preferenze
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color: '#3C434B',
          fontSize: 12,
          fontWeight: '400',
          fontFamily: 'Poppins-Regular',
        }}>
        Selezionando le tue preferenze riusciremo a fornirti un’esperienza
        basata sulle tue esigenze orarie ed in base ai tuoi gusti preferiti.
      </Text>
      <View
        style={{
          height: 1,
          backgroundColor: '#D9E0E8',
          width: '100%',
          marginVertical: 10,
        }}
      />
      <View>
        <Text
          style={{
            color: '#020905',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'Poppins-Bold',
            marginTop: 10,
          }}>
          Cosa preferisci mangiare ?
        </Text>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 12,
            fontWeight: '400',
            fontFamily: 'Poppins-Regular',
          }}>
          Puoi seleziona una o più categorie
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#21B861',
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          />
          <Image
            source={require('../../../../../assets/app/categories/preferencies/pastipronti.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Pasti pronti
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#21B861',
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          />
          <Image
            source={require('../../../../../assets/app/categories/preferencies/prodottidabanco.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Prodotti da banco
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#21B861',
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          />
          <Image
            source={require('../../../../../assets/app/categories/preferencies/prodottiforno.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Prodotti da forno
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#21B861',
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          />
          <Image
            source={require('../../../../../assets/app/categories/preferencies/fruttaverdura.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Frutta e verdura
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#21B861',
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          />
          <Image
            source={require('../../../../../assets/app/categories/preferencies/altrepreferenze.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Altro
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: '#020905',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'Poppins-Bold',
            marginTop: 20,
          }}>
          Hai preferenze o intolleranze alimentari?
        </Text>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 12,
            fontWeight: '400',
            fontFamily: 'Poppins-Regular',
            marginBottom: 10,
          }}>
          Puoi selezionare una o più categorie
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#21B861',
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Nessuna
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}>
            <MaterialCommunityIcons name="check" color={'#ffffff'} size={18} />
          </TouchableOpacity>
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Vegano
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#21B861',
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Vegetariano
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#21B861',
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Senza glutine
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#21B861',
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Senza lattosio
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: '#020905',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'Poppins-Bold',
            marginTop: 20,
          }}>
          Orari di ritiro preferiti
        </Text>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 12,
            fontWeight: '400',
            fontFamily: 'Poppins-Regular',
            marginBottom: 10,
          }}>
          Puoi selezionare una o più categorie
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#21B861',
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Mattina (05:00 - 11:00)
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}>
            <MaterialCommunityIcons name="check" color={'#ffffff'} size={18} />
          </TouchableOpacity>
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Mezzogiorno (11:00 - 14:00)
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#21B861',
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Pomeriggio (14:00 - 19:00)
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#21B861',
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Sera (19:00 - 24:00)
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#21B861',
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Notte (24:00 - 05:00)
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#21B861',
              borderWidth: 1,
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Domani
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#D9E0E8',
          marginBottom: 30,
        }}
      />
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#F9FAFB',
            width: '70%',
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: '#21B861',
            alignSelf: 'center',
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: '#21B861',
              fontSize: 12,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            Consiglia altre preferenze
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 80,
        }}>
        <TouchableOpacity
          style={{
            width: '45%',
            backgroundColor: '#21B861',
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              
              fontFamily: 'Poppins-Bold',
              textAlign: 'center',
              paddingVertical: 20,
            }}>
            Salva preferenze
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '45%',
            backgroundColor: '#F2FDF7',
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: '#21B861',
              fontSize: 16,
              
              fontFamily: 'Poppins-Bold',
              textAlign: 'center',
              paddingVertical: 20,
            }}>
            Cancella preferenze
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UserPreferences;
