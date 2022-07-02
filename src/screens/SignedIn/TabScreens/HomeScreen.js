import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
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

export default HomeScreen;
