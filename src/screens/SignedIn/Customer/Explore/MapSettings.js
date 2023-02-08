import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Slider} from '@miblanchard/react-native-slider';

const MapSettings = ({navigation}) => {
  const [currentLat, setCurrentLat] = useState(45.464194547658806);
  const [currentLong, setCurrentLong] = useState(9.190585679617246);
  const [range, setRange] = useState(5);
  const [confirmModal, setConfirmModal] = useState(false);
  const [hideRange, setHideRange] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View
        style={{
          position: 'absolute',
          zIndex: 999,
          marginTop: 30,
          height: '93%',
          justifyContent: 'space-between',
        }}
        pointerEvents={'box-none'}>
        <Modal animationType="slide" transparent={true} visible={confirmModal}>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              marginHorizontal: 10,
              marginTop: 100,
              paddingVertical: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                  textAlign: 'center',
                  marginRight: 70,
                  marginLeft: 70,
                }}>
                Posizione
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setConfirmModal(false);
                }}>
                <MaterialCommunityIcons
                  name="close"
                  size={20}
                  color={'#000000'}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#D9E0E8',
                height: 1,
                width: 300,
                alignSelf: 'center',
                marginVertical: 10,
              }}
            />
            <Text
              style={{
                color: '#000000',
                fontSize: 18,
                fontWeight: '600',
                fontFamily: 'poppins',
                textAlign: 'center',
              }}>
              Vuoi ricordare questa scelta per il futuro?
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#21B861',
                borderRadius: 10,
                marginHorizontal: 40,
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
                Si, ricorda la mia scelta
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#F2FDF7',
                borderRadius: 10,
                marginHorizontal: 40,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  color: '#21B861',
                  fontSize: 16,
                  fontWeight: '700',
                  fontFamily: 'poppins',
                  textAlign: 'center',
                  paddingVertical: 15,
                }}>
                No, usa solo questa volta
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            padding: 10,
            borderRadius: 10,
            opacity: 0.5,
            marginLeft: 10,
            marginTop: 20,
            width: 50,
            height: 50,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={30}
            color={'#000000'}
          />
        </TouchableOpacity>
        {hideRange === false ? (
          <View
            style={{
              backgroundColor: '#ffffff',
              height: 250,
              borderRadius: 20,
              width: '115%',
              marginBottom: -20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 100,
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'poppins',
                  textAlign: 'center',
                  paddingRight: 30,
                }}>
                Seleziona la distanza massima
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setHideRange(true);
                }}>
                <MaterialCommunityIcons
                  name="close"
                  size={20}
                  color={'#000000'}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#D9E0E8',
                height: 1,
                marginVertical: 10,
                width: '90%',
                alignSelf: 'center',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#F9FAFB',
                  borderRadius: 10,
                  width: '50%',
                  marginLeft: 10,
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
              <View
                style={{
                  backgroundColor: '#F9FAFB',
                  padding: 15,
                  borderRadius: 10,
                  marginLeft: 10,
                }}>
                <MaterialCommunityIcons
                  name="crosshairs"
                  size={25}
                  color={'#21B861'}
                />
              </View>
              <View
                style={{
                  backgroundColor: '#F9FAFB',
                  padding: 15,
                  borderRadius: 10,
                  marginLeft: 10,
                }}>
                <MaterialCommunityIcons
                  name="magnify"
                  size={25}
                  color={'#21B861'}
                />
              </View>
            </View>
            <Slider
              containerStyle={{
                marginLeft: 30,
                marginRight: 100,
              }}
              minimumTrackTintColor={'#21B861'}
              maximumTrackTintColor={'#CED5DD'}
              thumbTintColor={'#21B861'}
              minimumValue={3}
              maximumValue={20}
              step={1}
              value={range}
              onValueChange={value => {
                setRange(value);
              }}
            />
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'poppins',
                marginLeft: 30,
              }}>
              {range} km
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#21B861',
                borderRadius: 10,
                width: 250,
                marginTop: 10,
                marginLeft: 80,
              }}
              onPress={() => {
                setConfirmModal(true);
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
                Conferma
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
        {hideRange === true ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginLeft: 50,
            }}>
            <View
              style={{
                backgroundColor: '#F2FDF7',
                borderRadius: 10,
                marginRight: 50,
              }}>
              <Text
                style={{
                  color: '#21B861',
                  fontSize: 16,
                  fontWeight: '700',
                  fontFamily: 'poppins',
                  textAlign: 'center',
                  paddingVertical: 15,
                  paddingHorizontal: 50,
                }}>
                Store vicini
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#F2FDF7',
                borderRadius: 10,
              }}>
              <MaterialCommunityIcons
                name="crosshairs"
                size={30}
                color={'#21B861'}
                style={{
                  padding: 10,
                }}
              />
            </View>
          </View>
        ) : null}
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
    </SafeAreaView>
  );
};

export default MapSettings;
