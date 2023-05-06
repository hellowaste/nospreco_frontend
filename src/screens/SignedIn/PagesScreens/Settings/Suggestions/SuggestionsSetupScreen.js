import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SuggestionsSetupScreen = ({navigation}) => {
  const [readyMeal, setReadyMeal] = useState(false);
  const [bakery, setBakery] = useState(false);
  const [food, setFood] = useState(false);
  const [other, setOther] = useState(false);
  const [foodPreferences, setFoodPreferences] = useState(0);
  const [morning, setMorning] = useState(false);
  const [lateMorning, setLateMorning] = useState(false);
  const [evening, setEvening] = useState(false);
  const [night, setNight] = useState(false);
  const [lateNight, setLateNight] = useState(false);
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1, paddingTop: 20}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={45}
            color={'#000000'}
          />
        </TouchableOpacity>
        <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
          Preferenze
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 20, marginHorizontal: 10}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              
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
                  elevation: 10,
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
                  elevation: 10,
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
                  elevation: 10,
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
                  elevation: 10,
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
                  elevation: 10,
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
                  elevation: 10,
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
                  elevation: 10,
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
                  elevation: 10,
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              {foodPreferences == 0 ? (
                <View
                  style={{
                    backgroundColor: '#00807a',
                    marginBottom: 10,
                    borderRadius: 15,
                    height: 50,
                    width: '45%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    elevation: 10,
                  }}>
                  <Text
                    style={{
                      color: '#ffffff',
                      marginLeft: 10,
                      fontSize: 16,
                      
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
                    width: '45%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    elevation: 10,
                  }}
                  onPress={() => setFoodPreferences(0)}>
                  <Text
                    style={{
                      color: '#000000',
                      marginLeft: 10,
                      fontSize: 16,
                      
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
                    width: '45%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    elevation: 10,
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
                    width: '45%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    elevation: 10,
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
                      
                    }}>
                    Vegetariano
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              {foodPreferences == 2 ? (
                <View
                  style={{
                    backgroundColor: '#00807a',
                    marginBottom: 10,
                    borderRadius: 15,
                    height: 50,
                    width: '45%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    elevation: 10,
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
                    width: '45%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    elevation: 10,
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
                      
                    }}>
                    Vegano
                  </Text>
                </TouchableOpacity>
              )}
              {foodPreferences == 3 ? (
                <View
                  style={{
                    backgroundColor: '#00807a',
                    marginBottom: 10,
                    borderRadius: 15,
                    height: 50,
                    width: '45%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    elevation: 10,
                  }}>
                  <MaterialCommunityIcons
                    name="barley-off"
                    size={20}
                    color={'#ffffff'}
                  />
                  <Text
                    style={{
                      color: '#ffffff',
                      marginLeft: 10,
                      fontSize: 16,
                      
                    }}>
                    Senza Glutine
                  </Text>
                </View>
              ) : (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#ffffff',
                    marginBottom: 10,
                    borderRadius: 15,
                    height: 50,
                    width: '45%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    elevation: 10,
                  }}
                  onPress={() => setFoodPreferences(3)}>
                  <MaterialCommunityIcons
                    name="barley-off"
                    size={20}
                    color={'#000000'}
                  />
                  <Text
                    style={{
                      color: '#000000',
                      marginLeft: 10,
                      fontSize: 16,
                      
                    }}>
                    Senza Glutine
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={{marginBottom: 20}}>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                  fontWeight: '600',
                  marginBottom: 10,
                }}>
                Finestre di ritiro
              </Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}>
                {morning ? (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#00807a',
                      height: 50,
                      width: '45%',
                      borderRadius: 15,
                      padding: 5,
                      alignItems: 'center',
                      shadowOffset: {width: 10, height: 10},
                      shadowColor: '#000000',
                      shadowOpacity: 1,
                      elevation: 10,
                    }}
                    onPress={() => setMorning(false)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: '#ffffff',
                          fontSize: 14,
                          fontWeight: '600',
                        }}>
                        Mattina
                      </Text>
                      <MaterialCommunityIcons
                        name="check"
                        size={20}
                        color={'#ffffff'}
                      />
                    </View>
                    <Text style={{color: '#ffffff'}}>05:00 - 10:00</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#ffffff',
                      height: 50,
                      width: '45%',
                      borderRadius: 15,
                      padding: 5,
                      alignItems: 'center',
                      shadowOffset: {width: 10, height: 10},
                      shadowColor: '#000000',
                      shadowOpacity: 1,
                      elevation: 10,
                    }}
                    onPress={() => setMorning(true)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 14,
                          fontWeight: '600',
                        }}>
                        Mattina
                      </Text>
                    </View>
                    <Text style={{color: '#000000'}}>05:00 - 10:00</Text>
                  </TouchableOpacity>
                )}
                {lateMorning ? (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#00807a',
                      height: 50,
                      width: '45%',
                      borderRadius: 15,
                      padding: 5,
                      alignItems: 'center',
                      shadowOffset: {width: 10, height: 10},
                      shadowColor: '#000000',
                      shadowOpacity: 1,
                      elevation: 10,
                    }}
                    onPress={() => setLateMorning(false)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: '#ffffff',
                          fontSize: 14,
                          fontWeight: '600',
                        }}>
                        Mezzogiorno
                      </Text>
                      <MaterialCommunityIcons
                        name="check"
                        size={20}
                        color={'#ffffff'}
                      />
                    </View>
                    <Text style={{color: '#ffffff'}}>10:00 - 14:00</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#ffffff',
                      height: 50,
                      width: '45%',
                      borderRadius: 15,
                      padding: 5,
                      alignItems: 'center',
                      shadowOffset: {width: 10, height: 10},
                      shadowColor: '#000000',
                      shadowOpacity: 1,
                      elevation: 10,
                    }}
                    onPress={() => setLateMorning(true)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 14,
                          fontWeight: '600',
                        }}>
                        Mezzogiorno
                      </Text>
                    </View>
                    <Text style={{color: '#000000'}}>10:00 - 14:00</Text>
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}>
                {evening ? (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#00807a',
                      height: 50,
                      width: '45%',
                      borderRadius: 15,
                      padding: 5,
                      alignItems: 'center',
                      shadowOffset: {width: 10, height: 10},
                      shadowColor: '#000000',
                      shadowOpacity: 1,
                      elevation: 10,
                    }}
                    onPress={() => setEvening(false)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: '#ffffff',
                          fontSize: 14,
                          fontWeight: '600',
                        }}>
                        Pomeriggio
                      </Text>
                      <MaterialCommunityIcons
                        name="check"
                        size={20}
                        color={'#ffffff'}
                      />
                    </View>
                    <Text style={{color: '#ffffff'}}>14:00 - 18:00</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#ffffff',
                      height: 50,
                      width: '45%',
                      borderRadius: 15,
                      padding: 5,
                      alignItems: 'center',
                      shadowOffset: {width: 10, height: 10},
                      shadowColor: '#000000',
                      shadowOpacity: 1,
                      elevation: 10,
                    }}
                    onPress={() => setEvening(true)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 14,
                          fontWeight: '600',
                        }}>
                        Pomeriggio
                      </Text>
                    </View>
                    <Text style={{color: '#000000'}}>14:00 - 18:00</Text>
                  </TouchableOpacity>
                )}
                {night ? (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#00807a',
                      height: 50,
                      width: '45%',
                      borderRadius: 15,
                      padding: 5,
                      alignItems: 'center',
                      shadowOffset: {width: 10, height: 10},
                      shadowColor: '#000000',
                      shadowOpacity: 1,
                      elevation: 10,
                    }}
                    onPress={() => setNight(false)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: '#ffffff',
                          fontSize: 14,
                          fontWeight: '600',
                        }}>
                        Sera
                      </Text>
                      <MaterialCommunityIcons
                        name="check"
                        size={20}
                        color={'#ffffff'}
                      />
                    </View>
                    <Text style={{color: '#ffffff'}}>18:00 - 24:00</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#ffffff',
                      height: 50,
                      width: '45%',
                      borderRadius: 15,
                      padding: 5,
                      alignItems: 'center',
                      shadowOffset: {width: 10, height: 10},
                      shadowColor: '#000000',
                      shadowOpacity: 1,
                      elevation: 10,
                    }}
                    onPress={() => setNight(true)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 14,
                          fontWeight: '600',
                        }}>
                        Sera
                      </Text>
                    </View>
                    <Text style={{color: '#000000'}}>18:00 - 24:00</Text>
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}>
                {lateNight ? (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#00807a',
                      height: 50,
                      width: '45%',
                      borderRadius: 15,
                      padding: 5,
                      alignItems: 'center',
                      shadowOffset: {width: 10, height: 10},
                      shadowColor: '#000000',
                      shadowOpacity: 1,
                      elevation: 10,
                    }}
                    onPress={() => setLateNight(false)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: '#ffffff',
                          fontSize: 14,
                          fontWeight: '600',
                        }}>
                        Notte
                      </Text>
                      <MaterialCommunityIcons
                        name="check"
                        size={20}
                        color={'#ffffff'}
                      />
                    </View>
                    <Text style={{color: '#ffffff'}}>00:00 - 05:00</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#ffffff',
                      height: 50,
                      width: '45%',
                      borderRadius: 15,
                      padding: 5,
                      alignItems: 'center',
                      shadowOffset: {width: 10, height: 10},
                      shadowColor: '#000000',
                      shadowOpacity: 1,
                      elevation: 10,
                    }}
                    onPress={() => setLateNight(true)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 14,
                          fontWeight: '600',
                        }}>
                        Notte
                      </Text>
                    </View>
                    <Text style={{color: '#000000'}}>00:00 - 05:00</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: '#ffffff',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 50,
            paddingVertical: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 15,
              width: '45%',
              alignItems: 'center',
              shadowOffset: {width: 10, height: 10},
              shadowColor: '#000000',
              shadowOpacity: 1,
              elevation: 10,
            }}
            onPress={() => navigation.goBack()}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                
                paddingVertical: 10,
              }}>
              Cancella tutti
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 15,
              width: '45%',
              alignItems: 'center',
              shadowOffset: {width: 10, height: 10},
              shadowColor: '#000000',
              shadowOpacity: 1,
              elevation: 10,
            }}
            onPress={() => navigation.goBack()}>
            <Text
              style={{
                color: '#00807a',
                fontSize: 16,
                
                paddingVertical: 10,
              }}>
              Salva
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuggestionsSetupScreen;
