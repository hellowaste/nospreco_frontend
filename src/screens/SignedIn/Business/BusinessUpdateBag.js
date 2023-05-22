import React, {useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BusinessUpdateBag = ({navigation}) => {
  const [categoriesVisibility, setCategoriesVisibility] = useState(false);
  const [typeVisibility, setTypeVisibility] = useState(false);
  const [dietVisibility, setDietVisibility] = useState(false);
  const [modalVisibile, setModalVisible] = useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 50,
      }}>
      <Modal animationType="slide" transparent={true} visible={modalVisibile}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '45%',
            alignSelf: 'center',
            borderRadius: 8,
            borderColor: '#000000',
            borderWidth: 0.3,
            paddingVertical: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              paddingBottom: 5,
              paddingLeft: '25%',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
              }}>
              Richiesta completata
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setModalVisible(false);
              }}>
              <MaterialCommunityIcons
                name="close"
                size={30}
                color={'#020905'}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#D9E0E8',
              height: 0.5,
              width: '90%',
              alignSelf: 'center',
            }}
          />
          <View>
            <View
              style={{
                backgroundColor: '#21B861',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                width: 100,
                height: 100,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <MaterialCommunityIcons
                name="check"
                size={50}
                color={'#ffffff'}
              />
            </View>
            <View>
              <Text
                style={{
                  color: '#08875D',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Bold',
                  textAlign: 'center',
                }}>
                Modifica HeroBag
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Bold',
                  textAlign: 'center',
                }}>
                completato correttamente
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('BusinessNavigationMenu');
          }}>
          <MaterialCommunityIcons name="menu" size={20} color={'#000000'} />
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Menù
          </Text>
        </TouchableOpacity>
        <Image
          source={require('../../../assets/logo/app/logo.png')}
          style={{
            width: 40,
            height: 40,
          }}
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('BusinessNotificationCenter');
          }}>
          <MaterialCommunityIcons name="bell" size={20} color={'#000000'} />
          <Text
            style={{
              color: '#000000',
              fontSize: 10,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Notifiche
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#D9E0E8',
          width: '100%',
          marginVertical: 10,
        }}
      />
      <View
        style={{
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={30}
            color={'#000000'}
            style={{
              marginRight: 20,
              marginTop: 5,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'Poppins-Bold',
          }}>
          Modifica HeroBag
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 15,
          marginTop: 10,
          marginBottom: 100,
        }}>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Bold',
          }}>
          Categoria
        </Text>
        <Text
          style={{
            color: '#A3AEB4',
            fontSize: 12,
            fontWeight: '400',
            fontFamily: 'Poppins-Regular',
          }}>
          Ogni HeroBag può contenere solo una categoria di prodotti tra quelli a scelta , qualora fossero disponibili prodotti con categoria diversa sarà sufficiente creare tante HeroBag quante le categorie disponibili tra ivostri prodotti , la categoria altro identifica tutte quelle categorie non presenti nella scelta multipla (per questa categoria è possibile inserire anche prodotti diversi fra loro , ricorda però che non deve contenere prodotti di categorie disponibili nella scelta multipla)
          
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            borderRadius: 10,
            borderColor: '#B5B5B5',
            borderWidth: 0.5,
            marginTop: 10,
          }}
          onPress={() => {
            setCategoriesVisibility(!categoriesVisibility);
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              paddingVertical: 15,
            }}>
            Seleziona una categoria
          </Text>
          {categoriesVisibility === true ? (
            <MaterialCommunityIcons
              name="chevron-up"
              size={20}
              color={'#000000'}
            />
          ) : (
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={'#000000'}
            />
          )}
        </TouchableOpacity>
        {categoriesVisibility === true ? (
          <View
            style={{
              elevation: 5,
              backgroundColor: '#ffffff',
              marginVertical: 15,
              paddingHorizontal: 15,
              borderRadius: 0.5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 10,
                }}>
                Alimentari
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 10,
                }}>
                Amici animali
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 10,
                }}>
                Natura
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 10,
                }}>
                Cura e benessere
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 10,
                }}>
                Fashion
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 10,
                }}>
                Altro
              </Text>
            </View>
          </View>
        ) : null}
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Bold',
            marginTop: 15,
          }}>
          Tipologia
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            borderRadius: 10,
            borderColor: '#B5B5B5',
            borderWidth: 0.5,
            marginTop: 7,
          }}
          onPress={() => {
            setTypeVisibility(!typeVisibility);
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              paddingVertical: 15,
            }}>
            Seleziona una tipologia
          </Text>
          {typeVisibility === true ? (
            <MaterialCommunityIcons
              name="chevron-up"
              size={20}
              color={'#000000'}
            />
          ) : (
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={'#000000'}
            />
          )}
        </TouchableOpacity>
        {typeVisibility === true ? (
          <View
            style={{
              elevation: 5,
              backgroundColor: '#ffffff',
              marginVertical: 15,
              paddingHorizontal: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                  flexDirection: 'row',
                }}
              />
              <Image
                source={require('../../../assets/app/categories/preferencies/pastipronti.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                }}>
                Pasti pronti
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                  flexDirection: 'row',
                }}
              />
              <Image
                source={require('../../../assets/app/categories/preferencies/prodottidabanco.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                }}>
                Prodotti da banco
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                  flexDirection: 'row',
                }}
              />
              <Image
                source={require('../../../assets/app/categories/preferencies/prodottiforno.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                }}>
                Prodotti da forno
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                  flexDirection: 'row',
                }}
              />
              <Image
                source={require('../../../assets/app/categories/preferencies/fruttaverdura.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                }}>
                Frutta e verdura
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                  flexDirection: 'row',
                }}
              />
              <Image
                source={require('../../../assets/app/categories/preferencies/biologico.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                }}>
                Biologico
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                  flexDirection: 'row',
                }}
              />
              <Image
                source={require('../../../assets/app/categories/preferencies/altrepreferenze.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                }}>
                Altro
              </Text>
            </View>
          </View>
        ) : null}
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            marginBottom: -15,
            fontFamily: 'Poppins-Bold',
            marginTop: 15,
          }}>
          Regimi alimentari
        </Text>
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
            marginTop: 15,
          }}>
          Per la categoria alimentari è possibile indicare anche i regimi alimentari)
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            borderRadius: 10,
            borderColor: '#B5B5B5',
            borderWidth: 0.5,
            marginTop: 5,
          }}
          onPress={() => {
            setDietVisibility(!dietVisibility);
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              paddingVertical: 15,
            }}>
            Seleziona regimi alimentari
          </Text>
          {dietVisibility === true ? (
            <MaterialCommunityIcons
              name="chevron-up"
              size={20}
              color={'#000000'}
            />
          ) : (
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={'#000000'}
            />
          )}
        </TouchableOpacity>
        {dietVisibility === true ? (
          <View
            style={{
              elevation: 5,
              backgroundColor: '#ffffff',
              marginVertical: 15,
              paddingHorizontal: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 10,
                }}>
                Nessuna preferenza
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 10,
                }}>
                Vegano
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 10,
                }}>
                Vegetariano
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 10,
                }}>
                Senza glutine
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#21B861',
                  borderWidth: 0.5,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 10,
                }}>
                Senza lattosio
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#F2FDF7',
                borderRadius: 10,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  color: '#21B861',
                  fontSize: 16,
                  
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'center',
                  paddingVertical: 10,
                }}>
                Conferma regimi alimentari
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
        <Text
          style={{
            color: '#6D747C',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Poppins-Bold',
            marginTop: 15,
          }}>
          Descrizione contenuto
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            borderRadius: 10,
            borderColor: '#B5B5B5',
            borderWidth: 0.5,
            marginTop: 6,
          }}>
          <TextInput
            placeholder="Inserisci la descrizione della HeroBag"
            placeholderTextColor={'#000000'}
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              paddingVertical: 15,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Nome:{' '}
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Bold',
            }}>
            Inserisci categoria per vedere il nome
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Codice HeroBag:{' '}
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            - - -
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              color: '#6D747C',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Disponibilità:
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '30%',
            }}>
            <Text>Quantità</Text>
            <View
              style={{
                borderRadius: 10,
                borderColor: '#D9E0E8',
                borderWidth: 1,
                alignItems: 'center',
                marginTop: 5,
              }}>
              <TextInput
                placeholder="-"
                placeholderTextColor={'#000000'}
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Bold',
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: '30%',
            }}>
            <Text>Valore reale</Text>
            <View
              style={{
                borderRadius: 10,
                borderColor: '#D9E0E8',
                borderWidth: 1,
                alignItems: 'center',
                marginTop: 5,
              }}>
              <TextInput
                placeholder="€ 0,00"
                placeholderTextColor={'#000000'}
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: '30%',
            }}>
            <Text>Prezzo in app*</Text>
            <View
              style={{
                borderRadius: 10,
                borderColor: '#D9E0E8',
                borderWidth: 1,
                alignItems: 'center',
                marginTop: 5,
              }}>
              <TextInput
                placeholder="€ 0,00"
                placeholderTextColor={'#000000'}
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}
              />
            </View>
          </View>
        </View>
        <Text
          style={{
            color: '#A3AEB4',
            fontSize: 10,
            fontWeight: '500',
            fontFamily: 'Poppins-Regular',
            marginTop: 10,
          }}>
          *Il prezzo in app viene calcolato automaticamente
          con uno sconto pari a circa il 60% sul valore reale che il cliente avrebbe pagato senza il nostro servizio, più il prezzo offerto sarà basso
          più saranno le opportunità di riuscire a vendere le tue HeroBag.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#21B861',
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              
              fontFamily: 'Poppins-Bold',
              paddingVertical: 15,
              textAlign: 'center',
            }}>
            Salva modifiche
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BusinessUpdateBag;
