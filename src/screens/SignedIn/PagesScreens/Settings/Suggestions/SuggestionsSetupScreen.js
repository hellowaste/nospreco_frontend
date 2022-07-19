import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SuggestionsSetupScreen = ({navigation}) => {
  const [readyMeal, setReadyMeal] = useState(false);
  const [bakery, setBakery] = useState(false);
  const [food, setFood] = useState(false);
  const [other, setOther] = useState(false);
  const [foodPreferences, setFoodPreferences] = useState(0);
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
          Consigli
        </Text>
      </View>
      <View style={{marginTop: 20, marginHorizontal: 10}}>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
            fontWeight: '700',
            marginBottom: 10,
          }}>
          Seleziona qui le tue preferenze
        </Text>
        <View>
          {!readyMeal ? (
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                marginBottom: 10,
                borderRadius: 15,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 3,
              }}
              onPress={() => setReadyMeal(!readyMeal)}>
              <MaterialCommunityIcons
                name="food-takeout-box-outline"
                size={20}
                color={'#000000'}
              />
              <Text
                style={{
                  color: '#000000',
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Pasti pronti
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#00807a',
                marginBottom: 10,
                borderRadius: 15,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 3,
              }}
              onPress={() => setReadyMeal(!readyMeal)}>
              <MaterialCommunityIcons
                name="food-takeout-box-outline"
                size={20}
                color={'#ffffff'}
              />
              <Text
                style={{
                  color: '#ffffff',
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Pasti pronti
              </Text>
            </TouchableOpacity>
          )}
          {!food ? (
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                marginBottom: 10,
                borderRadius: 15,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 3,
              }}
              onPress={() => setFood(!food)}>
              <MaterialCommunityIcons
                name="food-steak"
                size={20}
                color={'#000000'}
              />
              <Text
                style={{
                  color: '#000000',
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Alimentari
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#00807a',
                marginBottom: 10,
                borderRadius: 15,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 3,
              }}
              onPress={() => setFood(!food)}>
              <MaterialCommunityIcons
                name="food-steak"
                size={20}
                color={'#ffffff'}
              />
              <Text
                style={{
                  color: '#ffffff',
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Alimentari
              </Text>
            </TouchableOpacity>
          )}
          {!bakery ? (
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                marginBottom: 10,
                borderRadius: 15,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 3,
              }}
              onPress={() => setBakery(!bakery)}>
              <MaterialCommunityIcons
                name="food-croissant"
                size={20}
                color={'#000000'}
              />
              <Text
                style={{
                  color: '#000000',
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Prodotti da forno
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#00807a',
                marginBottom: 10,
                borderRadius: 15,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 3,
              }}
              onPress={() => setBakery(!bakery)}>
              <MaterialCommunityIcons
                name="food-croissant"
                size={20}
                color={'#ffffff'}
              />
              <Text
                style={{
                  color: '#ffffff',
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Prodotti da forno
              </Text>
            </TouchableOpacity>
          )}
          {!other ? (
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                marginBottom: 10,
                borderRadius: 15,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 3,
              }}
              onPress={() => setOther(!other)}>
              <MaterialCommunityIcons
                name="food-fork-drink"
                size={20}
                color={'#000000'}
              />
              <Text
                style={{
                  color: '#000000',
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Altro
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#00807a',
                marginBottom: 10,
                borderRadius: 15,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 3,
              }}
              onPress={() => setOther(!other)}>
              <MaterialCommunityIcons
                name="food-fork-drink"
                size={20}
                color={'#ffffff'}
              />
              <Text
                style={{
                  color: '#ffffff',
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Altro
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
            fontWeight: '500',
            marginBottom: 10,
          }}>
          Preferenze alimentari
        </Text>
        <View>
          {foodPreferences == 0 ? (
            <View
              style={{
                backgroundColor: '#00807a',
                marginBottom: 10,
                borderRadius: 15,
                height: 50,
                justifyContent: 'center',
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 3,
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Nessuna
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                marginBottom: 10,
                borderRadius: 15,
                height: 50,
                justifyContent: 'center',
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 3,
              }}
              onPress={() => setFoodPreferences(0)}>
              <Text
                style={{
                  color: '#000000',
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Nessuna
              </Text>
            </TouchableOpacity>
          )}
          {foodPreferences == 1 ? (
            <View
              style={{
                backgroundColor: '#00807a',
                marginBottom: 10,
                borderRadius: 15,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 3,
              }}>
              <MaterialCommunityIcons
                name="food-apple-outline"
                size={20}
                color={'#ffffff'}
              />
              <Text
                style={{
                  color: '#ffffff',
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Vegetariano
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                marginBottom: 10,
                borderRadius: 15,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 3,
              }}
              onPress={() => setFoodPreferences(1)}>
              <MaterialCommunityIcons
                name="food-apple-outline"
                size={20}
                color={'#000000'}
              />
              <Text
                style={{
                  color: '#000000',
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Vegetariano
              </Text>
            </TouchableOpacity>
          )}
          {foodPreferences == 2 ? (
            <View
              style={{
                backgroundColor: '#00807a',
                marginBottom: 10,
                borderRadius: 15,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 3,
              }}>
              <MaterialCommunityIcons
                name="sprout-outline"
                size={20}
                color={'#ffffff'}
              />
              <Text
                style={{
                  color: '#ffffff',
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Vegano
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                marginBottom: 10,
                borderRadius: 15,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                shadowOffset: {width: 10, height: 10},
                shadowColor: '#000000',
                shadowOpacity: 1,
                elevation: 3,
              }}
              onPress={() => setFoodPreferences(2)}>
              <MaterialCommunityIcons
                name="sprout-outline"
                size={20}
                color={'#000000'}
              />
              <Text
                style={{
                  color: '#000000',
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Vegano
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuggestionsSetupScreen;
