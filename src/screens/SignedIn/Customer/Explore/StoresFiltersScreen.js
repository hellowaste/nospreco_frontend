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

const StoresFiltersScreen = ({navigation}) => {
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '45%',
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'poppins',
          }}>
          Filtri
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialCommunityIcons name="close" size={20} color={'#000000'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#D9E0E8',
          width: '100%',
          marginVertical: 20,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {hideStores === true ? (
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              width: 20,
              height: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              setHideStores(!hideStores);
            }}>
            <MaterialCommunityIcons name="check" color={'#ffffff'} size={18} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              width: 20,
              height: 20,
              borderRadius: 3,
              borderStyle: 'solid',
              borderWidth: 0.5,
              borderColor: '#21B861',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              setHideStores(!hideStores);
            }}
          />
        )}
        <Text
          style={{
            color: '#020905',
            fontSize: 14,
            fontWeight: '400',
            fontFamily: 'poppins',
            marginLeft: 10,
          }}>
          Nascondi store senza HeroBag
        </Text>
      </View>
      <Text
        style={{
          color: '#6D747C',
          fontSize: 12,
          fontWeight: '400',
          fontFamily: 'poppins',
          marginTop: 10,
        }}>
        Attivando questo filtro ti mostreremo solo gli store che hanno delle
        HeroBag in vendita.
      </Text>
      <View>
        <Text
          style={{
            color: '#020905',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'poppins',
            marginTop: 20,
          }}>
          Prezzo massimo
        </Text>
        <View
          style={{
            alignSelf: 'center',
            backgroundColor: '#F9FAFB',
            borderRadius: 10,
            width: '50%',
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 0,
          }}>
          <TextInput
            style={{
              fontSize: 20,
              fontWeight: '800',
              marginVertical: 5,
              width: '80%',
            }}
            placeholder="€15,00"
            placeholderTextColor={'#000000'}
          />
          <View
            style={{
              backgroundColor: '#A3AEB4',
              borderRadius: 50,
            }}>
            <MaterialCommunityIcons name="close" size={20} color={'#ffffff'} />
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: '#020905',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'poppins',
            marginTop: 20,
            marginBottom: 10,
          }}>
          Categoria
        </Text>
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
              fontFamily: 'poppins',
            }}>
            Mostra tutto
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
            source={require('../../../../assets/app/categories/logos/alimentari.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Alimentari
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
            source={require('../../../../assets/app/categories/logos/animali.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Amici animali
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
            source={require('../../../../assets/app/categories/logos/benessere.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Cura e benessere
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
            source={require('../../../../assets/app/categories/logos/natura.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Natura
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
            source={require('../../../../assets/app/categories/logos/fashion.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
            }}>
            Fashion
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
            source={require('../../../../assets/app/categories/logos/altro.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
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
            fontFamily: 'poppins',
            marginTop: 20,
            marginBottom: 10,
          }}>
          Cosa preferisci mangiare?
        </Text>
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
              fontFamily: 'poppins',
            }}>
            Mostra tutto
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
            source={require('../../../../assets/app/categories/preferencies/pastipronti.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
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
            source={require('../../../../assets/app/categories/preferencies/prodottidabanco.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
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
            source={require('../../../../assets/app/categories/preferencies/prodottiforno.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
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
            source={require('../../../../assets/app/categories/preferencies/fruttaverdura.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
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
            source={require('../../../../assets/app/categories/preferencies/altrepreferenze.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'poppins',
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
            fontFamily: 'poppins',
            marginTop: 20,
            marginBottom: 10,
          }}>
          Preferenza alimentare
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
              fontFamily: 'poppins',
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
              fontFamily: 'poppins',
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
              fontFamily: 'poppins',
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
              fontFamily: 'poppins',
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
              fontFamily: 'poppins',
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
            fontFamily: 'poppins',
            marginTop: 20,
            marginBottom: 10,
          }}>
          Orario di ritiro
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
              fontFamily: 'poppins',
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
              fontFamily: 'poppins',
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
              fontFamily: 'poppins',
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
              fontFamily: 'poppins',
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
              fontFamily: 'poppins',
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
              fontFamily: 'poppins',
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
              fontWeight: '700',
              fontFamily: 'poppins',
              textAlign: 'center',
              paddingVertical: 20,
            }}>
            Conferma filtri
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
              fontWeight: '700',
              fontFamily: 'poppins',
              textAlign: 'center',
              paddingVertical: 20,
            }}>
            Cancello tutto
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default StoresFiltersScreen;
