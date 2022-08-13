import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PaymentsSetupScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={45}
            color={'#000000'}
          />
        </TouchableOpacity>
        <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
          Metodi di pagamento
        </Text>
      </View>
      <View style={{margin: 10}}>
        <Text style={{color: '#000000', fontSize: 16, fontWeight: '800'}}>
          Carte di pagamento
        </Text>
        <Text
          style={{
            color: '#000000',
            fontSize: 14,
            fontWeight: '600',
            marginTop: 10,
          }}>
          Non hai ancora inserito carte per il pagamento.
        </Text>
        <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
          Potrai inserirne una quando procederai ad un acquisto.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PaymentsSetupScreen;
