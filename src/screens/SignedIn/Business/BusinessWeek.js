import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Calendar} from 'react-native-calendars';

const BusinessWeek = ({navigation}) => {
  const workingDay = {key: 'workingDay', color: '#34A853'};
  const notWorkingDay = {key: 'notWorkingDay', color: '#EA4335'};
  const todayDate = new Date();
  const dd = String(todayDate.getDate()).padStart(2, '0');
  const mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = todayDate.getFullYear();
  const today = yyyy + '-' + mm + '-' + dd;
  const [isPushNotificationsEnabled, setIsPushNotificationsEnabled] =
    useState(true);
  const togglePushNotificationsSwitch = () =>
    setIsPushNotificationsEnabled(previousState => !previousState);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 50,
      }}>
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
              fontFamily: 'poppins',
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
              fontFamily: 'poppins',
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
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'poppins',
          }}>
          La tua settimana
        </Text>
        <Calendar
          markingType={'multi-dot'}
          markedDates={{
            '2023-02-25': {
              dots: [workingDay],
            },
            '2023-02-19': {
              dots: [workingDay],
            },
            '2023-02-20': {
              dots: [workingDay],
            },
            '2023-02-21': {
              dots: [workingDay],
            },
            '2023-02-22': {
              dots: [workingDay],
            },
            '2023-02-23': {
              dots: [workingDay],
            },
            '2023-02-16': {dots: [notWorkingDay]},
          }}
          minDate={today}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="circle" size={10} color={'#34A853'} />
            <Text
              style={{
                color: '#6D747C',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'poppins',
                marginLeft: 5,
              }}>
              Ritiro disponibile
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <MaterialCommunityIcons name="circle" size={10} color={'#EA4335'} />
            <Text
              style={{
                color: '#6D747C',
                fontSize: 10,
                fontWeight: '500',
                fontFamily: 'poppins',
                marginLeft: 5,
              }}>
              Ritiro non disponibile
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#CED5DD',
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}
        />
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'poppins',
            }}>
            Lunedì, 14 Novembre
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Ritiro disponibile
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#d7d7d7'}}
              thumbColor={isPushNotificationsEnabled ? '#21B861' : '#D9E0E8'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglePushNotificationsSwitch}
              value={isPushNotificationsEnabled}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#A3AEB4',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Hero Bag in vendita
            </Text>
            <Text
              style={{
                color: '#21B861',
                fontSize: 22,
                fontWeight: '700',
                fontFamily: 'poppins',
              }}>
              5
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#A3AEB4',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Orario di ritiro
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderRadius: 12,
                  borderColor: '#D9E0E8',
                  borderWidth: 0.5,
                }}>
                <TextInput
                  placeholder="dalle 13:00"
                  placeholderTextColor={'#000000'}
                  style={{
                    paddingHorizontal: 10,
                  }}
                />
              </View>
              <View
                style={{
                  borderRadius: 12,
                  borderColor: '#D9E0E8',
                  borderWidth: 0.5,
                  marginLeft: 5,
                }}>
                <TextInput
                  placeholder="alle 15:00"
                  placeholderTextColor={'#000000'}
                  style={{
                    paddingHorizontal: 10,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#CED5DD',
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}
        />
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'poppins',
            }}>
            Martedì, 15 Novembre
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Ritiro disponibile
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#d7d7d7'}}
              thumbColor={isPushNotificationsEnabled ? '#21B861' : '#D9E0E8'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglePushNotificationsSwitch}
              value={isPushNotificationsEnabled}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#A3AEB4',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Hero Bag in vendita
            </Text>
            <Text
              style={{
                color: '#21B861',
                fontSize: 22,
                fontWeight: '700',
                fontFamily: 'poppins',
              }}>
              5
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#A3AEB4',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Orario di ritiro
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderRadius: 12,
                  borderColor: '#D9E0E8',
                  borderWidth: 0.5,
                }}>
                <TextInput
                  placeholder="dalle 13:00"
                  placeholderTextColor={'#000000'}
                  style={{
                    paddingHorizontal: 10,
                  }}
                />
              </View>
              <View
                style={{
                  borderRadius: 12,
                  borderColor: '#D9E0E8',
                  borderWidth: 0.5,
                  marginLeft: 5,
                }}>
                <TextInput
                  placeholder="alle 15:00"
                  placeholderTextColor={'#000000'}
                  style={{
                    paddingHorizontal: 10,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#CED5DD',
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}
        />
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'poppins',
            }}>
            Mercoledì, 16 Novembre
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Ritiro disponibile
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#d7d7d7'}}
              thumbColor={isPushNotificationsEnabled ? '#21B861' : '#D9E0E8'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglePushNotificationsSwitch}
              value={isPushNotificationsEnabled}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#A3AEB4',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Hero Bag in vendita
            </Text>
            <Text
              style={{
                color: '#21B861',
                fontSize: 22,
                fontWeight: '700',
                fontFamily: 'poppins',
              }}>
              5
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#A3AEB4',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Orario di ritiro
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderRadius: 12,
                  borderColor: '#D9E0E8',
                  borderWidth: 0.5,
                }}>
                <TextInput
                  placeholder="dalle 13:00"
                  placeholderTextColor={'#000000'}
                  style={{
                    paddingHorizontal: 10,
                  }}
                />
              </View>
              <View
                style={{
                  borderRadius: 12,
                  borderColor: '#D9E0E8',
                  borderWidth: 0.5,
                  marginLeft: 5,
                }}>
                <TextInput
                  placeholder="alle 15:00"
                  placeholderTextColor={'#000000'}
                  style={{
                    paddingHorizontal: 10,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#CED5DD',
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}
        />
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'poppins',
            }}>
            Giovedì, 17 Novembre
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Ritiro disponibile
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#d7d7d7'}}
              thumbColor={isPushNotificationsEnabled ? '#21B861' : '#D9E0E8'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglePushNotificationsSwitch}
              value={isPushNotificationsEnabled}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#A3AEB4',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Hero Bag in vendita
            </Text>
            <Text
              style={{
                color: '#21B861',
                fontSize: 22,
                fontWeight: '700',
                fontFamily: 'poppins',
              }}>
              5
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#A3AEB4',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Orario di ritiro
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderRadius: 12,
                  borderColor: '#D9E0E8',
                  borderWidth: 0.5,
                }}>
                <TextInput
                  placeholder="dalle 13:00"
                  placeholderTextColor={'#000000'}
                  style={{
                    paddingHorizontal: 10,
                  }}
                />
              </View>
              <View
                style={{
                  borderRadius: 12,
                  borderColor: '#D9E0E8',
                  borderWidth: 0.5,
                  marginLeft: 5,
                }}>
                <TextInput
                  placeholder="alle 15:00"
                  placeholderTextColor={'#000000'}
                  style={{
                    paddingHorizontal: 10,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#CED5DD',
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}
        />
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'poppins',
            }}>
            Venerdì, 18 Novembre
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Ritiro disponibile
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#d7d7d7'}}
              thumbColor={isPushNotificationsEnabled ? '#21B861' : '#D9E0E8'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglePushNotificationsSwitch}
              value={isPushNotificationsEnabled}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#A3AEB4',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Hero Bag in vendita
            </Text>
            <Text
              style={{
                color: '#21B861',
                fontSize: 22,
                fontWeight: '700',
                fontFamily: 'poppins',
              }}>
              5
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#A3AEB4',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Orario di ritiro
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderRadius: 12,
                  borderColor: '#D9E0E8',
                  borderWidth: 0.5,
                }}>
                <TextInput
                  placeholder="dalle 13:00"
                  placeholderTextColor={'#000000'}
                  style={{
                    paddingHorizontal: 10,
                  }}
                />
              </View>
              <View
                style={{
                  borderRadius: 12,
                  borderColor: '#D9E0E8',
                  borderWidth: 0.5,
                  marginLeft: 5,
                }}>
                <TextInput
                  placeholder="alle 15:00"
                  placeholderTextColor={'#000000'}
                  style={{
                    paddingHorizontal: 10,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#CED5DD',
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}
        />
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'poppins',
            }}>
            Sabato, 19 Novembre
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Ritiro disponibile
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#d7d7d7'}}
              thumbColor={isPushNotificationsEnabled ? '#21B861' : '#D9E0E8'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglePushNotificationsSwitch}
              value={isPushNotificationsEnabled}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#A3AEB4',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Hero Bag in vendita
            </Text>
            <Text
              style={{
                color: '#21B861',
                fontSize: 22,
                fontWeight: '700',
                fontFamily: 'poppins',
              }}>
              5
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#A3AEB4',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Orario di ritiro
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderRadius: 12,
                  borderColor: '#D9E0E8',
                  borderWidth: 0.5,
                }}>
                <TextInput
                  placeholder="dalle 13:00"
                  placeholderTextColor={'#000000'}
                  style={{
                    paddingHorizontal: 10,
                  }}
                />
              </View>
              <View
                style={{
                  borderRadius: 12,
                  borderColor: '#D9E0E8',
                  borderWidth: 0.5,
                  marginLeft: 5,
                }}>
                <TextInput
                  placeholder="alle 15:00"
                  placeholderTextColor={'#000000'}
                  style={{
                    paddingHorizontal: 10,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#CED5DD',
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}
        />
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'poppins',
            }}>
            Domenica, 20 Novembre
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#21B861',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Ritiro disponibile
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#d7d7d7'}}
              thumbColor={isPushNotificationsEnabled ? '#21B861' : '#D9E0E8'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglePushNotificationsSwitch}
              value={isPushNotificationsEnabled}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#A3AEB4',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Hero Bag in vendita
            </Text>
            <Text
              style={{
                color: '#21B861',
                fontSize: 22,
                fontWeight: '700',
                fontFamily: 'poppins',
              }}>
              5
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#A3AEB4',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'poppins',
              }}>
              Orario di ritiro
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderRadius: 12,
                  borderColor: '#D9E0E8',
                  borderWidth: 0.5,
                }}>
                <TextInput
                  placeholder="dalle 13:00"
                  placeholderTextColor={'#000000'}
                  style={{
                    paddingHorizontal: 10,
                  }}
                />
              </View>
              <View
                style={{
                  borderRadius: 12,
                  borderColor: '#D9E0E8',
                  borderWidth: 0.5,
                  marginLeft: 5,
                }}>
                <TextInput
                  placeholder="alle 15:00"
                  placeholderTextColor={'#000000'}
                  style={{
                    paddingHorizontal: 10,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#21B861',
            borderRadius: 10,
            marginBottom: 100,
            marginTop: 30,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '700',
              fontFamily: 'poppins',
              textAlign: 'center',
              paddingVertical: 15,
            }}>
            Salva pianificazione
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BusinessWeek;
