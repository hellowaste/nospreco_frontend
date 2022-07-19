import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MagicBoxScreen = ({navigation}) => {
  const [allergiesAlertVisibility, setAllergiesAlertVisibility] =
    useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#b9ceac',
      }}>
      <ImageBackground
        source={{
          uri: 'https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg',
        }}
        style={{width: '100%', height: 200}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              width: 35,
              height: 35,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}
            onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              color={'#000000'}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              width: 35,
              height: 35,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}>
            <MaterialCommunityIcons
              name="share-variant-outline"
              color={'#000000'}
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#000000', marginTop: 120}}>
          <Text
            style={{
              color: '#ffffff',
              fontWeight: '700',
              fontSize: 18,
              marginLeft: 10,
            }}>
            Pizzeria Da Michele
          </Text>
        </View>
      </ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginRight: 20,
          }}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
            <MaterialCommunityIcons
              name="shopping-outline"
              color={'#000000'}
              size={20}
              style={{marginRight: 5}}
            />
            <Text style={{color: '#000000', fontWeight: '700', fontSize: 18}}>
              Magic Box Pizza
            </Text>
          </View>
          <View>
            <Text style={{color: '#000000', fontSize: 25, fontWeight: '800'}}>
              € 7.99
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <MaterialCommunityIcons name="star" size={20} color={'#000000'} />
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '700',
              marginHorizontal: 5,
            }}>
            4,2
          </Text>
          <Text style={{color: '#000000', fontSize: 12}}>(802)</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <MaterialCommunityIcons
            name="clock-outline"
            color={'#000000'}
            size={20}
            style={{marginRight: 5}}
          />
          <Text style={{color: '#000000', fontWeight: '700', fontSize: 18}}>
            Ritira: 14:00 - 21:00
          </Text>
          <View
            style={{
              marginLeft: 10,
              backgroundColor: '#4ea85a',
              borderRadius: 15,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 12,
                fontWeight: '700',
                padding: 3,
                paddingHorizontal: 5,
              }}>
              Oggi
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: '#000000', width: '100%', height: 1}} />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            marginTop: 10,
          }}
          onPress={() => navigation.navigate('ShopDetailsScreen')}>
          <View>
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={20}
              color={'#000000'}
              style={{marginRight: 10}}
            />
          </View>
          <View>
            <Text style={{color: '#000000', fontSize: 16, fontWeight: '700'}}>
              Via Roma, 1 21000 Napoli, NA, Italia
            </Text>
            <Text style={{color: '#676767', fontSize: 14, fontWeight: '600'}}>
              Scopri di più sullo store
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#000000',
            width: '100%',
            height: 1,
            marginTop: 15,
          }}
        />
        <View style={{marginTop: 10, marginLeft: 10}}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '700'}}>
            Cosa puoi trovare
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              marginHorizontal: 10,
              marginTop: 10,
            }}>
            Quello che trovi nella Magic Box è una sorpresa. Al ritiro troverai
            quello che lo store non ha venduto a fine giornata.
          </Text>
          <View
            style={{
              backgroundColor: '#727272',
              alignItems: 'center',
              width: 100,
              borderRadius: 15,
              margin: 10,
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 12,
                fontWeight: '500',
                paddingVertical: 3,
              }}>
              Alimentari
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#000000',
            width: '100%',
            height: 1,
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 10,
          }}
          onPress={() => setAllergiesAlertVisibility(true)}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="food-outline"
              size={20}
              color={'#000000'}
              style={{marginRight: 10}}
            />
            <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
              Ingredienti e allergie
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              color={'#000000'}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#000000',
            width: '100%',
            height: 1,
            marginTop: 10,
          }}
        />
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '700',
              textAlign: 'center',
            }}>
            Il giudizio degli utenti
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <MaterialCommunityIcons
              name="star-half-full"
              size={40}
              color={'#000000'}
            />
            <Text style={{color: '#000000', fontSize: 25, fontWeight: '700'}}>
              4.5/5.0
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#000000',
              width: '50%',
              height: 1,
              marginTop: 10,
              alignSelf: 'center',
            }}
          />
          <View style={{marginTop: 10}}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '700',
                textAlign: 'center',
                marginBottom: 20,
              }}>
              Punti di forza:
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                marginBottom: 10,
              }}>
              <MaterialCommunityIcons
                name="cash"
                size={25}
                color={'#000000'}
                style={{marginRight: 20}}
              />
              <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
                Rapporto qualità prezzo
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <MaterialCommunityIcons
                name="clock-outline"
                size={25}
                color={'#000000'}
                style={{marginRight: 20}}
              />
              <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
                Ritiro veloce
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#000000',
            width: '100%',
            height: 1,
            marginTop: 10,
          }}
        />
        <View style={{marginTop: 10, marginLeft: 10, marginBottom: 30}}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '700'}}>
            Cosa devi sapere
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '400',
              marginHorizontal: 10,
              marginTop: 10,
            }}>
            I prodotti saranno confezionati dallo store.
          </Text>
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            width: '50%',
            borderRadius: 25,
            marginBottom: 10,
            alignSelf: 'center',
            alignItems: 'center',
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 3,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 23,
              fontWeight: '800',
              padding: 10,
            }}>
            Prenota
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={allergiesAlertVisibility}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setAllergiesAlertVisibility(!allergiesAlertVisibility);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Il contenuto della Magic Box è una sorpresa!
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                textAlign: 'center',
                paddingVertical: 20,
              }}>
              Il contenuto dipenderà dagli invenduti del giorno e non è
              prevedibile, chiedi direttamente al momento del ritiro.
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>
                setAllergiesAlertVisibility(!allergiesAlertVisibility)
              }>
              <Text style={styles.textStyle}>Ho capito</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 10,
    shadowColor: '#000000',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#b9ceac',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: '#000000',
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default MagicBoxScreen;
