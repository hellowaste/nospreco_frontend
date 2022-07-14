import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const OrdersHistoryScreen = ({navigation}) => {
  const [inProgress, setInProgress] = useState(true);
  return (
    <SafeAreaView style={{backgroundColor: '#b9ceac', flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={45}
            color={'#000000'}
          />
        </TouchableOpacity>
        <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
          Storico ordini
        </Text>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {inProgress ? (
            <View
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 15,
                width: '45%',
                margin: 3,
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 5,
              }}>
              <Text
                style={{
                  color: '#00807a',
                  fontSize: 16,
                  fontWeight: '600',
                  paddingVertical: 10,
                  textAlign: 'center',
                }}>
                In corso
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                borderRadius: 15,
                width: '45%',
                margin: 3,
              }}
              onPress={() => setInProgress(true)}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                  fontWeight: '600',
                  paddingVertical: 10,
                  textAlign: 'center',
                }}>
                In corso
              </Text>
            </TouchableOpacity>
          )}
          {inProgress ? (
            <TouchableOpacity
              style={{
                borderRadius: 15,
                width: '45%',
                margin: 3,
              }}
              onPress={() => setInProgress(false)}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                  fontWeight: '600',
                  paddingVertical: 10,
                  textAlign: 'center',
                }}>
                Conclusi
              </Text>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 15,
                width: '45%',
                margin: 3,
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 5,
              }}>
              <Text
                style={{
                  color: '#00807a',
                  fontSize: 16,
                  fontWeight: '600',
                  paddingVertical: 10,
                  textAlign: 'center',
                }}>
                Conclusi
              </Text>
            </View>
          )}
        </View>
      </View>
      <View style={{marginTop: 50}}>
        {inProgress ? (
          <Text
            style={{
              textAlign: 'center',
              color: '#000000',
              fontSize: 16,
              fontWeight: '600',
            }}>
            Non hai ordini in corso
          </Text>
        ) : (
          <Text
            style={{
              textAlign: 'center',
              color: '#000000',
              fontSize: 16,
              fontWeight: '600',
            }}>
            Non hai ordini conclusi
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OrdersHistoryScreen;
