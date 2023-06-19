import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeroBagScreen = ({navigation}) => {
  const [storeModalCA,setStoreModalCA] = useState(false); //VARIABILE POPUP COMPELTA ACQUISTO
  const [storeModalMP,setStoreModalMP] = useState(false); // VARIABLE POPUP METODI DI PAGAMENTO
  const [storeModalSC,setStoreModalSC] = useState(false); //VARIABLE POPUP SCELTA CARTA 
  const [storeModalAQ,setStoreModalAQ] = useState(false); //VARIABLE POPUP RIEPILOGO ACQUISTO 


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
              navigation.navigate('StoreBagsScreen');
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
          }}
          onPress={() => {
            setStoreModalCA(true);
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '500',
              fontFamily: 'Poppins-Bold',
              paddingVertical: 20,
              textAlign: 'center',
            }}
            >
            Acquista adesso
          </Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" transparent={true} visible={storeModalCA}>
            {/* <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setStoreModalCA(false);
              }}>
              <MaterialCommunityIcons
                name="close"
                size={30}
                color={'#020905'}
              />
            </TouchableOpacity> */}
            <View
          style={{
            backgroundColor: '#ffffff',
            width: '100%',
            marginBottom: '0%',
            marginTop: '99%',
            alignSelf: 'flex-end',
            borderRadius: 10,
            borderColor: '#000000',
            borderWidth: 0.1,
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
                color: '#3C434B',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
              }}>
              Completa il tuo acquisto
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setStoreModalCA(false);
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
            <View>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 16,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Bold',
                  textAlign: 'left',
                  paddingLeft: '5%',
                  paddingTop:15,
                  
                }}>
                Nome Negozio
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'left',
                  paddingLeft: '5%'
                }}>
                Via Roma 1, 24100, Milano (MI)
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'left',
                  paddingLeft: '5%',
                  paddingTop: '2%',
                }}>
                Ritiro oggi 08:00 - 10:00
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 16,
                    fontWeight: '500',
                    fontFamily: 'Poppins-Bold',
                    textAlign: 'left',
                    paddingLeft: '5%',
                    paddingRight: '10%',
                    paddingTop: '3%'
                  }}>
                  Seleziona la quantità
                </Text>
                <Image
                  source={require('../../../../assets/app/store/meno.png')}
                  style={{
                    paddingTop: '2%',
                    marginStart:35,
                    width: 30,
                    alignSelf: 'center',
                    height: 30,
                  }}
                />
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 22,
                    fontWeight: '500',
                    fontFamily: 'Poppins-Bold',
                    textAlign: 'left',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    paddingTop: '2%'
                  }}>
                  1
                </Text>
                <Image
                  source={require('../../../../assets/app/store/piu.png')}
                  style={{
                    paddingTop: '2%',
                    width: 30,
                    alignSelf: 'center',

                    height: 30,
                  }}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 18,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Bold',
                  textAlign: 'left',
                  paddingLeft: '5%',
                  paddingTop: '2%'
                }}>
                Totale
              </Text>
              <Text
                style={{
                  color: '#21B861',
                  fontSize: 20,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Bold',
                  textAlign: 'right',
                  paddingLeft: '63%',
                  paddingTop: '2%'
                }}>
                4,99
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
          }}
          onPress={() => {
            setStoreModalCA(false);
            setStoreModalMP(true);
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '500',
              fontFamily: 'Poppins-Bold',
              paddingVertical: 20,
              textAlign: 'center',
            }}
            >
            Acquista adesso
          </Text>
        </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={storeModalMP}>
            {/* <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setStoreModalCA(false);
              }}>
              <MaterialCommunityIcons
                name="close"
                size={30}
                color={'#020905'}
              />
            </TouchableOpacity> */}
            <View
          style={{
            backgroundColor: '#ffffff',
            width: '100%',
            marginBottom: '0%',
            marginTop: '113%',
            alignSelf: 'flex-end',
            borderRadius: 15,
            borderBottomColor:'#ffffff',
            borderColor: '#000000',
            borderWidth: 0.1,
            paddingVertical: 20,
            
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              paddingLeft: '1%',
              
            }}>
              <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setStoreModalMP(false);
                setStoreModalCA(true);
              }}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={35}
                color={'#020905'}
              />
            </TouchableOpacity> 
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
                paddingTop:10,
              }}>
              Seleziona il metodo di pagamento 
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setStoreModalMP(false);
              }}>
              <MaterialCommunityIcons
                name="close"
                size={30}
                color={'#020905'}
              />
            </TouchableOpacity> 
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 15,
              borderColor: '#D9E0E8',
              borderWidth: 0.5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              marginTop: 20,
            }}
            onPress={() => {
              setStoreModalMP(false);
              setStoreModalSC(true);
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../../assets/app/payments/cartepagamento.png')}
                style={{width: 30, height: 30,}}
              />
              <View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontWeight: '400',
                    fontFamily: 'Poppins-Regular',
                    paddingLeft:'5%',
                  }}>
                  Le tue carte
                </Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 15,
              borderColor: '#D9E0E8',
              borderWidth: 0.5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              marginTop: 10,
            }}
            onPress={() => {
              setStoreModalMP(false);
              setStoreModalSC(true);
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../../assets/app/payments/google.png')}
                style={{width: 30, height: 30,}}
              />
              <View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontWeight: '400',
                    fontFamily: 'Poppins-Regular',
                    paddingLeft:'5%',
                  }}>
                  Google pay
                </Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 15,
              borderColor: '#D9E0E8',
              borderWidth: 0.5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              marginTop: 10,
            }}
            onPress={() => {
              setStoreModalMP(false);
              setStoreModalSC(true);
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../../assets/app/payments/apple.png')}
                style={{width: 30, height: 30,}}
              />
              <View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontWeight: '400',
                    fontFamily: 'Poppins-Regular',
                    paddingLeft:'5%',
                  }}>
                  Apple pay
                </Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 15,
              borderColor: '#D9E0E8',
              borderWidth: 0.5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              marginTop: 10,
            }}
            onPress={() => {
            setStoreModalMP(false);
            setStoreModalSC(true);
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../../assets/app/payments/paypal.png')}
                style={{width: 30, height: 30,}}
              />
              <View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontWeight: '400',
                    fontFamily: 'Poppins-Regular',
                    paddingLeft:'5%',
                  }}>
                  Paypal
                </Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </TouchableOpacity>
          <View>            
            <View>
            </View>
          </View>
        </View>
            {/* Qui definiamo il modal(popup) e creiamo tutte le cose al suo interno */}
      </Modal>
      <Modal animationType="slide" transparent={true} visible={storeModalSC}>
            {/* <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setStoreModalCA(false);
              }}>
              <MaterialCommunityIcons
                name="close"
                size={30}
                color={'#020905'}
              />
            </TouchableOpacity> */}
            <View
          style={{
            backgroundColor: '#ffffff',
            width: '100%',
            marginBottom: '0%',
            marginTop: '120%',
            alignSelf: 'flex-end',
            borderRadius: 15,
            borderBottomColor:'#ffffff',
            borderColor: '#000000',
            borderWidth: 0.1,
            paddingVertical: 20,
            
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              paddingLeft: '1%',
              
            }}>
              <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setStoreModalSC(false);
                setStoreModalMP(true);
              }}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={35}
                color={'#020905'}
              />
            </TouchableOpacity> 
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
                paddingTop:10,
                marginLeft:'0%',
              }}>
              Scegli tra le carte disponibili
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setStoreModalSC(false);
                
              }}>
              <MaterialCommunityIcons
                name="close"
                size={30}
                color={'#020905'}
              />
            </TouchableOpacity> 
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 15,
              borderColor: '#D9E0E8',
              borderWidth: 0.5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              marginTop: 20,
            }}
            onPress={() => {
              setStoreModalMP(false) 
              setStoreModalAQ(true);
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../../assets/app/payments/cartepagamento.png')}
                style={{width: 30, height: 30,}}
              />
              <View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontWeight: '400',
                    fontFamily: 'Poppins-Regular',
                    paddingLeft:'5%',
                  }}>
                  ******9876
                </Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 15,
              borderColor: '#D9E0E8',
              borderWidth: 0.5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              marginTop: 10,
            }}
            onPress={() => {
              setStoreModalMP(false);
              setStoreModalAQ(true);
              
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../../assets/app/payments/cartepagamento.png')}
                style={{width: 30, height: 30,}}
              />
              <View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontWeight: '400',
                    fontFamily: 'Poppins-Regular',
                    paddingLeft:'5%',
                  }}>
                  ******5856
                </Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 15,
              borderColor: '#D9E0E8',
              borderWidth: 0.5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              marginTop: 10,
            }}
            onPress={() => {
              setStoreModalMP(false);
              navigation.navigate('Addcreditcard');
              
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../../assets/app/payments/aggiungicarta.png')}
                style={{width: 30, height: 30,}}
              />
              <View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontWeight: '400',
                    fontFamily: 'Poppins-Regular',
                    paddingLeft:'5%',
                  }}>
                  Aggiungi carta
                </Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={'#000000'}
            />
          </TouchableOpacity>
          <View>            
            <View>
            </View>
          </View>
        </View>
            {/* Qui definiamo il modal(popup) e creiamo tutte le cose al suo interno */}
      </Modal>
      <Modal animationType="slide" transparent={true} visible={storeModalAQ}>
            {/* <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setStoreModalCA(false);
              }}>
              <MaterialCommunityIcons
                name="close"
                size={30}
                color={'#020905'}
              />
            </TouchableOpacity> */}
            <View
          style={{
            backgroundColor: '#ffffff',
            width: '100%',
            marginBottom: '0%',
            marginTop: '80%',
            alignSelf: 'flex-end',
            borderRadius: 10,
            borderColor: '#000000',
            borderWidth: 0.1,
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
              paddingLeft: '30%',
              
            }}>
            <Text
              style={{
                color: '#3C434B',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
              }}>
              Rivedi il tuo ordine
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setStoreModalAQ(false);
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
            <View>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 16,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Bold',
                  textAlign: 'left',
                  paddingLeft: '5%',
                  paddingTop:15,
                  
                }}>
                Nome Negozio scelto
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'left',
                  paddingLeft: '5%'
                }}>
                Via Roma 1, 24100, Milano (MI)
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'left',
                  paddingLeft: '5%',
                  paddingTop: '2%',
                }}>
                Ritiro oggi 08:00 - 10:00
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 16,
                    fontWeight: '500',
                    fontFamily: 'Poppins-Bold',
                    textAlign: 'left',
                    paddingLeft: '5%',
                    paddingRight: '10%',
                    paddingTop: '3%'
                  }}>
                  Quantità scelta :
                </Text>
                <Image
                  source={require('../../../../assets/app/store/meno.png')}
                  style={{
                    paddingTop: '2%',
                    marginStart:80,
                    width: 30,
                    alignSelf: 'center',
                    height: 30,
                  }}
                />
                <Text
                  style={{
                    color: '#3C434B',
                    fontSize: 22,
                    fontWeight: '500',
                    fontFamily: 'Poppins-Bold',
                    textAlign: 'left',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    paddingTop: '2%'
                  }}>
                  1
                </Text>
                <Image
                  source={require('../../../../assets/app/store/piu.png')}
                  style={{
                    paddingTop: '2%',
                    width: 30,
                    alignSelf: 'center',

                    height: 30,
                  }}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 15,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Bold',
                  textAlign: 'left',
                  paddingLeft: '5%',
                  paddingTop: '5%'
                }}>
                Metodo di pagamento:
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'right',
                  paddingLeft: '6%',
                  paddingTop: '5%'
                }}>
                Mastercard *****8978
              </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 15,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Bold',
                  textAlign: 'left',
                  paddingLeft: '5%',
                  paddingTop: '3%'
                }}>
                Totale ordine : 
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 16,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'right',
                  paddingLeft: '50%',
                  paddingTop: '3%',
                  textDecorationLine: 'line-through',
                }}>
                8,99 €
              </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 15,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Bold',
                  textAlign: 'left',
                  paddingLeft: '5%',
                  paddingTop: '3%'
                }}>
                Prezzo HelloWaste : 
              </Text>
              <Text
                style={{
                  color: '#21B861',
                  fontSize: 20,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Bold',
                  textAlign: 'right',
                  paddingLeft: '37%',
                  paddingTop: '2%',
                  
                }}>
                4,99 €
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
          }}
          onPress={() => {
            setStoreModalAQ(false);
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '500',
              fontFamily: 'Poppins-Bold',
              paddingVertical: 20,
              textAlign: 'center',
            }}
            >
            Acquista il tuo ordine
          </Text>
        </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default HeroBagScreen;
