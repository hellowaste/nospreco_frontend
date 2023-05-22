import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeroBagScreen = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: 0,
      }}>
      <ImageBackground
        source={require('../../../../assets/app/store/img-1.png')}
        style={{
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginRight: 15,
          }}>
          <TouchableOpacity
            style={{
              marginTop: 50,
              marginLeft: 30,
              backgroundColor: 'rgba(255,255,255,0.35)',
              borderRadius: 10,
            }} onPress={() => {
              navigation.goBack();
          }}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={30}
              color={'#ffffff'}
              style={{
                margin: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 50,
              marginLeft: 30,
              backgroundColor: 'rgba(255,255,255,0.35)',
              borderRadius: 10,
            }}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={30}
              color={'#ffffff'}
              style={{
                margin: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: 'rgba(255,255,255,0.35)',
            borderRadius: 10,
            alignSelf: 'flex-end',
            marginRight: 15,
          }}>
          <MaterialCommunityIcons
            name="share-variant-outline"
            size={30}
            color={'#ffffff'}
            style={{
              margin: 10,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#21B861',
            borderRadius: 10,
            width: '60%',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Bold',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            6 disponibili
          </Text>
        </View>
      </ImageBackground>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Bold',
            }}>
            HeroBag Pasti pronti
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 16,
                
                fontFamily: 'Poppins-Bold',
              }}>
              € 8,99
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
          }}>
          <Text
            style={{
              color: '#020905',
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Ritiro oggi 08:00 - 11:00
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#020905',
                fontSize: 12,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
                textDecorationLine: 'line-through',
              }}>
              € 11,99
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#D9E0E8',
            height: 1,
            marginHorizontal: 15,
            marginTop: 20,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Bold',
            }}>
            Nome Store
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="star" size={20} color={'#FBBC04'} />
            <Text
              style={{
                color: '#020905',
                fontSize: 12,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
              }}>
              4.2
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
          }}>
          <Text
            style={{
              color: '#020905',
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Via Roma 1, 24100, Milano (MI)
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="map-marker"
              size={20}
              color={'#8C979D'}
            />
            <Text
              style={{
                color: '#020905',
                fontSize: 12,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
              }}>
              8,3 Km
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginLeft: 15,
          }}>
          <Text
            style={{
              color: '#21B861',
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'Poppins-Bold',
              
            }}>
            Vedi mappa
          </Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#D9E0E8',
            height: 1,
            marginHorizontal: 15,
            marginTop: 20,
          }}
        />
        <Text
          style={{
            color: '#020905',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Bold',
            marginLeft: 15,
            marginTop: 10,
          }}>
          Info sulla bag:
        </Text>
        <Text
          style={{
            color: '#3C434B',
            fontSize: 14,
            fontWeight: '400',
            fontFamily: 'Poppins-Regular',
            marginLeft: 15,
            marginTop: 10,
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 15,
            marginTop: 20,
          }}>
          <Image
            source={require('../../../../assets/app/categories/logos/alimentari.png')}
            style={{
              width: 30,
              height: 30,
            }}
          />
          <Text
            style={{
              color: '#020905',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Bold',
              marginLeft: 15,
              marginTop: 10,
            }}>
            Alimentari
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#21B861',
            width: '90%',
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 20,
            marginBottom: 80,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '500',
              fontFamily: 'Poppins-Bold',
              paddingVertical: 20,
              textAlign: 'center',
            }}>
            Acquista adesso
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HeroBagScreen;
