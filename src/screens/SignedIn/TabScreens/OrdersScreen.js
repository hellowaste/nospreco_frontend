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

const FavoriteScreen = ({navigation}) => {
  const [orderType, setOrderType] = useState(1);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [confirmValidation, setConfirmValidation] = useState(false);
  const [supportModal, setSupportModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);
  const [confirmCancelModal, setConfirmCancelModal] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);
  const [completeReviewModal, setCompleteReviewModal] = useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#ffffff',
        paddingTop: 50,
        flex: 1,
      }}>
      <Modal animationType="slide" transparent={true} visible={supportModal}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '25%',
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
              paddingLeft: '38%',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
              }}>
              Supporto
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setSupportModal(false);
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
          <ScrollView>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'left',
                }}>
                Richieste di supporto
              </Text>
              <View
                style={{
                  borderColor: '#999da1',
                  borderWidth: 0.3,
                  borderRadius: 10,
                  marginTop: 2,
                }}>
                <TextInput
                  placeholder="Specificare il problema"
                  placeholderTextColor={'#000000'}
                />
              </View>
            </View>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'left',
                }}>
                Nome utente
              </Text>
              <View
                style={{
                  borderColor: '#999da1',
                  borderWidth: 0.3,
                  borderRadius: 10,
                  marginTop: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  placeholder="@NomeUtente"
                  placeholderTextColor={'#000000'}
                />
                <MaterialCommunityIcons
                  name="pencil"
                  size={20}
                  color={'#000000'}
                  style={{marginRight: 10}}
                />
              </View>
            </View>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'left',
                }}>
                Email
              </Text>
              <View
                style={{
                  borderColor: '#999da1',
                  borderWidth: 0.3,
                  borderRadius: 10,
                  marginTop: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  placeholder="indirizzoemail@email.com"
                  placeholderTextColor={'#000000'}
                />
                <MaterialCommunityIcons
                  name="pencil"
                  size={20}
                  color={'#000000'}
                  style={{marginRight: 10}}
                />
              </View>
            </View>
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
              <Text
                style={{
                  color: '#6D747C',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'left',
                }}>
                Quale problema hai riscontrato?
              </Text>
              <View
                style={{
                  borderColor: '#999da1',
                  borderWidth: 0.3,
                  borderRadius: 10,
                  marginTop: 2,
                }}>
                <TextInput
                  placeholder="Spiega cosa è successo"
                  placeholderTextColor={'#000000'}
                />
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              width: '92%',
              marginHorizontal: 10,
              marginTop: 10,
              alignSelf: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 15,
              }}>
              Invia richiesta
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={modalVisibility}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '50%',
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
              paddingLeft: '30%',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
              }}>
              Convalida ordine
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setModalVisibility(false);
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
          <View
            style={{
              marginVertical: 10,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 18,
                fontWeight: '600',
                fontFamily: 'Poppins-Bold',
                paddingHorizontal: 50,
                textAlign: 'center',
              }}>
              Hai ritirato il tuo ordine?
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#21B861',
              width: '92%',
              marginHorizontal: 10,
              marginTop: 10,
              alignSelf: 'center',
              borderRadius: 10,
            }}
            onPress={() => {
              setModalVisibility(false);
              setConfirmValidation(true);
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 15,
              }}>
              Sì, concludi ordine
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#F2FDF7',
              width: '92%',
              marginHorizontal: 10,
              marginTop: 10,
              alignSelf: 'center',
              borderRadius: 10,
            }}
            onPress={() => {
              setModalVisibility(false);
              setSupportModal(true);
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 16,
                
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 15,
              }}>
              No, qualcosa è andato storto
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={cancelModal}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '50%',
            alignSelf: 'center',
            borderRadius: 8,
            borderColor: '#000000',
            borderWidth: 0.5,
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
              paddingLeft: '35%',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
              }}>
              Annulla Ordine
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setCancelModal(false);
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
          <View
            style={{
              marginVertical: 10,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 18,
                fontWeight: '600',
                fontFamily: 'Poppins-Bold',
                paddingHorizontal: 50,
                textAlign: 'center',
              }}>
              Sei sicuro di voler annullare il tuo ordine?
            </Text>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                paddingHorizontal: 50,
                textAlign: 'center',
              }}>
              L'ordine può essere annullato fino a 2 ore prima del ritiro.
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#E02D3C',
              width: '92%',
              marginHorizontal: 10,
              marginTop: 10,
              alignSelf: 'center',
              borderRadius: 10,
            }}
            onPress={() => {
              setCancelModal(false);
              setConfirmCancelModal(true);
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 15,
              }}>
              Sì, annulla ordine
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#F2FDF7',
              width: '92%',
              marginHorizontal: 10,
              marginTop: 10,
              alignSelf: 'center',
              borderRadius: 10,
            }}
            onPress={() => {
              setCancelModal(false);
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 16,
                
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 15,
              }}>
              No, mantieni l'ordine
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmValidation}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '50%',
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
                setConfirmValidation(false);
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
                  marginTop:15,
                  textAlign: 'center',
                }}>
                Ritiro ordine nr. 35210{' '}
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'center',
                }}>
                convalidato correttamente
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={reviewModal}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '51%',
            alignSelf: 'center',
            borderRadius: 10,
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
              paddingLeft: '35%',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 15,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
              }}>
              Recensione
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setReviewModal(false);
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
              marginHorizontal: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/app/store/img-1.png')}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  marginRight: 10,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                Nome Store
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons name="star" size={20} color={'#FBBC04'} />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                4.2
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
              }}>
              Nome Utente
            </Text>
            <View
              style={{
                borderColor: '#999da1',
                borderWidth: 0.3,
                borderRadius: 10,
                marginTop: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TextInput
                placeholder="@NomeUtente"
                placeholderTextColor={'#000000'}
              />
              <MaterialCommunityIcons
                name="pencil"
                size={20}
                color={'#000000'}
                style={{marginRight: 10}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons name="star" size={20} color={'#FBBC04'} />
              <MaterialCommunityIcons name="star" size={20} color={'#FBBC04'} />
              <MaterialCommunityIcons name="star" size={20} color={'#FBBC04'} />
              <MaterialCommunityIcons name="star" size={20} color={'#FBBC04'} />
              <MaterialCommunityIcons name="star" size={20} color={'#FBBC04'} />
            </View>
            <Text
              style={{
                color: '#6D747C',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
              }}>
              Recensione
            </Text>
            <View
              style={{
                borderColor: '#999da1',
                borderWidth: 0.3,
                borderRadius: 10,
                marginTop: 2,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TextInput
                placeholder="Scrivi una recensione"
                placeholderTextColor={'#000000'}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: '#21B861',
              marginHorizontal: 15,
              marginTop: 20,
            }}
            onPress={() => {
              setReviewModal(false);
              setCompleteReviewModal(true);
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 15,
              }}>
              Pubblica recensione
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmCancelModal}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '50%',
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
                setConfirmCancelModal(false);
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
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'center',
                }}>
                Annullamento ordine nr. 35210{' '}
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'center',
                }}>
                completato correttamente
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={completeReviewModal}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '85%',
            marginTop: '50%',
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
                fontSize: 15,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
              }}>
              Richiesta completata
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setCompleteReviewModal(false);
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
                  marginTop:20,
                  textAlign: 'center',
                }}>
                Recensione pubblicata correttamente
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 15,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 22,
            
            fontFamily: 'Poppins-Bold',
          }}>
          Ordini
        </Text>
        <MaterialCommunityIcons name="magnify" size={30} color={'#000000'} />
      </View>
      <View
        style={{
          backgroundColor: '#D9E0E8',
          height: 1,
          marginVertical: 10,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 30,
          marginTop: 10,
          justifyContent: 'space-between',
        }}>
        {orderType == 1 ? (
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#21B861',
              borderRadius: 10,
              borderWidth: 0.5,
              width: '45%',
            }}
            onPress={() => {
              setOrderType(1);
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 10,
              }}>
              Ordini in corso
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#D9E0E8',
              borderRadius: 10,
              borderWidth: 0.5,
              width: '45%',
            }}
            onPress={() => {
              setOrderType(1);
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 10,
              }}>
              Ordini in corso
            </Text>
          </TouchableOpacity>
        )}
        {orderType == 2 ? (
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#21B861',
              borderRadius: 10,
              borderWidth: 0.5,
              width: '45%',
            }}
            onPress={() => {
              setOrderType(2);
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 10,
              }}>
              Ordini conclusi
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: '#F9FAFB',
              borderColor: '#D9E0E8',
              borderRadius: 10,
              borderWidth: 0.5,
              width: '45%',
            }}
            onPress={() => {
              setOrderType(2);
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                paddingVertical: 10,
              }}>
              Ordini conclusi
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {orderType == 1 ? (
        <View
          style={{
            paddingHorizontal: 15,
            marginTop: 20,
          }}>
          <View
            style={{
              backgroundColor: '#F9FAFB',
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: '600',
                  fontFamily: 'Poppins-Bold',
                }}>
                Ordine nr. 36210
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#EA4335',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 10,
                  marginTop: 10,
                }}
                onPress={() => {
                  setCancelModal(true);
                }}>
                <MaterialCommunityIcons
                  name="trash-can"
                  size={20}
                  color={'#ffffff'}
                />
                <Text
                  style={{
                    color: '#ffffff',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Elimina
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                1x Veggy Mix
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                da ritirare oggi 13:00 - 15:00
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                presso Nome Ristorante Vegano
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                Totale €4,99
              </Text>
            </View>
            <View
              style={{
                paddingLeft: 10,
                marginTop: 15,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                Stato Ordine:{' '}
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 15,
                  fontWeight: '600',
                  fontFamily: 'Poppins-Regular',
                }}>
                In attesa di ritiro
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: '100%',
                backgroundColor: '#F2FDF7',
                borderRadius: 10,
                alignItems: 'center',
                marginTop: 10,
              }}
              onPress={() => {
                setModalVisibility(true);
              }}>
              <Text
                style={{
                  color: '#21B861',
                  fontSize: 12,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Bold',
                  
                  paddingVertical: 20,
                }}>
                Convalida Ordine
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#F9FAFB',
              borderRadius: 10,
              marginTop: 15,
              marginBottom: 80,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: '600',
                  fontFamily: 'Poppins-Bold',
                }}>
                Ordine nr. 45675
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#EA4335',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 10,
                  marginTop: 10,
                }}>
                <MaterialCommunityIcons
                  name="trash-can"
                  size={20}
                  color={'#ffffff'}
                />
                <Text
                  style={{
                    color: '#ffffff',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Elimina
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                1x Veggy Mix
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                da ritirare oggi 13:00 - 15:00
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                presso Nome Ristorante Vegano
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                Totale €4,99
              </Text>
            </View>
            <View
              style={{
                paddingLeft: 10,
                marginTop: 15,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                Stato Ordine:{' '}
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 15,
                  fontWeight: '600',
                  fontFamily: 'Poppins-Regular',
                }}>
                In attesa di ritiro
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: '100%',
                backgroundColor: '#F2FDF7',
                borderRadius: 10,
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: '#21B861',
                  fontSize: 12,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Bold',
                  
                  paddingVertical: 20,
                }}>
                Convalida Ordine
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View
          style={{
            paddingHorizontal: 15,
            marginTop: 20,
          }}>
          <View
            style={{
              backgroundColor: '#F9FAFB',
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: '600',
                  fontFamily: 'Poppins-Bold',
                  marginTop: 10,
                }}>
                Ordine nr. 36210
              </Text>
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                1x Veggy Mix
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                da ritirare oggi 13:00 - 15:00
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                presso Nome Ristorante Vegano
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                Totale €4,99
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: '100%',
                backgroundColor: '#F2FDF7',
                borderRadius: 10,
                alignItems: 'center',
                marginTop: 10,
              }}
              onPress={() => {
                setReviewModal(true);
              }}>
              <Text
                style={{
                  color: '#21B861',
                  fontSize: 12,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Bold',
                  
                  paddingVertical: 20,
                }}>
                Recensisci Ordine
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#F9FAFB',
              borderRadius: 10,
              marginTop: 20,
              marginBottom: 80,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: '600',
                  fontFamily: 'Poppins-Bold',
                  marginTop: 10,
                }}>
                Ordine nr. 45675
              </Text>
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                1x Veggy Mix
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                da ritirare oggi 13:00 - 15:00
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                presso Nome Ristorante Vegano
              </Text>
              <Text
                style={{
                  color: '#3C434B',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                Totale €4,99
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: '100%',
                backgroundColor: '#F2FDF7',
                borderRadius: 10,
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: '#21B861',
                  fontSize: 12,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Bold',
                  
                  paddingVertical: 20,
                }}>
                Recensisci Ordine
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default FavoriteScreen;
