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
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={45}
            color={'#00807a'}
          />
        </TouchableOpacity>
        <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
          Consigli
        </Text>
      </View>
      <View style={{marginTop: 20, marginHorizontal: 10}}>
        <Text style={{color: '#000000', fontSize: 16, marginBottom: 10}}>
          Seleziona qui le tue preferenze
        </Text>
        <View>
          {!readyMeal ? (
            <TouchableOpacity
              style={{
                backgroundColor: '#3b3b3b',
                marginBottom: 10,
                borderRadius: 10,
                height: 50,
                justifyContent: 'center',
              }}
              onPress={() => setReadyMeal(!readyMeal)}>
              <Text style={{color: '#ffffff', marginLeft: 10, fontSize: 20}}>
                Pasti pronti
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#00807a',
                marginBottom: 10,
                borderRadius: 10,
                height: 50,
                justifyContent: 'center',
              }}
              onPress={() => setReadyMeal(!readyMeal)}>
              <Text style={{color: '#ffffff', marginLeft: 10, fontSize: 20}}>
                Pasti pronti
              </Text>
            </TouchableOpacity>
          )}
          {!food ? (
            <TouchableOpacity
              style={{
                backgroundColor: '#3b3b3b',
                marginBottom: 10,
                borderRadius: 10,
                height: 50,
                justifyContent: 'center',
              }}
              onPress={() => setFood(!food)}>
              <Text style={{color: '#ffffff', marginLeft: 10, fontSize: 20}}>
                Alimentari
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#00807a',
                marginBottom: 10,
                borderRadius: 10,
                height: 50,
                justifyContent: 'center',
              }}
              onPress={() => setFood(!food)}>
              <Text style={{color: '#ffffff', marginLeft: 10, fontSize: 20}}>
                Alimentari
              </Text>
            </TouchableOpacity>
          )}
          {!bakery ? (
            <TouchableOpacity
              style={{
                backgroundColor: '#3b3b3b',
                marginBottom: 10,
                borderRadius: 10,
                height: 50,
                justifyContent: 'center',
              }}
              onPress={() => setBakery(!bakery)}>
              <Text style={{color: '#ffffff', marginLeft: 10, fontSize: 20}}>
                Prodotti da forno
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#00807a',
                marginBottom: 10,
                borderRadius: 10,
                height: 50,
                justifyContent: 'center',
              }}
              onPress={() => setBakery(!bakery)}>
              <Text style={{color: '#ffffff', marginLeft: 10, fontSize: 20}}>
                Prodotti da forno
              </Text>
            </TouchableOpacity>
          )}
          {!other ? (
            <TouchableOpacity
              style={{
                backgroundColor: '#3b3b3b',
                marginBottom: 10,
                borderRadius: 10,
                height: 50,
                justifyContent: 'center',
              }}
              onPress={() => setOther(!other)}>
              <Text style={{color: '#ffffff', marginLeft: 10, fontSize: 20}}>
                Altro
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#00807a',
                marginBottom: 10,
                borderRadius: 10,
                height: 50,
                justifyContent: 'center',
              }}
              onPress={() => setOther(!other)}>
              <Text style={{color: '#ffffff', marginLeft: 10, fontSize: 20}}>
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
                borderRadius: 10,
                height: 50,
                justifyContent: 'center',
              }}>
              <Text style={{color: '#ffffff', marginLeft: 10, fontSize: 20}}>
                Nessuna
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#3b3b3b',
                marginBottom: 10,
                borderRadius: 10,
                height: 50,
                justifyContent: 'center',
              }}
              onPress={() => setFoodPreferences(0)}>
              <Text style={{color: '#ffffff', marginLeft: 10, fontSize: 20}}>
                Nessuna
              </Text>
            </TouchableOpacity>
          )}
          {foodPreferences == 1 ? (
            <View
              style={{
                backgroundColor: '#00807a',
                marginBottom: 10,
                borderRadius: 10,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <MaterialCommunityIcons
                name="food-apple-outline"
                size={20}
                color={'#ffffff'}
              />
              <Text style={{color: '#ffffff', marginLeft: 10, fontSize: 20}}>
                Vegetariano
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#3b3b3b',
                marginBottom: 10,
                borderRadius: 10,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}
              onPress={() => setFoodPreferences(1)}>
              <MaterialCommunityIcons
                name="food-apple-outline"
                size={20}
                color={'#ffffff'}
              />
              <Text style={{color: '#ffffff', marginLeft: 10, fontSize: 20}}>
                Vegetariano
              </Text>
            </TouchableOpacity>
          )}
          {foodPreferences == 2 ? (
            <View
              style={{
                backgroundColor: '#00807a',
                marginBottom: 10,
                borderRadius: 10,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <MaterialCommunityIcons
                name="sprout-outline"
                size={20}
                color={'#ffffff'}
              />
              <Text style={{color: '#ffffff', marginLeft: 10, fontSize: 20}}>
                Vegano
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#3b3b3b',
                marginBottom: 10,
                borderRadius: 10,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}
              onPress={() => setFoodPreferences(2)}>
              <MaterialCommunityIcons
                name="sprout-outline"
                size={20}
                color={'#ffffff'}
              />
              <Text style={{color: '#ffffff', marginLeft: 10, fontSize: 20}}>
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
