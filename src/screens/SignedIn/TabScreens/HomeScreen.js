import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Geolocation from '@react-native-community/geolocation';

const image = {
  uri: 'https://media-assets.vanityfair.it/photos/61e444841e21bc3bd54b5357/1:1/w_2832,h_2832,c_limit/pizza%20tendenze.jpg',
};

const HomeScreen = ({navigation}) => {
  const currentUser = useSelector(state => state.user);
  const [storeVisibility, setStoreVisibility] = useState(true);
  const [userPosition, setUserPosition] = useState('');

  useEffect(() => {
    Geolocation.getCurrentPosition(res => {
      console.log(JSON.stringify(res));
      setUserPosition(res);
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff', paddingTop: 20}}>
      <View
        style={{
          paddingHorizontal: 10,
          paddingBottom: 10,
          zIndex: 99,
          backgroundColor: '#ffffff',
        }}>
        <View>
          <View>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 15,
                marginTop: 15,
                marginHorizontal: 10,
                padding: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  borderRadius: 30,
                  marginBottom: 15,
                  shadowOffset: {width: 10, height: 10},
                  shadowColor: '#a2a2a2',
                  shadowOpacity: 0.5,
                  elevation: 5,
                }}
                onPress={() => navigation.navigate('Categorie')}>
                <MaterialCommunityIcons
                  name="clipboard-list-outline"
                  size={24}
                  color={'#000000'}
                  style={{padding: 5}}
                />
              </TouchableOpacity>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 20,
                    borderColor: '#00807a',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    margin: 5,
                    marginBottom: 15,
                    marginHorizontal: 10,
                    shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    elevation: 10,
                  }}
                  onPress={() => navigation.navigate('SuggestionsSetupScreen')}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 16,
                      fontWeight: '600',
                      paddingVertical: 5,
                      paddingHorizontal: 15,
                      textAlign: 'center',
                    }}>
                    Scegli preferenze
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  borderRadius: 30,
                  marginBottom: 15,
                  shadowOffset: {width: 10, height: 10},
                  shadowColor: '#a2a2a2',
                  shadowOpacity: 0.5,
                  elevation: 5,
                }}
                onPress={() => navigation.navigate('Preferiti')}>
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={24}
                  color={'#000000'}
                  style={{padding: 5}}
                />
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: -10,
                }}
                onPress={() =>
                  navigation.navigate('UserPositionScreen', {
                    userPosition: userPosition,
                  })
                }>
                <Text
                  style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
                  Posizione attuale
                </Text>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={20}
                  color={'#000000'}
                  style={{marginLeft: 10}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#ffffff',
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
              <TouchableOpacity
                onPress={() => navigation.navigate('MagicBoxList')}>
                <Text
                  style={{
                    textAlign: 'left',
                    fontSize: 18,
                    fontWeight: '700',
                    color: '#000000',
                  }}>
                  Il meglio nella zona
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 20,
                  marginRight: 10,
                  shadowOffset: {width: 10, height: 10},
                  shadowColor: '#000000',
                  shadowOpacity: 1,
                  elevation: 5,
                }}
                onPress={() => navigation.navigate('MagicBoxList')}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 5,
                  }}>
                  <MaterialCommunityIcons
                    name="arrow-right"
                    size={20}
                    color={'#313131'}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{marginBottom: 10}}>
              <StoreBox navigation={navigation} />
              <StoreBox navigation={navigation} />
              <StoreBox navigation={navigation} />
            </ScrollView>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'left',
                    fontSize: 18,
                    fontWeight: '700',
                    color: '#000000',
                  }}>
                  Le tue preferenze
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 20,
                  marginRight: 10,
                  shadowOffset: {width: 10, height: 10},
                  shadowColor: '#000000',
                  shadowOpacity: 1,
                  elevation: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 5,
                  }}>
                  <MaterialCommunityIcons
                    name="arrow-right"
                    size={20}
                    color={'#313131'}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{marginBottom: 10}}>
              <StoreBox navigation={navigation} />
              <StoreBox navigation={navigation} />
              <StoreBox navigation={navigation} />
            </ScrollView>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'left',
                    fontSize: 18,
                    fontWeight: '700',
                    color: '#000000',
                  }}>
                  I più vicini a te
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 20,
                  marginRight: 10,
                  shadowOffset: {width: 10, height: 10},
                  shadowColor: '#000000',
                  shadowOpacity: 1,
                  elevation: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 5,
                  }}>
                  <MaterialCommunityIcons
                    name="arrow-right"
                    size={20}
                    color={'#313131'}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{marginBottom: 10}}>
              <StoreBox navigation={navigation} />
              <StoreBox navigation={navigation} />
              <StoreBox navigation={navigation} />
            </ScrollView>
            <View style={{marginTop: 30}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 20,
                  borderColor: '#00807a',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  margin: 5,
                  marginBottom: 15,
                  marginHorizontal: 10,
                  shadowOffset: {width: 10, height: 10},
                  shadowColor: '#000000',
                  shadowOpacity: 1,
                  elevation: 10,
                }}
                onPress={() => navigation.navigate('SuggestedStoreScreen')}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontWeight: '600',
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                    textAlign: 'center',
                  }}>
                  Suggerisci negozio
                </Text>
              </TouchableOpacity>
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
                    margin: 5,
                    shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    elevation: 5,
                  }}>
                  <Text
                    style={{
                      padding: 10,
                      fontSize: 18,
                      fontWeight: '600',
                      color: '#000000',
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
                  margin: 5,
                  shadowOffset: {width: 10, height: 10},
                  shadowColor: '#000000',
                  shadowOpacity: 1,
                  elevation: 5,
                }}>
                <Text
                  style={{
                    padding: 10,
                    fontSize: 18,
                    fontWeight: '600',
                    color: '#000000',
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
    <Pressable
      style={{
        backgroundColor: '#ffffff',
        margin: 10,
        marginTop: 10,
        marginBottom: 15,
        borderRadius: 15,
        marginRight: 10,
        shadowOffset: {width: 10, height: 10},
        shadowColor: '#5d5d5d',
        shadowOpacity: 1,
        elevation: 10,
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
    </Pressable>
  );
};

const StoreBox = ({navigation}) => {
  return (
    <Pressable
      style={{
        marginHorizontal: 10,
      }}
      onPress={() => navigation.navigate('ShopScreen')}>
      <View
        style={{
          backgroundColor: '#ffffff',
          height: 130,
          width: 240,
          margin: 5,
          marginTop: 10,
          borderRadius: 15,
          flexDirection: 'column-reverse',
          shadowOffset: {width: 10, height: 10},
          shadowColor: '#000000',
          shadowOpacity: 1,
          elevation: 5,
        }}>
        <ImageBackground
          source={{
            uri: 'https://static.fanpage.it/wp-content/uploads/sites/30/2021/10/poke-1200x675.jpg',
          }}
          borderRadius={15}
          style={{
            height: 130,
            width: 240,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              shadowOffset: {width: 10, height: 10},
              shadowColor: '#000000',
              shadowOpacity: 1,
              elevation: 5,
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 26,
                fontWeight: '900',
                shadowColor: '#000000',
              }}>
              Pokè take away
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          marginLeft: 15,
          marginRight: 7,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
          Ritiro: 14:00 - 16:00
        </Text>
      </View>
      <View
        style={{
          marginLeft: 15,
          marginRight: 7,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="thumb-up-outline"
            size={18}
            color={'#000000'}
            style={{
              marginRight: 5,
            }}
          />
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '600',
              marginRight: 5,
            }}>
            90%
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '600',
              marginRight: 5,
            }}>
            |
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '600',
              marginRight: 5,
            }}>
            3.7 km
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 15,
            backgroundColor: '#d8e5d1',
            padding: 1,
            paddingHorizontal: 5,
          }}>
          <MaterialCommunityIcons
            name="basket-outline"
            size={16}
            color={'#000000'}
            style={{marginRight: 3}}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
              Bag:
            </Text>
            <Text style={{color: '#000000', fontSize: 14, fontWeight: '700'}}>
              17
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const SupermarketBox = ({navigation}) => {
  return (
    <Pressable
      style={{
        backgroundColor: '#ffffff',
        height: 170,
        width: 170,
        marginBottom: 15,
        borderRadius: 15,
        justifyContent: 'center',
        margin: 5,
        marginTop: 10,
        marginRight: 10,
        shadowOffset: {width: 10, height: 10},
        shadowColor: '#000000',
        shadowOpacity: 1,
        elevation: 10,
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
    </Pressable>
  );
};

export default HomeScreen;
