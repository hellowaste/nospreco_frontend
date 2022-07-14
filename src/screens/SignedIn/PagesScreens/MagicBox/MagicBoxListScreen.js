import React from 'react';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const image = {
  uri: 'https://media-assets.vanityfair.it/photos/61e444841e21bc3bd54b5357/1:1/w_2832,h_2832,c_limit/pizza%20tendenze.jpg',
};

const MagicBoxListScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#b9ceac', flex: 1}}>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={40}
          color={'#000000'}
        />
        <Text style={{color: '#000000', fontSize: 24, fontWeight: '600'}}>
          In offerta oggi
        </Text>
      </TouchableOpacity>
      <ScrollView
        style={{marginHorizontal: 20, marginTop: 20}}
        showsVerticalScrollIndicator={false}>
        <MagicBox navigation={navigation} />
        <MagicBox navigation={navigation} />
        <MagicBox navigation={navigation} />
        <MagicBox navigation={navigation} />
        <MagicBox navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const MagicBox = ({navigation}) => {
  return (
    <Pressable
      style={{
        backgroundColor: '#ffffff',
        marginTop: 10,
        borderRadius: 15,
        marginRight: 10,
        shadowOffset: {width: 10, height: 10},
        shadowColor: '#000000',
        shadowOpacity: 1,
        elevation: 5,
      }}
      onPress={() => navigation.navigate('MagicBoxScreen')}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        borderRadius={15}
        style={{
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
      <View
        style={{
          height: 100,
          borderRadius: 15,
          paddingLeft: 20,
          paddingTop: 10,
          backgroundColor: '#ffffff',
        }}>
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
            marginRight: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="star-half-full"
              color={'#000000'}
              size={16}
            />
            <Text style={{fontWeight: '600', color: '#000000'}}>4.8</Text>
            <Text style={{marginHorizontal: 10, color: '#000000'}}>|</Text>
            <Text style={{fontWeight: '600', color: '#000000'}}>1.6 km</Text>
          </View>
          <Text
            style={{
              color: '#00807a',
              fontWeight: '800',
              fontSize: 18,
            }}>
            € 7.99
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MagicBoxListScreen;
