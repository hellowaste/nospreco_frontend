import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';

const SearchScreen = ({navigation}) => {
  const [visibleMap, setVisibleMap] = useState(true);
  const [optionsVisibile, setOptionsVisible] = useState(false);
  const [searchVisibility, setSearchVisibility] = useState(false);
  const [userPosition, setUserPosition] = useState('');
  const [currentLat, setCurrentLat] = useState(45.464194547658806);
  const [currentLong, setCurrentLong] = useState(9.190585679617246);
  const [storeVisibility, setStoreVisibility] = useState(true);

  // useEffect(() => {
  //   Geolocation.getCurrentPosition(res => {
  //     console.log(JSON.stringify(res));
  //     setUserPosition(res);
  //   });
  // }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      {visibleMap ? (
        <View style={{height: '100%'}}>
          <View
            style={{
              position: 'absolute',
              zIndex: 999,
              marginTop: 20,
              alignSelf: 'center',
              height: '93%',
              justifyContent: 'space-between',
            }}
            pointerEvents={'box-none'}>
            {storeVisibility ? (
              <View style={{paddingTop: 30, marginHorizontal: 30}}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#F9FAFB',
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    setStoreVisibility(!storeVisibility);
                  }}>
                  <View>
                    <MaterialCommunityIcons
                      name="map-marker"
                      size={20}
                      color={'#21B861'}
                      style={{
                        margin: 10,
                        marginVertical: 15,
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#6D747C',
                        fontSize: 14,
                        fontWeight: '500',
                        fontFamily: 'Poppins-Regular',
                      }}>
                      La tua posizione
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 14,
                        fontWeight: '500',
                        fontFamily: 'Poppins-Regular',
                      }}>
                      Milano (entro 10 km)
                    </Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#F9FAFB',
                      borderRadius: 10,
                      height: 50,
                      width: '50%',
                      justifyContent: 'space-between',
                      paddingRight: 10,
                    }}
                    onPress={() => {
                      navigation.navigate('SearchScreen');
                    }}>
                    <MaterialCommunityIcons
                      name="magnify"
                      size={20}
                      color={'#21B861'}
                      style={{
                        margin: 10,
                      }}
                    />
                    <Text
                      style={{
                        color: '#6D747C',
                        fontSize: 12,
                        fontWeight: '400',
                        fontFamily: 'Poppins-Regular',
                        marginRight: 50,
                      }}>
                      Cerca
                    </Text>
                    <View
                      style={{
                        width: 1,
                        backgroundColor: '#A3AEB4',
                        height: 20,
                      }}
                    />
                    <MaterialCommunityIcons
                      name="filter"
                      size={20}
                      color={'#21B861'}
                      style={{margin: 10, marginRight: 10}}
                    />
                  </TouchableOpacity>
                  {!visibleMap ? (
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#F9FAFB',
                        borderRadius: 10,
                      }}
                      onPress={() => {
                        setOptionsVisible(true);
                      }}>
                      <MaterialCommunityIcons
                        name="map-outline"
                        size={20}
                        color={'#21B861'}
                        style={{
                          marginHorizontal: 10,
                        }}
                      />
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 12,
                          fontWeight: '400',
                          fontFamily: 'Poppins-Regular',
                        }}>
                        Mappa
                      </Text>
                      <MaterialCommunityIcons
                        size={20}
                        color={'#000000'}
                        style={{
                          marginHorizontal: 20,
                          marginVertical: 10,
                        }}
                      />
                    </TouchableOpacity>
                  ) : (
                    <View>
                      {/* <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          backgroundColor: '#F9FAFB',
                          borderRadius: 10,
                        }}
                        onPress={() => {
                          setOptionsVisible(false);
                        }}>
                        <MaterialCommunityIcons
                          name="map-outline"
                          size={20}
                          color={'#21B861'}
                          style={{
                            marginHorizontal: 10,
                          }}
                        />
                        <Text
                          style={{
                            color: '#000000',
                            fontSize: 12,
                            fontWeight: '400',
                            fontFamily: 'Poppins-Regular',
                          }}>
                          Mappa
                        </Text>
                        <MaterialCommunityIcons
                          name="chevron-down"
                          size={20}
                          color={'#F9FAFB'}
                          style={{
                            marginHorizontal: 20,
                            marginVertical: 10,
                          }}
                        />
                      </TouchableOpacity> */}
                       <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          backgroundColor: '#F9FAFB',
                          borderRadius: 10,
                          marginTop: 10,
                        }}
                        onPress={() => {
                          setOptionsVisible(false);
                          setVisibleMap(false);
                        }}>
                        <MaterialCommunityIcons
                          name="format-list-bulleted"
                          size={20}
                          color={'#21B861'}
                          style={{
                            marginHorizontal: 10,
                          }}
                        />
                        <Text
                          style={{
                            color: '#000000',
                            fontSize: 12,
                            fontWeight: '400',
                            fontFamily: 'Poppins-Regular',
                          }}>
                          Lista
                        </Text>
                        <MaterialCommunityIcons
                          size={20}
                          color={'#F9FAFB'}
                          style={{
                            marginHorizontal: 20,
                            marginVertical: 10,
                          }}
                        />
                      </TouchableOpacity> 
                    </View>
                  )}
                </View>
              </View>
            ) : (
              <View style={{paddingTop: 30}}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#F9FAFB',
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    setStoreVisibility(!storeVisibility);
                  }}>
                  <View>
                    <MaterialCommunityIcons
                      name="map-marker"
                      size={20}
                      color={'#21B861'}
                      style={{
                        margin: 10,
                        marginVertical: 15,
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#6D747C',
                        fontSize: 14,
                        fontWeight: '500',
                        fontFamily: 'Poppins-Regular',
                      }}>
                      La tua posizione
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 14,
                        fontWeight: '500',
                        fontFamily: 'Poppins-Regular',
                      }}>
                      Milano (entro 10 km)
                    </Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#F9FAFB',
                      borderRadius: 10,
                      height: 50,
                      width: '50%',
                      justifyContent: 'space-between',
                      paddingRight: 10,
                    }}
                    onPress={() => {
                      navigation.navigate('SearchStoresScreen');
                    }}>
                    <MaterialCommunityIcons
                      name="magnify"
                      size={20}
                      color={'#21B861'}
                      style={{
                        margin: 10,
                      }}
                    />
                    <Text
                      style={{
                        color: '#6D747C',
                        fontSize: 12,
                        fontWeight: '400',
                        fontFamily: 'Poppins-Regular',
                        marginRight: 50,
                      }}>
                      Cerca
                    </Text>
                    <View
                      style={{
                        width: 1,
                        backgroundColor: '#A3AEB4',
                        height: 20,
                      }}
                    />
                    <MaterialCommunityIcons
                      name="filter"
                      size={20}
                      color={'#21B861'}
                      style={{margin: 10, marginRight: 10}}
                    />
                  </TouchableOpacity>
                  {!visibleMap ? (
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#F9FAFB',
                        borderRadius: 10,
                      }}
                      onPress={() => {
                        setOptionsVisible(true);
                      }}>
                      <MaterialCommunityIcons
                        name="map-outline"
                        size={20}
                        color={'#21B861'}
                        style={{
                          marginHorizontal: 10,
                        }}
                      />
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 12,
                          fontWeight: '400',
                          fontFamily: 'Poppins-Regular',
                        }}>
                        Mappa
                      </Text>
                      <MaterialCommunityIcons
                        size={20}
                        color={'#000000'}
                        style={{
                          marginHorizontal: 20,
                          marginVertical: 10,
                        }}
                      />
                    </TouchableOpacity>
                  ) : (
                    <View>
                      {/* <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          backgroundColor: '#F9FAFB',
                          borderRadius: 10,
                        }}
                        onPress={() => {
                          setOptionsVisible(false);
                        }}>
                        <MaterialCommunityIcons
                          name="map-outline"
                          size={20}
                          color={'#21B861'}
                          style={{
                            marginHorizontal: 10,
                          }}
                        />
                        <Text
                          style={{
                            color: '#000000',
                            fontSize: 12,
                            fontWeight: '400',
                            fontFamily: 'Poppins-Regular',
                          }}>
                          Mappa
                        </Text>
                        <MaterialCommunityIcons
                          name="chevron-down"
                          size={20}
                          color={'#F9FAFB'}
                          style={{
                            marginHorizontal: 20,
                            marginVertical: 10,
                          }}
                        />
                      </TouchableOpacity> */}
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          backgroundColor: '#F9FAFB',
                          borderRadius: 10,
                          marginTop: 10,
                        }}
                        onPress={() => {
                          setOptionsVisible(false);
                          setVisibleMap(false);
                        }}>
                        <MaterialCommunityIcons
                          name="format-list-bulleted"
                          size={20}
                          color={'#21B861'}
                          style={{
                            marginHorizontal: 10,
                          }}
                        />
                        <Text
                          style={{
                            color: '#000000',
                            fontSize: 12,
                            fontWeight: '400',
                            fontFamily: 'Poppins-Regular',
                          }}>
                          Lista
                        </Text>
                        <MaterialCommunityIcons
                          size={20}
                          color={'#F9FAFB'}
                          style={{
                            marginHorizontal: 20,
                            marginVertical: 10,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            )}
            <View>
              {storeVisibility ? (
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{
                    paddingHorizontal: 0,
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: 10,
                      elevation: 3,
                      flexDirection: 'row',
                      alignItems: 'center',
                      margin: 10,
                      height: 120,
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
                            fontFamily: 'Poppins-Regular',
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
                            fontFamily: 'Poppins-Regular',
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
                          fontFamily: 'Poppins-Regular',
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
                            fontFamily: 'Poppins-Regular',
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
                            fontFamily: 'Poppins-Regular',
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
                      height: 120,
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
                            fontFamily: 'Poppins-Regular',
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
                            fontFamily: 'Poppins-Regular',
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
                          fontFamily: 'Poppins-Regular',
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
                            fontFamily: 'Poppins-Regular',
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
                            fontFamily: 'Poppins-Regular',
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
                      height: 120,
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
                            fontFamily: 'Poppins-Regular',
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
                            fontFamily: 'Poppins-Regular',
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
                          fontFamily: 'Poppins-Regular',
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
                            fontFamily: 'Poppins-Regular',
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
                            fontFamily: 'Poppins-Regular',
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
                      height: 120,
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
                            fontFamily: 'Poppins-Regular',
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
                            fontFamily: 'Poppins-Regular',
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
                          fontFamily: 'Poppins-Regular',
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
                            fontFamily: 'Poppins-Regular',
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
                            fontFamily: 'Poppins-Regular',
                            marginRight: 10,
                          }}>
                          3,0 Km da te
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </ScrollView>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#F9FAFB',
                      borderRadius: 20,
                      width: '70%',
                    }}>
                    <Text
                      style={{
                        color: '#21B861',
                        fontSize: 16,
                        
                        fontFamily: 'Poppins-Bold',
                        textAlign: 'center',
                        paddingVertical: 20,
                      }}>
                      Store vicini
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#F9FAFB',
                      borderRadius: 15,
                      width: '20%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: 15,
                    }}>
                    <MaterialCommunityIcons
                      name="crosshairs-gps"
                      size={30}
                      color={'#21B861'}
                    />
                  </View>
                </View>
              )}
            </View>
          </View>
          <MapView
            showsBuildings={true}
            style={{width: '100%', height: '100%'}}
            initialRegion={{
              latitude: currentLat,
              latitudeDelta: 0.05,
              longitude: currentLong,
              longitudeDelta: 0.05,
            }}
          />
        </View>
      ) : (
        <View
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
              backgroundColor: '#F9FAFB',
              borderRadius: 10,
            }}>
            <View>
              <MaterialCommunityIcons
                name="map-marker"
                size={20}
                color={'#21B861'}
                style={{
                  margin: 10,
                  marginVertical: 15,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                La tua posizione
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                Milano (entro 10 km)
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#F9FAFB',
                borderRadius: 10,
                height: 50,
                width: '50%',
                justifyContent: 'space-between',
                paddingRight: 10,
              }}>
              <MaterialCommunityIcons
                name="magnify"
                size={20}
                color={'#21B861'}
                style={{
                  margin: 10,
                }}
              />
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 12,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                  marginRight: 50,
                }}>
                Cerca
              </Text>
              <View
                style={{
                  width: 1,
                  backgroundColor: '#A3AEB4',
                  height: 20,
                }}
              />
              <MaterialCommunityIcons
                name="filter"
                size={20}
                color={'#21B861'}
                style={{margin: 10, marginRight: 10}}
              />
            </View>
            {visibleMap ? (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#F9FAFB',
                  borderRadius: 10,
                }}
                onPress={() => {
                  setOptionsVisible(false);
                  setVisibleMap(false);
                }}>
                <MaterialCommunityIcons
                  name="format-list-bulleted"
                  size={20}
                  color={'#21B861'}
                  style={{
                    marginHorizontal: 10,
                  }}
                />
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: '400',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Lista
                </Text>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={20}
                  color={'#000000'}
                  style={{
                    marginHorizontal: 20,
                    marginVertical: 10,
                  }}
                />
              </TouchableOpacity>
            ) : (
              <View>
                {/* <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#F9FAFB',
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    setOptionsVisible(false);
                  }}>
                  <MaterialCommunityIcons
                    name="format-list-bulleted"
                    size={20}
                    color={'#21B861'}
                    style={{
                      marginHorizontal: 10,
                    }}
                  />
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 12,
                      fontWeight: '400',
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Lista
                  </Text>
                  <MaterialCommunityIcons
                    name="chevron-down"
                    size={20}
                    color={'#F9FAFB'}
                    style={{
                      marginHorizontal: 20,
                      marginVertical: 10,
                    }}
                  />
                </TouchableOpacity> */}
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#F9FAFB',
                    borderRadius: 10,
                    marginTop: 10,
                  }}
                  onPress={() => {
                    setOptionsVisible(false);
                    setVisibleMap(true);
                  }}>
                  <MaterialCommunityIcons
                    name="map-outline"
                    size={20}
                    color={'#21B861'}
                    style={{
                      marginHorizontal: 10,
                    }}
                  />
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 12,
                      fontWeight: '400',
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Mappa
                  </Text>
                  <MaterialCommunityIcons
                    size={20}
                    color={'#F9FAFB'}
                    style={{
                      marginHorizontal: 20,
                      marginVertical: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View>
            <ScrollView
              horizontal={false}
              showsVerticalScrollIndicator={false}
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
                        fontFamily: 'Poppins-Regular',
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
                        fontFamily: 'Poppins-Regular',
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
                      fontFamily: 'Poppins-Regular',
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
                        fontFamily: 'Poppins-Regular',
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
                        fontFamily: 'Poppins-Regular',
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
                        fontFamily: 'Poppins-Regular',
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
                        fontFamily: 'Poppins-Regular',
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
                      fontFamily: 'Poppins-Regular',
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
                        fontFamily: 'Poppins-Regular',
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
                        fontFamily: 'Poppins-Regular',
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
                        fontFamily: 'Poppins-Regular',
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
                        fontFamily: 'Poppins-Regular',
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
                      fontFamily: 'Poppins-Regular',
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
                        fontFamily: 'Poppins-Regular',
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
                        fontFamily: 'Poppins-Regular',
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
                        fontFamily: 'Poppins-Regular',
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
                        fontFamily: 'Poppins-Regular',
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
                      fontFamily: 'Poppins-Regular',
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
                        fontFamily: 'Poppins-Regular',
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
                        fontFamily: 'Poppins-Regular',
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
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
