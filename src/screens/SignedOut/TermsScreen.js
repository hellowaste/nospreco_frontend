import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TermsScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            color={'#000000'}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 23,
            fontWeight: '600',
            color: '#000000',
            marginLeft: 20,
          }}>
          Termini e condizioni d'uso
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TermsScreen;
