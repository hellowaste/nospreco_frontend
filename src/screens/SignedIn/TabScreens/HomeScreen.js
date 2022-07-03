import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const image = {
  uri: 'https://media-assets.vanityfair.it/photos/61e444841e21bc3bd54b5357/1:1/w_2832,h_2832,c_limit/pizza%20tendenze.jpg',
};

const HomeScreen = ({navigation}) => {
  const currentUser = useSelector(state => state.user);
  const [storeVisibility, setStoreVisibility] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#00807a'}}>
      <View
        style={{
          paddingHorizontal: 10,
          paddingBottom: 10,
          backgroundColor: '#00807a',
          borderRadius: 20,
          zIndex: 99,
        }}>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '700',
              marginVertical: 10,
              color: '#ffffff',
            }}>
            Esplora
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={20}
                color={'#000000'}
              />
              <Text style={{fontSize: 18, fontWeight: '600', color: '#000000'}}>
                Posizione attuale
              </Text>
            </View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                marginLeft: 20,
                color: '#000000',
              }}>
              entro 5 km
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#000000',
              borderRadius: 20,
              marginRight: 5,
            }}
            onPress={() => setStoreVisibility(!storeVisibility)}>
            <Text style={{fontWeight: '500', color: '#ffffff', padding: 7}}>
              Modifica
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#eee',
          flex: 1,
          paddingTop: 20,
          marginTop: -40,
        }}>
        {storeVisibility ? (
          <ScrollView
            bounces={true}
            showsVerticalScrollIndicator={false}
            style={{paddingHorizontal: 10}}>
            <View
              style={{
                marginTop: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'left',
                    fontSize: 20,
                    fontWeight: '700',
                    color: '#000000',
                  }}>
                  I box in offerta oggi
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#00807a',
                  borderRadius: 20,
                }}
                onPress={() => navigation.navigate('MagicBoxList')}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 3,
                  }}>
                  <Text
                    style={{
                      color: '#ffffff',
                      fontWeight: '500',
                      marginLeft: 5,
                    }}>
                    Vedi tutti
                  </Text>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={18}
                    color={'white'}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <MagicBox navigation={navigation} />
              <MagicBox navigation={navigation} />
              <MagicBox navigation={navigation} />
            </ScrollView>
            <View
              style={{
                marginTop: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'left',
                    fontSize: 20,
                    fontWeight: '700',
                    color: '#000000',
                  }}>
                  Supermercati
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#00807a',
                  borderRadius: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 3,
                  }}>
                  <Text
                    style={{
                      color: '#ffffff',
                      fontWeight: '500',
                      marginLeft: 5,
                    }}>
                    Vedi tutti
                  </Text>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={18}
                    color={'white'}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <SupermarketBox navigation={navigation} />
              <SupermarketBox navigation={navigation} />
              <SupermarketBox navigation={navigation} />
            </ScrollView>
            <View
              style={{
                marginTop: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'left',
                    fontSize: 20,
                    fontWeight: '700',
                    color: '#000000',
                  }}>
                  Pasti pronti
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#00807a',
                  borderRadius: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 3,
                  }}>
                  <Text
                    style={{
                      color: '#ffffff',
                      fontWeight: '500',
                      marginLeft: 5,
                    }}>
                    Vedi tutti
                  </Text>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={18}
                    color={'white'}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{marginBottom: 10}}>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  height: 170,
                  width: 250,
                  marginTop: 10,
                  borderRadius: 15,
                  flexDirection: 'column-reverse',
                  marginRight: 10,
                }}
              />
              <View
                style={{
                  backgroundColor: '#ffffff',
                  height: 170,
                  width: 250,
                  marginTop: 10,
                  borderRadius: 15,
                  flexDirection: 'column-reverse',
                  marginHorizontal: 10,
                }}
              />
              <View
                style={{
                  backgroundColor: '#ffffff',
                  height: 170,
                  width: 250,
                  marginTop: 10,
                  borderRadius: 15,
                  flexDirection: 'column-reverse',
                  marginLeft: 10,
                }}
              />
            </ScrollView>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 20,
                  fontWeight: '700',
                  color: '#000000',
                }}>
                Gestisci le tue preferenze
              </Text>
              <View
                style={{
                  height: 100,
                  justifyContent: 'center',
                  marginHorizontal: 30,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 20,
                    borderColor: '#00807a',
                    borderWidth: 1,
                    borderStyle: 'dashed',
                  }}
                  onPress={() => navigation.navigate('SuggestionsSetupScreen')}>
                  <Text
                    style={{
                      color: '#00807a',
                      fontSize: 16,
                      fontWeight: '600',
                      padding: 10,
                      textAlign: 'center',
                    }}>
                    Imposta i consigli
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        ) : (
          <ScrollView bounces={true} showsVerticalScrollIndicator={false}>
            <View style={{marginTop: 30}}>
              <View style={{alignItems: 'center', marginHorizontal: 10}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: '700',
                    color: '#000000',
                  }}>
                  Nessuno store presente in quest'area per ora!
                </Text>
                <Text
                  style={{
                    marginVertical: 20,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#000000',
                  }}>
                  Riprova in seguito
                </Text>
                <Text style={{marginVertical: 20, color: '#000000'}}>
                  oppure
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 30,
                    shadowOpacity: 0.5,
                    shadowColor: '#00807a',
                    shadowRadius: 10,
                  }}>
                  <Text
                    style={{
                      padding: 10,
                      fontSize: 18,
                      fontWeight: '600',
                      color: '#00807a',
                    }}>
                    Cambia posizione
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: 2,
                  backgroundColor: '#000000',
                  marginHorizontal: 20,
                  marginTop: 50,
                }}
              />
            </View>
            <View style={{marginTop: 30, alignItems: 'center'}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: '700',
                  color: '#000000',
                }}>
                Rimani sempre aggiornato
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 10,
                  fontSize: 14,
                  fontWeight: '500',
                  color: '#000000',
                }}>
                Iscriviti alla nostra newsletter
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 30,
                  marginTop: 20,
                  shadowOpacity: 0.5,
                  shadowColor: '#00807a',
                  shadowRadius: 10,
                }}>
                <Text
                  style={{
                    padding: 10,
                    fontSize: 18,
                    fontWeight: '600',
                    color: '#00807a',
                  }}>
                  Attiva
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const MagicBox = ({navigation}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#ffffff',
        marginTop: 10,
        borderRadius: 15,
        marginRight: 10,
      }}
      onPress={() => navigation.navigate('MagicBoxScreen')}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        borderRadius={15}
        style={{
          width: 250,
          height: 75,
          borderRadius: 35,
        }}>
        <View
          style={{
            backgroundColor: '#f34e4e',
            marginTop: 10,
            width: 130,
            borderRadius: 20,
            marginLeft: 10,
          }}>
          <Text
            style={{
              color: '#ffffff',
              textAlign: 'center',
              fontWeight: '500',
              fontSize: 12,
            }}>
            Ultimo disponibile!
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#000000',
            borderRadius: 20,
            marginLeft: 10,
            marginTop: 20,
            width: 150,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              color: '#ffffff',
            }}>
            Pizzeria Da Michele
          </Text>
        </View>
      </ImageBackground>
      <View style={{width: 250, height: 100, borderRadius: 15, padding: 10}}>
        <Text style={{color: '#000000', fontSize: 16, fontWeight: '700'}}>
          Magic Box
        </Text>
        <Text style={{color: '#000000', fontSize: 12, fontWeight: '400'}}>
          Ritira oggi 14:00 - 21:00
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="star-outline"
              color={'#000000'}
              size={16}
            />
            <Text style={{fontWeight: '600', color: '#000000'}}>4.8</Text>
            <Text style={{marginHorizontal: 10, color: '#000000'}}>|</Text>
            <Text style={{fontWeight: '600', color: '#000000'}}>1.6 km</Text>
          </View>
          <View>
            <Text style={{color: '#00807a', fontWeight: '800', fontSize: 18}}>
              € 7.99
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const SupermarketBox = ({navigation}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#ffffff',
        height: 170,
        width: 170,
        borderRadius: 15,
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 10,
      }}
      onPress={() => navigation.navigate('SupermarketScreen')}>
      <ImageBackground
        source={{
          uri: 'https://www.efanews.eu/resources/800x800/2e584b17e39c17de8d40fbeac7749532.jpg.jpg',
        }}
        borderRadius={15}
        style={{height: 170, width: 170}}>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Image
            source={{
              uri: 'https://www.foodweb.it/wp-content/uploads/2021/10/Carrefour_logo.jpg',
            }}
            style={{
              borderRadius: 50,
              width: 50,
              height: 50,
            }}
          />
          <View style={{backgroundColor: '#000000', borderRadius: 20}}>
            <Text style={{color: '#ffffff', padding: 5, fontWeight: '600'}}>
              Carrefour
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HomeScreen;
