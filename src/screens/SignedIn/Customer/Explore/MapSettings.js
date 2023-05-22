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
                  fontFamily: 'Poppins-Regular',
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
                fontFamily: 'Poppins-Bold',
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
                  
                  fontFamily: 'Poppins-Bold',
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
                  
                  fontFamily: 'Poppins-Bold',
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
