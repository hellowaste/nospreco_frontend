import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Geolocation from '@react-native-community/geolocation';

const HomeScreen = ({navigation}) => {
  // useEffect(() => {
  //   Geolocation.getCurrentPosition(res => {
  //     console.log(JSON.stringify(res));
  //     setUserPosition(res);
  //   });
  // }, []);
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
            navigation.navigate('StoresFiltersScreen');
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

export default HomeScreen;
