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
    <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1, paddingTop: 20}}>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={40}
          color={'#000000'}
        />
        <Text style={{color: '#000000', fontSize: 24, fontWeight: '600'}}>
          Il meglio nella zona
        </Text>
      </TouchableOpacity>
      <View>
        <ScrollView
          style={{marginHorizontal: 0, marginTop: 20, marginBottom: 50}}
          showsVerticalScrollIndicator={false}>
          <StoreBox />
          <StoreBox />
          <StoreBox />
          <StoreBox />
        </ScrollView>
      </View>
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
              
              fontSize: 18,
            }}>
            € 7.99
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const StoreBox = () => {
  return (
    <Pressable style={{marginHorizontal: 10, marginRight: 30}}>
      <View
        style={{
          backgroundColor: '#ffffff',
          height: 170,
          width: '100%',
          margin: 5,
          marginTop: 10,
          borderRadius: 15,
          flexDirection: 'column-reverse',
          shadowOffset: {width: 10, height: 10},
          shadowColor: '#000000',
          shadowOpacity: 1,
          elevation: 5,
        }}>
        <ImageBackground
          source={{
            uri: 'https://static.fanpage.it/wp-content/uploads/sites/30/2021/10/poke-1200x675.jpg',
          }}
          borderRadius={15}
          style={{
            height: 170,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              shadowOffset: {width: 10, height: 10},
              shadowColor: '#000000',
              shadowOpacity: 1,
              elevation: 5,
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 26,
                fontWeight: '900',
                shadowColor: '#000000',
              }}>
              Pokè take away
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          marginLeft: 15,
          marginRight: 7,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
          Ritiro: 14:00 - 16:00
        </Text>
      </View>
      <View
        style={{
          marginLeft: 15,
          marginRight: 7,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="thumb-up-outline"
            size={18}
            color={'#000000'}
            style={{
              marginRight: 5,
            }}
          />
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '600',
              marginRight: 5,
            }}>
            90%
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '600',
              marginRight: 5,
            }}>
            |
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '600',
              marginRight: 5,
            }}>
            3.7 km
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 15,
            backgroundColor: '#d8e5d1',
            padding: 1,
            paddingHorizontal: 5,
          }}>
          <MaterialCommunityIcons
            name="basket-outline"
            size={16}
            color={'#000000'}
            style={{marginRight: 3}}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
              Bag:
            </Text>
            <Text style={{color: '#000000', fontSize: 14, fontWeight: '700'}}>
              17
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MagicBoxListScreen;
