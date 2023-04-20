import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Geolocation from '@react-native-community/geolocation';

const HomeScreen = ({navigation}) => {
  // useEffect(() => {
  //   Geolocation.getCurrentPosition(res => {
  //     console.log(JSON.stringify(res));
  //     setUserPosition(res);
  //   });
  // }, []);
  const [section, setSection] = useState(0);
  const [storeModal, setStoreModal] = useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#ffffff',
        paddingTop: 50,
        paddingBottom: 250,
        flex: 1,
        paddingHorizontal: 15,
      }}>
      <Modal animationType="slide" transparent={true} visible={storeModal}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '5%',
            alignSelf: 'center',
            borderRadius: 8,
            borderColor: '#000000',
            borderWidth: 0.3,
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
              paddingLeft: '30%',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'poppins',
              }}>
              Aiutaci a migliorare
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setStoreModal(false);
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
          <ScrollView>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                  textAlign: 'left',
                }}>
                Nome utente
              </Text>
              <View
                style={{
                  borderColor: '#999da1',
                  borderWidth: 0.3,
                  borderRadius: 10,
                  marginTop: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  placeholder="@NomeUtente"
                  placeholderTextColor={'#000000'}
                />
                <MaterialCommunityIcons
                  name="pencil"
                  size={20}
                  color={'#000000'}
                  style={{marginRight: 10}}
                />
              </View>
            </View>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                  textAlign: 'left',
                }}>
                Email
              </Text>
              <View
                style={{
                  borderColor: '#999da1',
                  borderWidth: 0.3,
                  borderRadius: 10,
                  marginTop: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  placeholder="indirizzoemail@email.com"
                  placeholderTextColor={'#000000'}
                />
                <MaterialCommunityIcons
                  name="pencil"
                  size={20}
                  color={'#000000'}
                  style={{marginRight: 10}}
                />
              </View>
            </View>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                  textAlign: 'left',
                }}>
                Che cosa vuoi consigliarci?
              </Text>
              <Text
                style={{
                  color: '#A3AEB4',
                  fontSize: 12,
                  fontWeight: '400',
                  fontFamily: 'poppins',
                  textAlign: 'left',
                  paddingRight: 20,
                }}>
                Ogni Hero Bag può contenere solo una categoria di prodotto, in
                presenza di più categorie sarà sufficiente creare altre bag.
              </Text>
              <View
                style={{
                  borderColor: '#999da1',
                  borderWidth: 0.3,
                  borderRadius: 10,
                  marginTop: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                <TextInput
                  placeholder="Store"
                  placeholderTextColor={'#000000'}
                />
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={20}
                  color={'#000000'}
                />
              </View>
            </View>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                  textAlign: 'left',
                }}>
                Nome Store
              </Text>
              <View
                style={{
                  borderColor: '#999da1',
                  borderWidth: 0.3,
                  borderRadius: 10,
                  marginTop: 2,
                }}>
                <TextInput
                  placeholder="Inserisci il nome dello store"
                  placeholderTextColor={'#000000'}
                />
              </View>
            </View>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                  textAlign: 'left',
                }}>
                Indirizzo Store
              </Text>
              <View
                style={{
                  borderColor: '#999da1',
                  borderWidth: 0.3,
                  borderRadius: 10,
                  marginTop: 2,
                }}>
                <TextInput
                  placeholder="Inserisci l’indirizzo dello store"
                  placeholderTextColor={'#000000'}
                />
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              width: '92%',
              marginHorizontal: 10,
              marginTop: 10,
              alignSelf: 'center',
              borderRadius: 10,
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
              Invia consiglio
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View>
        <Text
          style={{
            color: '#000000',
            fontSize: 22,
            fontWeight: '700',
            fontFamily: 'poppins',
          }}>
          Ciao @nomeutente!
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#F9FAFB',
              borderRadius: 10,
              flex: 1,
              marginRight: 20,
              height: '100%',
            }}>
            <View>
              <MaterialCommunityIcons
                name="map-marker"
                size={20}
                color={'#21B861'}
                style={{
                  margin: 10,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                }}>
                La tua posizione
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                }}>
                Milano (entro 10 km)
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('SearchStoresScreen');
            }}>
            <MaterialCommunityIcons
              name="magnify"
              size={20}
              color={'#21B861'}
              style={{
                margin: 15,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'poppins',
          }}>
          Scegli categoria prodotti
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: '#3C434B',
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'poppins',
              textDecorationLine: 'underline',
            }}>
            Vedi tutte
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginVertical: 15}}>
        {section == 1 ? (
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderRadius: 15,
              alignItems: 'center',
              paddingHorizontal: 15,
              paddingVertical: 5,
              marginRight: 10,
              borderWidth: 0.5,
              borderColor: '#21B861',
            }}
            onPress={() => {
              setSection(0);
            }}>
            <Image
              source={require('../../../assets/app/categories/logos/alimentari.png')}
              style={{width: 35, height: 35, marginHorizontal: 30}}
            />
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'poppins',
              }}>
              Alimentari
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderRadius: 15,
              alignItems: 'center',
              paddingHorizontal: 15,
              paddingVertical: 5,
              marginRight: 10,
            }}
            onPress={() => {
              setSection(1);
            }}>
            <Image
              source={require('../../../assets/app/categories/logos/alimentari.png')}
              style={{width: 35, height: 35, marginHorizontal: 30}}
            />
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'poppins',
              }}>
              Alimentari
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{
            backgroundColor: '#F9FAFB',
            borderRadius: 15,
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingVertical: 5,
            marginRight: 10,
          }}
          onPress={() => {
            setSection(2);
          }}>
          <Image
            source={require('../../../assets/app/categories/logos/animali.png')}
            style={{width: 35, height: 35, marginHorizontal: 30}}
          />
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'poppins',
            }}>
            Amici animali
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#F9FAFB',
            borderRadius: 15,
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingVertical: 5,
            marginRight: 10,
          }}>
          <Image
            source={require('../../../assets/app/categories/logos/benessere.png')}
            style={{width: 35, height: 35, marginHorizontal: 30}}
          />
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'poppins',
            }}>
            Cura e benessere
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#F9FAFB',
            borderRadius: 15,
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingVertical: 5,
            marginRight: 10,
          }}>
          <Image
            source={require('../../../assets/app/categories/logos/natura.png')}
            style={{width: 35, height: 35, marginHorizontal: 30}}
          />
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'poppins',
            }}>
            Natura
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#F9FAFB',
            borderRadius: 15,
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingVertical: 5,
            marginRight: 10,
          }}>
          <Image
            source={require('../../../assets/app/categories/logos/fashion.png')}
            style={{width: 35, height: 35, marginHorizontal: 30}}
          />
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'poppins',
            }}>
            Fashion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#F9FAFB',
            borderRadius: 15,
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}>
          <Image
            source={require('../../../assets/app/categories/logos/altro.png')}
            style={{width: 35, height: 35, marginHorizontal: 30}}
          />
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'poppins',
            }}>
            Altro
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#F2FDF7',
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate('UserPreferences');
          }}>
          <Text
            style={{
              color: '#21B861',
              fontSize: 16,
              fontWeight: '800',
              fontFamily: 'poppins',
              textAlign: 'center',
              paddingVertical: 15,
            }}>
            Imposta le tue preferenze
          </Text>
        </TouchableOpacity>
      </View>
      {section == 0 ? (
        <View>
          <Text
            style={{
              color: '#000000',
              fontSize: 20,
              fontWeight: '800',
              fontFamily: 'poppins',
              textAlign: 'center',
              paddingVertical: 15,
            }}>
            Inizia selezionando una tra le categorie disponibili
          </Text>
          <Image
            source={require('../../../assets/app/store/img-1.png')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              alignSelf: 'center',
              marginBottom: 50,
            }}
          />
        </View>
      ) : null}
      {section === 1 ? <ActiveHome navigation={navigation} /> : null}
      {section === 2 ? (
        <View>
          <Text
            style={{
              color: '#21B861',
              fontSize: 22,
              fontWeight: '700',
              fontFamily: 'poppins',
              textAlign: 'center',
              marginTop: 10,
            }}>
            OH NO!
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '600',
              fontFamily: 'poppins',
              textAlign: 'center',
              paddingVertical: 15,
            }}>
            Sembra proprio che non ci siano HeroBag disponibili nella zona da te
            selezionata.
          </Text>
          <Image
            source={require('../../../assets/app/store/img-1.png')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              alignSelf: 'center',
            }}
          />
          <View>
            <Text
              style={{
                color: '#3C434B',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Ecco cosa puoi fare:
            </Text>
            <Text
              style={{
                color: '#3C434B',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Vedi altre hero bag modificando le tue scelte oppure attiva le
              notifiche per sapere subito quando ci saranno nuove HeroBag
              disponibili
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              borderRadius: 10,
              marginTop: 10,
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
              Attiva le notifiche adesso
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <View
        style={{
          marginTop: 20,
          marginBottom: 80,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#F9FAFB',
            width: '70%',
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: '#21B861',
          }}
          onPress={() => {
            setStoreModal(true);
          }}>
          <Text
            style={{
              color: '#21B861',
              fontSize: 12,
              fontWeight: '400',
              fontFamily: 'poppins',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            Consigliaci uno store
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const ActiveHome = ({navigation}) => {
  return (
    <View>
      <View style={{marginTop: 15}}>
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'poppins',
          }}>
          Scelti per le tue preferenze
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 5,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              elevation: 3,
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}
            onPress={() => {
              navigation.navigate('StoreBagsScreen');
            }}>
            <View>
              <Image
                source={require('../../../assets/logo/app/logo.png')}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 100,
                  }}>
                  Nome Store
                </Text>
                <MaterialCommunityIcons
                  name="heart"
                  size={20}
                  color={'#21B861'}
                  style={{
                    marginRight: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="shopping"
                  size={20}
                  color={'#21B861'}
                />
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginLeft: 5,
                    marginRight: 50,
                  }}>
                  8 disponibili a partire da €4,99
                </Text>
              </View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 10,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                }}>
                Ritiro oggi 20:00 - 22:00
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="star"
                  size={15}
                  color={'#FBBC04'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  4.2 (45)
                </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={10}
                  color={'#8C979D'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  3,0 Km da te
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              elevation: 3,
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}>
            <View>
              <Image
                source={require('../../../assets/app/home/stores-logo/img-1.jpeg')}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 100,
                  }}>
                  Nome Store
                </Text>
                <MaterialCommunityIcons
                  name="heart"
                  size={20}
                  color={'#21B861'}
                  style={{
                    marginRight: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="shopping"
                  size={20}
                  color={'#21B861'}
                />
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginLeft: 5,
                    marginRight: 50,
                  }}>
                  8 disponibili a partire da €4,99
                </Text>
              </View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 10,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                }}>
                Ritiro oggi 20:00 - 22:00
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="star"
                  size={15}
                  color={'#FBBC04'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  4.2 (45)
                </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={10}
                  color={'#8C979D'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  3,0 Km da te
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              elevation: 3,
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}>
            <View>
              <Image
                source={require('../../../assets/app/home/stores-logo/img-2.jpeg')}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 100,
                  }}>
                  Nome Store
                </Text>
                <MaterialCommunityIcons
                  name="heart"
                  size={20}
                  color={'#21B861'}
                  style={{
                    marginRight: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="shopping"
                  size={20}
                  color={'#21B861'}
                />
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginLeft: 5,
                    marginRight: 50,
                  }}>
                  8 disponibili a partire da €4,99
                </Text>
              </View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 10,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                }}>
                Ritiro oggi 20:00 - 22:00
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="star"
                  size={15}
                  color={'#FBBC04'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  4.2 (45)
                </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={10}
                  color={'#8C979D'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  3,0 Km da te
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              elevation: 3,
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}>
            <View>
              <Image
                source={require('../../../assets/app/home/stores-logo/img-3.jpeg')}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 100,
                  }}>
                  Nome Store
                </Text>
                <MaterialCommunityIcons
                  name="heart"
                  size={20}
                  color={'#21B861'}
                  style={{
                    marginRight: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="shopping"
                  size={20}
                  color={'#21B861'}
                />
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginLeft: 5,
                    marginRight: 50,
                  }}>
                  8 disponibili a partire da €4,99
                </Text>
              </View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 10,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                }}>
                Ritiro oggi 20:00 - 22:00
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="star"
                  size={15}
                  color={'#FBBC04'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  4.2 (45)
                </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={10}
                  color={'#8C979D'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  3,0 Km da te
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{marginTop: 15}}>
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'poppins',
          }}>
          Migliori in zona
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 5,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              elevation: 3,
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}>
            <View>
              <Image
                source={require('../../../assets/logo/app/logo.png')}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 100,
                  }}>
                  Nome Store
                </Text>
                <MaterialCommunityIcons
                  name="heart"
                  size={20}
                  color={'#21B861'}
                  style={{
                    marginRight: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="shopping"
                  size={20}
                  color={'#21B861'}
                />
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginLeft: 5,
                    marginRight: 50,
                  }}>
                  8 disponibili a partire da €4,99
                </Text>
              </View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 10,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                }}>
                Ritiro oggi 20:00 - 22:00
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="star"
                  size={15}
                  color={'#FBBC04'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  4.2 (45)
                </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={10}
                  color={'#8C979D'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  3,0 Km da te
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              elevation: 3,
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}>
            <View>
              <Image
                source={require('../../../assets/app/home/stores-logo/img-1.jpeg')}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 100,
                  }}>
                  Nome Store
                </Text>
                <MaterialCommunityIcons
                  name="heart"
                  size={20}
                  color={'#21B861'}
                  style={{
                    marginRight: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="shopping"
                  size={20}
                  color={'#21B861'}
                />
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginLeft: 5,
                    marginRight: 50,
                  }}>
                  8 disponibili a partire da €4,99
                </Text>
              </View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 10,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                }}>
                Ritiro oggi 20:00 - 22:00
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="star"
                  size={15}
                  color={'#FBBC04'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  4.2 (45)
                </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={10}
                  color={'#8C979D'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  3,0 Km da te
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              elevation: 3,
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}>
            <View>
              <Image
                source={require('../../../assets/app/home/stores-logo/img-2.jpeg')}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 100,
                  }}>
                  Nome Store
                </Text>
                <MaterialCommunityIcons
                  name="heart"
                  size={20}
                  color={'#21B861'}
                  style={{
                    marginRight: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="shopping"
                  size={20}
                  color={'#21B861'}
                />
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginLeft: 5,
                    marginRight: 50,
                  }}>
                  8 disponibili a partire da €4,99
                </Text>
              </View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 10,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                }}>
                Ritiro oggi 20:00 - 22:00
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="star"
                  size={15}
                  color={'#FBBC04'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  4.2 (45)
                </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={10}
                  color={'#8C979D'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  3,0 Km da te
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              elevation: 3,
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}>
            <View>
              <Image
                source={require('../../../assets/app/home/stores-logo/img-3.jpeg')}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 100,
                  }}>
                  Nome Store
                </Text>
                <MaterialCommunityIcons
                  name="heart"
                  size={20}
                  color={'#21B861'}
                  style={{
                    marginRight: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="shopping"
                  size={20}
                  color={'#21B861'}
                />
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginLeft: 5,
                    marginRight: 50,
                  }}>
                  8 disponibili a partire da €4,99
                </Text>
              </View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 10,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                }}>
                Ritiro oggi 20:00 - 22:00
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="star"
                  size={15}
                  color={'#FBBC04'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  4.2 (45)
                </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={10}
                  color={'#8C979D'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  3,0 Km da te
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{marginTop: 15}}>
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'poppins',
          }}>
          I tuoi negozi preferiti
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 5,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              elevation: 3,
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}>
            <View>
              <Image
                source={require('../../../assets/logo/app/logo.png')}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 100,
                  }}>
                  Nome Store
                </Text>
                <MaterialCommunityIcons
                  name="heart"
                  size={20}
                  color={'#21B861'}
                  style={{
                    marginRight: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="shopping"
                  size={20}
                  color={'#21B861'}
                />
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginLeft: 5,
                    marginRight: 50,
                  }}>
                  8 disponibili a partire da €4,99
                </Text>
              </View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 10,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                }}>
                Ritiro oggi 20:00 - 22:00
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="star"
                  size={15}
                  color={'#FBBC04'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  4.2 (45)
                </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={10}
                  color={'#8C979D'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  3,0 Km da te
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              elevation: 3,
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}>
            <View>
              <Image
                source={require('../../../assets/app/home/stores-logo/img-1.jpeg')}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 100,
                  }}>
                  Nome Store
                </Text>
                <MaterialCommunityIcons
                  name="heart"
                  size={20}
                  color={'#21B861'}
                  style={{
                    marginRight: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="shopping"
                  size={20}
                  color={'#21B861'}
                />
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginLeft: 5,
                    marginRight: 50,
                  }}>
                  8 disponibili a partire da €4,99
                </Text>
              </View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 10,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                }}>
                Ritiro oggi 20:00 - 22:00
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="star"
                  size={15}
                  color={'#FBBC04'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  4.2 (45)
                </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={10}
                  color={'#8C979D'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  3,0 Km da te
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              elevation: 3,
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}>
            <View>
              <Image
                source={require('../../../assets/app/home/stores-logo/img-2.jpeg')}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 100,
                  }}>
                  Nome Store
                </Text>
                <MaterialCommunityIcons
                  name="heart"
                  size={20}
                  color={'#21B861'}
                  style={{
                    marginRight: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="shopping"
                  size={20}
                  color={'#21B861'}
                />
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginLeft: 5,
                    marginRight: 50,
                  }}>
                  8 disponibili a partire da €4,99
                </Text>
              </View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 10,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                }}>
                Ritiro oggi 20:00 - 22:00
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="star"
                  size={15}
                  color={'#FBBC04'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  4.2 (45)
                </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={10}
                  color={'#8C979D'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  3,0 Km da te
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              elevation: 3,
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}>
            <View>
              <Image
                source={require('../../../assets/app/home/stores-logo/img-3.jpeg')}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 100,
                  }}>
                  Nome Store
                </Text>
                <MaterialCommunityIcons
                  name="heart"
                  size={20}
                  color={'#21B861'}
                  style={{
                    marginRight: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="shopping"
                  size={20}
                  color={'#21B861'}
                />
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginLeft: 5,
                    marginRight: 50,
                  }}>
                  8 disponibili a partire da €4,99
                </Text>
              </View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 10,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                }}>
                Ritiro oggi 20:00 - 22:00
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="star"
                  size={15}
                  color={'#FBBC04'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  4.2 (45)
                </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={10}
                  color={'#8C979D'}
                />
                <Text
                  style={{
                    color: '#6D747C',
                    fontSize: 10,
                    fontWeight: '500',
                    fontFamily: 'poppins',
                    marginRight: 10,
                  }}>
                  3,0 Km da te
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
