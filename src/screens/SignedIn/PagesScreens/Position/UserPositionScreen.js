import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Slider} from '@miblanchard/react-native-slider';

const UserPositionScreen = ({navigation}) => {
  const [distanceRange, setDistanceRange] = useState(15);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
            fontWeight: '800',
            textAlign: 'center',
            marginHorizontal: 30,
          }}>
          Scegli una posizione per scoprire gli store intorno a te
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="close"
            size={30}
            color={'#000000'}
            style={{marginRight: 20}}
          />
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#eee', height: 300, marginTop: 20}} />
      <View
        style={{backgroundColor: '#ffffff', borderRadius: 15, marginTop: -10}}>
        <Text
          style={{
            color: '#000000',
            fontSize: 14,
            fontWeight: '800',
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 10,
          }}>
          Seleziona la distanza
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Slider
            value={distanceRange}
            onValueChange={value => setDistanceRange(value)}
            minimumValue={1}
            maximumValue={30}
            containerStyle={{marginHorizontal: 30, width: '75%'}}
          />
          <Text>{Math.round(distanceRange)}</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  backgroundColor: '#ffffff',
                  width: '75%',
                  paddingHorizontal: 20,
                  borderRadius: 30,
                  shadowOffset: {width: 10, height: 10},
                  shadowColor: '#000000',
                  shadowOpacity: 1,
                  elevation: 3,
                }}>
                <MaterialCommunityIcons
                  name="magnify"
                  size={20}
                  color={'#000000'}
                />
                <TextInput
                  placeholder={'Cerca per città'}
                  placeholderTextColor={'#000000'}
                  style={{color: '#000000', width: '100%'}}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <MaterialCommunityIcons
              name="navigation"
              size={30}
              color={'#000000'}
              style={{transform: [{rotateZ: '50deg'}]}}
            />
            <Text style={{color: '#000000', fontSize: 14, fontWeight: '700'}}>
              Utilizza la mia posizione attuale
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#b9ceac',
              borderRadius: 30,
              marginTop: 10,
              marginHorizontal: 50,
              shadowOffset: {width: 10, height: 10},
              shadowColor: '#000000',
              shadowOpacity: 1,
              elevation: 3,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 18,
                fontWeight: '600',
                textAlign: 'center',
                paddingVertical: 10,
              }}>
              Scegli questa posizione
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserPositionScreen;
