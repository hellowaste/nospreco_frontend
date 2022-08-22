import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const BusinessHomeScreen = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [sectionStatus, setSectionStatus] = useState(1);
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1}}>
      {visibleMenu ? (
        <View
          style={{
            width: '60%',
            height: '100%',
            backgroundColor: '#b9ceac',
            position: 'absolute',
            zIndex: 999,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#b9ceac',
              borderRadius: 30,
              alignSelf: 'flex-end',
              margin: 10,
              shadowOffset: {width: 10, height: 10},
              shadowColor: '#000000',
              shadowOpacity: 1,
              elevation: 10,
            }}
            onPress={() => setVisibleMenu(false)}>
            <MaterialCommunityIcons
              name="close"
              size={20}
              color={'#ffffff'}
              style={{margin: 3}}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#00807a',
              marginHorizontal: 20,
              marginTop: 5,
              borderRadius: 10,
              shadowOffset: {width: 10, height: 10},
              shadowColor: '#000000',
              shadowOpacity: 1,
              elevation: 10,
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                backgroundColor: '#ffffff',
                margin: 10,
              }}
            />
            <Text style={{color: '#ffffff', fontSize: 16, fontWeight: '700'}}>
              Nome Store
            </Text>
          </View>
          <View
            style={{
              marginTop: 30,
              marginBottom: 75,
              alignSelf: 'center',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => {
                setSectionStatus(1);
                setVisibleMenu(false);
              }}>
              <MaterialCommunityIcons
                name="view-day-outline"
                size={20}
                color={sectionStatus == 1 ? '#ffffff' : '#000000'}
                style={{marginRight: 10}}
              />
              <Text
                style={{
                  color: sectionStatus == 1 ? '#ffffff' : '#000000',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Gestione quotidiana
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => {
                setSectionStatus(2);
                setVisibleMenu(false);
              }}>
              <MaterialCommunityIcons
                name="calendar"
                size={20}
                color={sectionStatus == 2 ? '#ffffff' : '#000000'}
                style={{marginRight: 10}}
              />
              <Text
                style={{
                  color: sectionStatus == 2 ? '#ffffff' : '#000000',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Calendario
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => {
                setSectionStatus(3);
                setVisibleMenu(false);
              }}>
              <MaterialCommunityIcons
                name="clock-outline"
                size={20}
                color={sectionStatus == 3 ? '#ffffff' : '#000000'}
                style={{marginRight: 10}}
              />
              <Text
                style={{
                  color: sectionStatus == 3 ? '#ffffff' : '#000000',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Programma
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => {
                setSectionStatus(4);
                setVisibleMenu(false);
              }}>
              <MaterialCommunityIcons
                name="cog-outline"
                size={20}
                color={sectionStatus == 4 ? '#ffffff' : '#000000'}
                style={{marginRight: 10}}
              />
              <Text
                style={{
                  color: sectionStatus == 4 ? '#ffffff' : '#000000',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Impostazioni
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => {
                setSectionStatus(5);
                setVisibleMenu(false);
              }}>
              <MaterialCommunityIcons
                name="poll"
                size={20}
                color={sectionStatus == 5 ? '#ffffff' : '#000000'}
                style={{marginRight: 10}}
              />
              <Text
                style={{
                  color: sectionStatus == 5 ? '#ffffff' : '#000000',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Performance
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => {
                setSectionStatus(6);
                setVisibleMenu(false);
              }}>
              <MaterialCommunityIcons
                name="credit-card"
                size={20}
                color={sectionStatus == 6 ? '#ffffff' : '#000000'}
                style={{marginRight: 10}}
              />
              <Text
                style={{
                  color: sectionStatus == 6 ? '#ffffff' : '#000000',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Vendite
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => {
                setSectionStatus(7);
                setVisibleMenu(false);
              }}>
              <MaterialCommunityIcons
                name="message-question"
                size={20}
                color={sectionStatus == 7 ? '#ffffff' : '#000000'}
                style={{marginRight: 10}}
              />
              <Text
                style={{
                  color: sectionStatus == 7 ? '#ffffff' : '#000000',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Centro assistenza
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
          shadowOffset: {width: 10, height: 10},
          shadowColor: '#000000',
          shadowOpacity: 1,
          elevation: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{marginLeft: 20}}
            onPress={() => setVisibleMenu(true)}>
            <MaterialCommunityIcons name="menu" size={30} color={'#000000'} />
          </TouchableOpacity>
          <Image
            source={require('../../../assets/logo/app/app_logo.png')}
            style={{width: 50, height: 50, borderRadius: 30, marginTop: 5}}
          />
        </View>
        <View>
          <TouchableOpacity style={{marginRight: 20}}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={30}
              color={'#000000'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {sectionStatus == 1 ? <GestioneQuotidiana /> : null}
        {sectionStatus == 2 ? <Calendario /> : null}
        {sectionStatus == 3 ? <Programma /> : null}
        {sectionStatus == 4 ? <Impostazioni /> : null}
        {sectionStatus == 5 ? <Performance /> : null}
        {sectionStatus == 6 ? <Vendite /> : null}
        {sectionStatus == 7 ? <CentroAssistenza /> : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const GestioneQuotidiana = () => {
  return (
    <View style={{marginHorizontal: 20, marginTop: 30}}>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#00807a',
          borderRadius: 10,
          alignItems: 'center',
          padding: 20,
        }}>
        <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
          Benvenuto, ci sei quasi
        </Text>
        <Text style={{color: '#000000', fontSize: 14, marginVertical: 20}}>
          Ti contatteremo nei prossimi giorni lavorativi per rivere i tuoi dati
          ed aiutarti ad iniziare.
        </Text>
        <Text style={{color: '#000000', fontSize: 14}}>
          Se vuoi già partire, contattaci al (da inserire il numero di
          assistenza).
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#00807a',
          borderRadius: 10,
          alignItems: 'center',
          marginTop: 50,
          padding: 20,
        }}>
        <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
          Grazie per aver aggiunto queste informazioni
        </Text>
        <Text style={{color: '#000000', fontSize: 14, marginVertical: 20}}>
          Il tuo articolo non è ancora attivo, quindi nessun utente può vederlo
          sull'app di Hello Waste.
        </Text>
      </View>
    </View>
  );
};

const Calendario = () => {
  const workingDay = {key: 'workingDay', color: 'green'};
  const notWorkingDay = {key: 'notWorkingDay', color: 'red'};
  const specialDay = {key: 'specialDay', color: 'orange'};
  const todayDate = new Date();
  const dd = String(todayDate.getDate()).padStart(2, '0');
  const mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = todayDate.getFullYear();
  const today = yyyy + '-' + mm + '-' + dd;

  LocaleConfig.locales.fr = {
    monthNames: [
      'Gennaio',
      'Febbraio',
      'Marzo',
      'Aprile',
      'Maggio',
      'Giugno',
      'Luglio',
      'Agosto',
      'Settembre',
      'Ottobre',
      'Novembre',
      'Dicembre',
    ],
    monthNamesShort: [
      'Gen.',
      'Feb.',
      'Mar',
      'Apr',
      'Mag',
      'Giu',
      'Lug.',
      'Ago',
      'Set.',
      'Ott.',
      'Nov.',
      'Dic.',
    ],
    dayNames: [
      'Domenica',
      'Lunedì',
      'Martedì',
      'Mercoledì',
      'Giovedì',
      'Venerdì',
      'Sabato',
    ],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mer.', 'Gio.', 'Ven.', 'Sab.'],
    today: 'Oggi',
  };
  LocaleConfig.defaultLocale = 'fr';
  return (
    <View style={{marginHorizontal: 20, marginTop: 30}}>
      <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
        Calendario
      </Text>
      <Text style={{color: '#000000', fontSize: 14}}>
        Il nostro calendario ti aiuta nell’avere una panoramica dei giorni e
        l’orario in cui gli acquirenti possono venire al tuo negozio per
        ritirare la Bag da te preparata , se volessi apportare modifiche
        temporanee al calendario puoi farlo grazie alla funzione giorni
        speciali.
      </Text>
      <View
        style={{backgroundColor: '#b9ceac', borderRadius: 5, marginTop: 30}}>
        <MaterialCommunityIcons
          name="calendar"
          size={20}
          color={'#000000'}
          style={{alignSelf: 'center', marginTop: 10}}
        />
        <Text
          style={{
            color: '#000000',
            fontSize: 14,
            paddingHorizontal: 10,
            paddingBottom: 10,
          }}>
          Cliccare su una data per visualizzare i dettagli di quel giorno per
          fare modifiche.
        </Text>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 30}}>
        <Calendar
          markingType={'multi-dot'}
          markedDates={{
            '2022-08-25': {
              dots: [workingDay],
            },
            '2022-08-26': {
              dots: [workingDay],
            },
            '2022-08-27': {dots: [specialDay]},
            '2022-08-28': {dots: [notWorkingDay]},
          }}
          minDate={today}
        />
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="circle-small"
              size={50}
              color={'green'}
            />
            <Text style={{color: '#000000', fontSize: 14}}>Ritiro</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="circle-small"
              size={50}
              color={'red'}
            />
            <Text style={{color: '#000000', fontSize: 14}}>Nessun ritiro</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="circle-small"
              size={50}
              color={'orange'}
            />
            <Text style={{color: '#000000', fontSize: 14}}>
              Giorno speciale
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Programma = () => {
  const [ritiroMonday, setRitiroMonday] = useState(true);
  const [ritiroTuesday, setRitiroTuesday] = useState(true);
  const [ritiroWednesday, setRitiroWednesday] = useState(true);
  const [ritiroThursday, setRitiroThursday] = useState(true);
  const [ritiroFriday, setRitiroFriday] = useState(true);
  const [ritiroSaturday, setRitiroSaturday] = useState(true);
  const [ritiroSunday, setRitiroSunday] = useState(true);
  const toggleRitiroMonday = () =>
    setRitiroMonday(previousState => !previousState);
  const toggleRitiroTuesday = () =>
    setRitiroTuesday(previousState => !previousState);
  const toggleRitiroWednesday = () =>
    setRitiroWednesday(previousState => !previousState);
  const toggleRitiroThursday = () =>
    setRitiroThursday(previousState => !previousState);
  const toggleRitiroFriday = () =>
    setRitiroFriday(previousState => !previousState);
  const toggleRitiroSaturday = () =>
    setRitiroSaturday(previousState => !previousState);
  const toggleRitiroSunday = () =>
    setRitiroSunday(previousState => !previousState);
  return (
    <View style={{marginHorizontal: 20, marginTop: 30}}>
      <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
        Programma settimanale
      </Text>
      <Text style={{color: '#000000', fontSize: 14}}>
        In questa sezione puoi specificare quante Bag saranno disponibili
        all'acquisto sull'app per giorno della settimana. Puoi anche modificare
        la finestra di ritiro in cui gli utenti possono presentarsi nel tuo
        store per ritirare la Bag.
      </Text>
      <View
        style={{height: 1, backgroundColor: '#919191', marginVertical: 20}}
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 10,
            marginBottom: 20,
          }}>
          <View style={{minWidth: 100}}>
            <Text style={{color: '#000000', fontSize: 14}}>Lunedì</Text>
            <Switch
              trackColor={{false: '#767577', true: '#d7d7d7'}}
              thumbColor={ritiroMonday ? '#00807a' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleRitiroMonday}
              value={ritiroMonday}
              style={{marginTop: 10, alignSelf: 'flex-start'}}
            />
            {ritiroMonday ? (
              <Text style={{color: '#00807a', fontSize: 14, fontWeight: '400'}}>
                Ritiro
              </Text>
            ) : (
              <Text style={{color: '#ff0000', fontSize: 14, fontWeight: '400'}}>
                Nessun ritiro
              </Text>
            )}
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderWidth: 0.5,
              borderColor: '#7a7a7a',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <TextInput
              placeholder={'3'}
              placeholderTextColor={'#000000'}
              style={{
                textAlign: 'center',
                fontSize: 20,
                padding: 10,
                color: '#000000',
              }}
            />
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderWidth: 0.5,
                borderColor: '#7a7a7a',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                minWidth: 100,
              }}>
              <TextInput
                placeholder={'16:00'}
                placeholderTextColor={'#000000'}
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  paddingHorizontal: 15,
                  color: '#000000',
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderWidth: 0.5,
                borderColor: '#7a7a7a',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                minWidth: 100,
                marginTop: 5,
              }}>
              <TextInput
                placeholder={'19:00'}
                placeholderTextColor={'#000000'}
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  paddingHorizontal: 15,
                  color: '#000000',
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 10,
            marginBottom: 20,
          }}>
          <View style={{minWidth: 100}}>
            <Text style={{color: '#000000', fontSize: 14}}>Martedì</Text>
            <Switch
              trackColor={{false: '#767577', true: '#d7d7d7'}}
              thumbColor={ritiroTuesday ? '#00807a' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleRitiroTuesday}
              value={ritiroTuesday}
              style={{marginTop: 10, alignSelf: 'flex-start'}}
            />
            {ritiroTuesday ? (
              <Text style={{color: '#00807a', fontSize: 14, fontWeight: '400'}}>
                Ritiro
              </Text>
            ) : (
              <Text style={{color: '#ff0000', fontSize: 14, fontWeight: '400'}}>
                Nessun ritiro
              </Text>
            )}
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderWidth: 0.5,
              borderColor: '#7a7a7a',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <TextInput
              placeholder={'3'}
              placeholderTextColor={'#000000'}
              style={{
                textAlign: 'center',
                fontSize: 20,
                padding: 10,
                color: '#000000',
              }}
            />
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderWidth: 0.5,
                borderColor: '#7a7a7a',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                minWidth: 100,
              }}>
              <TextInput
                placeholder={'16:00'}
                placeholderTextColor={'#000000'}
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  paddingHorizontal: 15,
                  color: '#000000',
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderWidth: 0.5,
                borderColor: '#7a7a7a',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                minWidth: 100,
                marginTop: 5,
              }}>
              <TextInput
                placeholder={'19:00'}
                placeholderTextColor={'#000000'}
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  paddingHorizontal: 15,
                  color: '#000000',
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 10,
            marginBottom: 20,
          }}>
          <View style={{minWidth: 100}}>
            <Text style={{color: '#000000', fontSize: 14}}>Mercoledì</Text>
            <Switch
              trackColor={{false: '#767577', true: '#d7d7d7'}}
              thumbColor={ritiroWednesday ? '#00807a' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleRitiroWednesday}
              value={ritiroWednesday}
              style={{marginTop: 10, alignSelf: 'flex-start'}}
            />
            {ritiroWednesday ? (
              <Text style={{color: '#00807a', fontSize: 14, fontWeight: '400'}}>
                Ritiro
              </Text>
            ) : (
              <Text style={{color: '#ff0000', fontSize: 14, fontWeight: '400'}}>
                Nessun ritiro
              </Text>
            )}
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderWidth: 0.5,
              borderColor: '#7a7a7a',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <TextInput
              placeholder={'3'}
              placeholderTextColor={'#000000'}
              style={{
                textAlign: 'center',
                fontSize: 20,
                padding: 10,
                color: '#000000',
              }}
            />
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderWidth: 0.5,
                borderColor: '#7a7a7a',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                minWidth: 100,
              }}>
              <TextInput
                placeholder={'16:00'}
                placeholderTextColor={'#000000'}
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  paddingHorizontal: 15,
                  color: '#000000',
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderWidth: 0.5,
                borderColor: '#7a7a7a',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                minWidth: 100,
                marginTop: 5,
              }}>
              <TextInput
                placeholder={'19:00'}
                placeholderTextColor={'#000000'}
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  paddingHorizontal: 15,
                  color: '#000000',
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 10,
            marginBottom: 20,
          }}>
          <View style={{minWidth: 100}}>
            <Text style={{color: '#000000', fontSize: 14}}>Giovedì</Text>
            <Switch
              trackColor={{false: '#767577', true: '#d7d7d7'}}
              thumbColor={ritiroThursday ? '#00807a' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleRitiroThursday}
              value={ritiroThursday}
              style={{marginTop: 10, alignSelf: 'flex-start'}}
            />
            {ritiroThursday ? (
              <Text style={{color: '#00807a', fontSize: 14, fontWeight: '400'}}>
                Ritiro
              </Text>
            ) : (
              <Text style={{color: '#ff0000', fontSize: 14, fontWeight: '400'}}>
                Nessun ritiro
              </Text>
            )}
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderWidth: 0.5,
              borderColor: '#7a7a7a',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <TextInput
              placeholder={'3'}
              placeholderTextColor={'#000000'}
              style={{
                textAlign: 'center',
                fontSize: 20,
                padding: 10,
                color: '#000000',
              }}
            />
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderWidth: 0.5,
                borderColor: '#7a7a7a',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                minWidth: 100,
              }}>
              <TextInput
                placeholder={'16:00'}
                placeholderTextColor={'#000000'}
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  paddingHorizontal: 15,
                  color: '#000000',
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderWidth: 0.5,
                borderColor: '#7a7a7a',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                minWidth: 100,
                marginTop: 5,
              }}>
              <TextInput
                placeholder={'19:00'}
                placeholderTextColor={'#000000'}
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  paddingHorizontal: 15,
                  color: '#000000',
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 10,
            marginBottom: 20,
          }}>
          <View style={{minWidth: 100}}>
            <Text style={{color: '#000000', fontSize: 14}}>Venerdì</Text>
            <Switch
              trackColor={{false: '#767577', true: '#d7d7d7'}}
              thumbColor={ritiroFriday ? '#00807a' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleRitiroFriday}
              value={ritiroFriday}
              style={{marginTop: 10, alignSelf: 'flex-start'}}
            />
            {ritiroFriday ? (
              <Text style={{color: '#00807a', fontSize: 14, fontWeight: '400'}}>
                Ritiro
              </Text>
            ) : (
              <Text style={{color: '#ff0000', fontSize: 14, fontWeight: '400'}}>
                Nessun ritiro
              </Text>
            )}
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderWidth: 0.5,
              borderColor: '#7a7a7a',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <TextInput
              placeholder={'3'}
              placeholderTextColor={'#000000'}
              style={{
                textAlign: 'center',
                fontSize: 20,
                padding: 10,
                color: '#000000',
              }}
            />
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderWidth: 0.5,
                borderColor: '#7a7a7a',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                minWidth: 100,
              }}>
              <TextInput
                placeholder={'16:00'}
                placeholderTextColor={'#000000'}
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  paddingHorizontal: 15,
                  color: '#000000',
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderWidth: 0.5,
                borderColor: '#7a7a7a',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                minWidth: 100,
                marginTop: 5,
              }}>
              <TextInput
                placeholder={'19:00'}
                placeholderTextColor={'#000000'}
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  paddingHorizontal: 15,
                  color: '#000000',
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 10,
            marginBottom: 20,
          }}>
          <View style={{minWidth: 100}}>
            <Text style={{color: '#000000', fontSize: 14}}>Sabato</Text>
            <Switch
              trackColor={{false: '#767577', true: '#d7d7d7'}}
              thumbColor={ritiroSaturday ? '#00807a' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleRitiroSaturday}
              value={ritiroSaturday}
              style={{marginTop: 10, alignSelf: 'flex-start'}}
            />
            {ritiroSaturday ? (
              <Text style={{color: '#00807a', fontSize: 14, fontWeight: '400'}}>
                Ritiro
              </Text>
            ) : (
              <Text style={{color: '#ff0000', fontSize: 14, fontWeight: '400'}}>
                Nessun ritiro
              </Text>
            )}
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderWidth: 0.5,
              borderColor: '#7a7a7a',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <TextInput
              placeholder={'3'}
              placeholderTextColor={'#000000'}
              style={{
                textAlign: 'center',
                fontSize: 20,
                padding: 10,
                color: '#000000',
              }}
            />
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderWidth: 0.5,
                borderColor: '#7a7a7a',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                minWidth: 100,
              }}>
              <TextInput
                placeholder={'16:00'}
                placeholderTextColor={'#000000'}
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  paddingHorizontal: 15,
                  color: '#000000',
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderWidth: 0.5,
                borderColor: '#7a7a7a',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                minWidth: 100,
                marginTop: 5,
              }}>
              <TextInput
                placeholder={'19:00'}
                placeholderTextColor={'#000000'}
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  paddingHorizontal: 15,
                  color: '#000000',
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 10,
            marginBottom: 20,
          }}>
          <View style={{minWidth: 100}}>
            <Text style={{color: '#000000', fontSize: 14}}>Domenica</Text>
            <Switch
              trackColor={{false: '#767577', true: '#d7d7d7'}}
              thumbColor={ritiroSunday ? '#00807a' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleRitiroSunday}
              value={ritiroSunday}
              style={{marginTop: 10, alignSelf: 'flex-start'}}
            />
            {ritiroSunday ? (
              <Text style={{color: '#00807a', fontSize: 14, fontWeight: '400'}}>
                Ritiro
              </Text>
            ) : (
              <Text style={{color: '#ff0000', fontSize: 14, fontWeight: '400'}}>
                Nessun ritiro
              </Text>
            )}
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderWidth: 0.5,
              borderColor: '#7a7a7a',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <TextInput
              placeholder={'3'}
              placeholderTextColor={'#000000'}
              style={{
                textAlign: 'center',
                fontSize: 20,
                padding: 10,
                color: '#000000',
              }}
            />
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderWidth: 0.5,
                borderColor: '#7a7a7a',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                minWidth: 100,
              }}>
              <TextInput
                placeholder={'16:00'}
                placeholderTextColor={'#000000'}
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  paddingHorizontal: 15,
                  color: '#000000',
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderWidth: 0.5,
                borderColor: '#7a7a7a',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                minWidth: 100,
                marginTop: 5,
              }}>
              <TextInput
                placeholder={'19:00'}
                placeholderTextColor={'#000000'}
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  paddingHorizontal: 15,
                  color: '#000000',
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const Impostazioni = () => {
  const [sectionStatus, setSectionStatus] = useState(1);
  const [orderConfirmEmail, setOrderConfirmEmail] = useState(true);
  const [orderCancellationEmail, setOrderCancellationEmail] = useState(true);
  const [monthlyNewsletter, setMonthlyNewsletter] = useState(true);
  const [marketingEmail, setMarketingEmail] = useState(true);
  const toggleOrderConfirmEmail = () =>
    setOrderConfirmEmail(previousState => !previousState);
  const toggleOrderCancellationEmail = () =>
    setOrderCancellationEmail(previousState => !previousState);
  const toggleMonthlyNewsletter = () =>
    setMonthlyNewsletter(previousState => !previousState);
  const toggleMarketingEmail = () =>
    setMarketingEmail(previousState => !previousState);
  return (
    <View style={{marginHorizontal: 20, marginTop: 30}}>
      <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
        Impostazioni
      </Text>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => setSectionStatus(1)}>
            {sectionStatus == 1 ? (
              <Text
                style={{
                  color: '#00807a',
                  fontSize: 25,
                  fontWeight: '700',
                  marginRight: 30,
                }}>
                Bag
              </Text>
            ) : (
              <Text
                style={{
                  color: '#000000',
                  fontSize: 25,
                  fontWeight: '700',
                  marginRight: 30,
                }}>
                Bag
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSectionStatus(2)}>
            {sectionStatus == 2 ? (
              <Text
                style={{
                  color: '#00807a',
                  fontSize: 25,
                  fontWeight: '700',
                  marginRight: 30,
                }}>
                Store
              </Text>
            ) : (
              <Text
                style={{
                  color: '#000000',
                  fontSize: 25,
                  fontWeight: '700',
                  marginRight: 30,
                }}>
                Store
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSectionStatus(3)}>
            {sectionStatus == 3 ? (
              <Text
                style={{
                  color: '#00807a',
                  fontSize: 25,
                  fontWeight: '700',
                  marginRight: 30,
                }}>
                Notifiche
              </Text>
            ) : (
              <Text
                style={{
                  color: '#000000',
                  fontSize: 25,
                  fontWeight: '700',
                  marginRight: 30,
                }}>
                Notifiche
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSectionStatus(4)}>
            {sectionStatus == 4 ? (
              <Text
                style={{
                  color: '#00807a',
                  fontSize: 25,
                  fontWeight: '700',
                  marginRight: 30,
                }}>
                Profilo
              </Text>
            ) : (
              <Text
                style={{
                  color: '#000000',
                  fontSize: 25,
                  fontWeight: '700',
                  marginRight: 30,
                }}>
                Profilo
              </Text>
            )}
          </TouchableOpacity>
        </ScrollView>
        <ScrollView style={{marginTop: 20}}>
          {sectionStatus == 1 ? (
            <View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: '600',
                  marginBottom: 20,
                }}>
                Informazioni sull'articolo
              </Text>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#00807a',
                  borderRadius: 10,
                  padding: 10,
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '800',
                    marginBottom: 10,
                  }}>
                  Nome
                </Text>
                <View
                  style={{
                    borderWidth: 0.1,
                    borderColor: '#000000',
                    borderRadius: 3,
                  }}>
                  <TextInput
                    placeholder={'Nome Bag'}
                    placeholderTextColor={'#000000'}
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: '600',
                    }}
                    autoCapitalize={'words'}
                  />
                </View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '800',
                    marginVertical: 10,
                  }}>
                  Descrizione
                </Text>
                <View
                  style={{
                    borderWidth: 0.1,
                    borderColor: '#000000',
                    borderRadius: 3,
                  }}>
                  <TextInput
                    placeholder={'Salva una Bag e goditi un pasto'}
                    placeholderTextColor={'#000000'}
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: '600',
                    }}
                    autoCapitalize={'words'}
                  />
                </View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '800',
                    marginVertical: 10,
                  }}>
                  Prezzo
                </Text>
                <View
                  style={{
                    borderWidth: 0.1,
                    borderColor: '#000000',
                    borderRadius: 3,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: '600',
                      marginHorizontal: 10,
                    }}>
                    €
                  </Text>
                  <TextInput
                    placeholder={'2.99'}
                    placeholderTextColor={'#000000'}
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: '600',
                      width: '100%',
                    }}
                    autoCapitalize={'words'}
                  />
                </View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '800',
                    marginVertical: 10,
                  }}>
                  Categoria
                </Text>
                <View
                  style={{
                    borderWidth: 0.1,
                    borderColor: '#000000',
                    borderRadius: 3,
                  }}>
                  <TextInput
                    placeholder={'Categorie in aggiornamento'}
                    placeholderTextColor={'#000000'}
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: '600',
                    }}
                    autoCapitalize={'words'}
                  />
                </View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '800',
                    marginVertical: 10,
                  }}>
                  Valore minimo
                </Text>
                <View
                  style={{
                    borderWidth: 0.1,
                    borderColor: '#000000',
                    borderRadius: 3,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: '600',
                      marginHorizontal: 10,
                    }}>
                    €
                  </Text>
                  <TextInput
                    placeholder={'9'}
                    placeholderTextColor={'#000000'}
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: '600',
                      width: '100%',
                    }}
                    autoCapitalize={'words'}
                  />
                </View>
                <TouchableOpacity
                  style={{
                    marginVertical: 20,
                    borderWidth: 1,
                    borderColor: '#039d6e',
                    borderRadius: 5,
                    marginHorizontal: 30,
                    backgroundColor: '#00af7a',
                    shadowColor: '#000000',
                    shadowRadius: 10,
                    shadowOpacity: 1,
                    elevation: 10,
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: '600',
                      textAlign: 'center',
                      marginVertical: 5,
                    }}>
                    Carica immagine articolo
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: '#8f8f8f',
                    borderRadius: 5,
                    marginVertical: 10,
                    marginHorizontal: 20,
                    minHeight: 100,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: '600',
                      textAlign: 'center',
                    }}>
                    Anteprima immagine articolo
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    marginVertical: 20,
                    borderWidth: 1,
                    borderColor: '#039d6e',
                    borderRadius: 5,
                    marginHorizontal: 30,
                    backgroundColor: '#00af7a',
                    shadowColor: '#000000',
                    shadowRadius: 10,
                    shadowOpacity: 1,
                    elevation: 10,
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 16,
                      fontWeight: '600',
                      textAlign: 'center',
                      marginVertical: 10,
                    }}>
                    Salva articolo
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
          {sectionStatus == 2 ? (
            <View>
              <Text style={{color: '#000000', fontSize: 18, fontWeight: '600'}}>
                Informazioni sul punto vendita
              </Text>
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '400'}}>
                Qui puoi vedere le informazioni che abbiamo registrato sul tuo
                store. Se una di queste informazioni non è corretta e deve
                essere modificata non esitare a contattarci.
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: '600',
                  marginTop: 20,
                }}>
                Dettagli
              </Text>
              <Text
                style={{
                  color: '#545454',
                  fontSize: 16,
                  fontWeight: '800',
                  marginTop: 10,
                }}>
                Nome
              </Text>
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                Nome Store
              </Text>
              <Text
                style={{
                  color: '#545454',
                  fontSize: 16,
                  fontWeight: '800',
                  marginTop: 10,
                }}>
                Indirizzo
              </Text>
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                Via Roma, 1
              </Text>
              <Text
                style={{
                  color: '#545454',
                  fontSize: 16,
                  fontWeight: '800',
                  marginTop: 10,
                }}>
                Codice postale
              </Text>
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                24100
              </Text>
              <Text
                style={{
                  color: '#545454',
                  fontSize: 16,
                  fontWeight: '800',
                  marginTop: 10,
                }}>
                Città
              </Text>
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                Milano
              </Text>
              <Text
                style={{
                  color: '#545454',
                  fontSize: 16,
                  fontWeight: '800',
                  marginTop: 10,
                }}>
                Regione
              </Text>
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                Lombardia
              </Text>
              <Text
                style={{
                  color: '#545454',
                  fontSize: 16,
                  fontWeight: '800',
                  marginTop: 10,
                }}>
                Paese
              </Text>
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                Italia
              </Text>
              <Text
                style={{
                  color: '#545454',
                  fontSize: 16,
                  fontWeight: '800',
                  marginTop: 10,
                }}>
                Valuta
              </Text>
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                EUR
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: '600',
                  marginTop: 20,
                }}>
                Contatti
              </Text>
              <Text
                style={{
                  color: '#545454',
                  fontSize: 16,
                  fontWeight: '800',
                  marginTop: 10,
                }}>
                Telefono
              </Text>
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                +39 3333333333
              </Text>
              <Text
                style={{
                  color: '#545454',
                  fontSize: 16,
                  fontWeight: '800',
                  marginTop: 10,
                }}>
                Email
              </Text>
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                mail@store.com
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: '600',
                  marginTop: 20,
                }}>
                Descrizione
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#ababab',
                  padding: 15,
                  marginTop: 10,
                  marginBottom: 30,
                }}>
                <MaterialCommunityIcons
                  name="alert-circle"
                  size={20}
                  color={'#000000'}
                  style={{marginRight: 5}}
                />
                <Text
                  style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                  Il tuo store non ha ancora una descrizione
                </Text>
              </View>
            </View>
          ) : null}
          {sectionStatus == 3 ? (
            <View>
              <Text style={{color: '#000000', fontSize: 18, fontWeight: '600'}}>
                Informazioni email
              </Text>
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '400'}}>
                Ti inviamo diversi tipi di email sugli ordini che ricevi sulla
                piattaforma Hello Waste. Qui puoi selezionare quelle che vuoi
                ricevere e vedere a quale indirizzo saranno inviate.
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: '600',
                  marginTop: 20,
                }}>
                Email per gli ordini
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <View>
                  <Text
                    style={{
                      color: '#545454',
                      fontSize: 16,
                      fontWeight: '800',
                      marginTop: 10,
                    }}>
                    Conferma email
                  </Text>
                  <Text
                    style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                    Email inviata per ogni ordine effettuato.
                  </Text>
                </View>
                <View>
                  <Switch
                    trackColor={{false: '#767577', true: '#d7d7d7'}}
                    thumbColor={orderConfirmEmail ? '#00807a' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleOrderConfirmEmail}
                    value={orderConfirmEmail}
                    style={{marginTop: 10, alignSelf: 'flex-start'}}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <View>
                  <Text
                    style={{
                      color: '#545454',
                      fontSize: 16,
                      fontWeight: '800',
                      marginTop: 10,
                    }}>
                    Cancellazione ordine
                  </Text>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: '600',
                      maxWidth: '80%',
                    }}>
                    Email inviata se un ordine è stato cancellato prima del
                    ritiro.
                  </Text>
                </View>
                <View>
                  <Switch
                    trackColor={{false: '#767577', true: '#d7d7d7'}}
                    thumbColor={orderCancellationEmail ? '#00807a' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleOrderCancellationEmail}
                    value={orderCancellationEmail}
                    style={{marginTop: 10, alignSelf: 'flex-start'}}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <View>
                  <Text
                    style={{
                      color: '#545454',
                      fontSize: 16,
                      fontWeight: '800',
                      marginTop: 10,
                    }}>
                    Newsletter
                  </Text>
                  <Text
                    style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                    Aggiornamenti mensili di Hello Waste.
                  </Text>
                </View>
                <View>
                  <Switch
                    trackColor={{false: '#767577', true: '#d7d7d7'}}
                    thumbColor={monthlyNewsletter ? '#00807a' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleMonthlyNewsletter}
                    value={monthlyNewsletter}
                    style={{marginTop: 10, alignSelf: 'flex-start'}}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <View>
                  <Text
                    style={{
                      color: '#545454',
                      fontSize: 16,
                      fontWeight: '800',
                      marginTop: 10,
                    }}>
                    Email di marketing
                  </Text>
                  <Text
                    style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                    Comunicazioni rilevanti per il tuo store.
                  </Text>
                </View>
                <View>
                  <Switch
                    trackColor={{false: '#767577', true: '#d7d7d7'}}
                    thumbColor={marketingEmail ? '#00807a' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleMarketingEmail}
                    value={marketingEmail}
                    style={{marginTop: 10, alignSelf: 'flex-start'}}
                  />
                </View>
              </View>
            </View>
          ) : null}
          {sectionStatus == 4 ? (
            <View>
              <Text style={{color: '#000000', fontSize: 18, fontWeight: '600'}}>
                Informazioni profilo
              </Text>
              <Text
                style={{
                  color: '#545454',
                  fontSize: 16,
                  fontWeight: '800',
                  marginTop: 10,
                }}>
                Nome utente
              </Text>
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                Mario Rossi
              </Text>
              <Text
                style={{
                  color: '#545454',
                  fontSize: 16,
                  fontWeight: '800',
                  marginTop: 10,
                }}>
                Indirizzo email dell'utente
              </Text>
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '600'}}>
                mariorossi@gmail.com
              </Text>
            </View>
          ) : null}
        </ScrollView>
      </View>
    </View>
  );
};

const Performance = () => {
  const [sectionStatus, setSectionStatus] = useState(1);
  const [periodSection, setPeriodSection] = useState(1);
  return (
    <View style={{marginHorizontal: 20, marginTop: 30}}>
      <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
        Performance
      </Text>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => setSectionStatus(1)}>
            {sectionStatus == 1 ? (
              <Text
                style={{
                  color: '#00807a',
                  fontSize: 25,
                  fontWeight: '700',
                  marginRight: 30,
                }}>
                Statistiche
              </Text>
            ) : (
              <Text
                style={{
                  color: '#000000',
                  fontSize: 25,
                  fontWeight: '700',
                  marginRight: 30,
                }}>
                Statistiche
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSectionStatus(2)}>
            {sectionStatus == 2 ? (
              <Text
                style={{
                  color: '#00807a',
                  fontSize: 25,
                  fontWeight: '700',
                  marginRight: 30,
                }}>
                Approfondimenti
              </Text>
            ) : (
              <Text
                style={{
                  color: '#000000',
                  fontSize: 25,
                  fontWeight: '700',
                  marginRight: 30,
                }}>
                Approfondimenti
              </Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View>
        <ScrollView>
          {sectionStatus == 1 ? (
            <View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                  fontWeight: '600',
                  marginTop: 30,
                }}>
                Statistiche dall'inizio della collaborazione
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  marginTop: 10,
                }}>
                Qui sotto puoi trovare una panoramica delle tue statistiche
                dall'inizio della tua collaborazione con Hello Waste.
              </Text>
              <View style={{marginTop: 20}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity onPress={() => setPeriodSection(1)}>
                    {periodSection == 1 ? (
                      <Text
                        style={{
                          color: '#00807a',
                          fontSize: 20,
                          fontWeight: '700',
                          marginRight: 30,
                        }}>
                        Ultimi 30 giorni
                      </Text>
                    ) : (
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 20,
                          fontWeight: '700',
                          marginRight: 30,
                        }}>
                        Ultimi 30 giorni
                      </Text>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setPeriodSection(2)}>
                    {periodSection == 2 ? (
                      <Text
                        style={{
                          color: '#00807a',
                          fontSize: 20,
                          fontWeight: '700',
                          marginRight: 30,
                        }}>
                        Ultime 12 settimane
                      </Text>
                    ) : (
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 20,
                          fontWeight: '700',
                          marginRight: 30,
                        }}>
                        Ultime 12 settimane
                      </Text>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setPeriodSection(3)}>
                    {periodSection == 3 ? (
                      <Text
                        style={{
                          color: '#00807a',
                          fontSize: 20,
                          fontWeight: '700',
                          marginRight: 30,
                        }}>
                        Ultimi 12 mesi
                      </Text>
                    ) : (
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 20,
                          fontWeight: '700',
                          marginRight: 30,
                        }}>
                        Ultimi 12 mesi
                      </Text>
                    )}
                  </TouchableOpacity>
                </ScrollView>
              </View>
              <View style={{marginTop: 10}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: '#000000',
                      borderRadius: 5,
                      padding: 10,
                      marginRight: 10,
                    }}>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 18,
                        fontWeight: '600',
                        marginRight: 15,
                      }}>
                      Pasti salvati
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 30,
                        fontWeight: '800',
                      }}>
                      0
                    </Text>
                  </View>
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: '#000000',
                      borderRadius: 5,
                      padding: 10,
                      marginRight: 10,
                    }}>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 18,
                        fontWeight: '600',
                        marginRight: 25,
                      }}>
                      Preferiti
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 30,
                        fontWeight: '800',
                      }}>
                      0
                    </Text>
                  </View>
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: '#000000',
                      borderRadius: 5,
                      padding: 10,
                      marginRight: 10,
                    }}>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 18,
                        fontWeight: '600',
                        marginRight: 15,
                      }}>
                      Visualizzati
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 30,
                        fontWeight: '800',
                      }}>
                      0
                    </Text>
                  </View>
                </ScrollView>
              </View>
            </View>
          ) : null}
          {sectionStatus == 2 ? (
            <View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                  fontWeight: '600',
                  marginTop: 30,
                }}>
                Approfondimenti
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '400',
                  marginTop: 10,
                }}>
                Qui sotto puoi trovare una panoramica di come sta andando il tuo
                store in base alle valutazioni degli utenti e delle
                cancellazioni.
              </Text>
              <View style={{marginTop: 20}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity onPress={() => setPeriodSection(1)}>
                    {periodSection == 1 ? (
                      <Text
                        style={{
                          color: '#00807a',
                          fontSize: 20,
                          fontWeight: '700',
                          marginRight: 30,
                        }}>
                        Ultimi 30 giorni
                      </Text>
                    ) : (
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 20,
                          fontWeight: '700',
                          marginRight: 30,
                        }}>
                        Ultimi 30 giorni
                      </Text>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setPeriodSection(2)}>
                    {periodSection == 2 ? (
                      <Text
                        style={{
                          color: '#00807a',
                          fontSize: 20,
                          fontWeight: '700',
                          marginRight: 30,
                        }}>
                        Ultime 12 settimane
                      </Text>
                    ) : (
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 20,
                          fontWeight: '700',
                          marginRight: 30,
                        }}>
                        Ultime 12 settimane
                      </Text>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setPeriodSection(3)}>
                    {periodSection == 3 ? (
                      <Text
                        style={{
                          color: '#00807a',
                          fontSize: 20,
                          fontWeight: '700',
                          marginRight: 30,
                        }}>
                        Ultimi 12 mesi
                      </Text>
                    ) : (
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 20,
                          fontWeight: '700',
                          marginRight: 30,
                        }}>
                        Ultimi 12 mesi
                      </Text>
                    )}
                  </TouchableOpacity>
                </ScrollView>
              </View>
              <View style={{marginTop: 10}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: '#000000',
                      borderRadius: 5,
                      padding: 10,
                      marginRight: 10,
                    }}>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 18,
                        fontWeight: '600',
                        marginRight: 15,
                      }}>
                      Esperienza complessiva
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 30,
                        fontWeight: '800',
                      }}>
                      0.0
                    </Text>
                  </View>
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: '#000000',
                      borderRadius: 5,
                      padding: 10,
                      marginRight: 10,
                    }}>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 18,
                        fontWeight: '600',
                        marginRight: 15,
                      }}>
                      Valutazione media Bag
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 30,
                        fontWeight: '800',
                      }}>
                      0.0
                    </Text>
                  </View>
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: '#000000',
                      borderRadius: 5,
                      padding: 10,
                      marginRight: 10,
                    }}>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 18,
                        fontWeight: '600',
                        marginRight: 15,
                      }}>
                      Valutazione esperienza store
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 30,
                        fontWeight: '800',
                      }}>
                      0
                    </Text>
                  </View>
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: '#000000',
                      borderRadius: 5,
                      padding: 10,
                      marginRight: 10,
                    }}>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 18,
                        fontWeight: '600',
                        marginRight: 15,
                      }}>
                      Cancellazioni
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 30,
                        fontWeight: '800',
                      }}>
                      0
                    </Text>
                  </View>
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: '#000000',
                      borderRadius: 5,
                      padding: 10,
                      marginRight: 10,
                    }}>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 18,
                        fontWeight: '600',
                        marginRight: 15,
                      }}>
                      Rimborsi
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 30,
                        fontWeight: '800',
                      }}>
                      0
                    </Text>
                  </View>
                </ScrollView>
              </View>
            </View>
          ) : null}
        </ScrollView>
      </View>
    </View>
  );
};

const Vendite = () => {
  return (
    <View style={{marginHorizontal: 20, marginTop: 30}}>
      <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
        Vendite
      </Text>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#000000',
          borderRadius: 10,
          marginTop: 20,
          padding: 10,
        }}>
        <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
          Resoconti mensili
        </Text>
        <Text style={{color: '#000000', fontSize: 14, fontWeight: '400'}}>
          Scarica i documenti sulla tua attività mensile su Hello Waste.
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#00807a',
            borderRadius: 30,
            marginVertical: 10,
            marginHorizontal: 50,
          }}>
          <Text
            style={{
              color: '#00807a',
              fontSize: 14,
              fontWeight: '600',
              textAlign: 'center',
              padding: 10,
            }}>
            Esporta
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#000000',
          borderRadius: 10,
          marginTop: 20,
          padding: 10,
        }}>
        <Text style={{color: '#000000', fontSize: 16, fontWeight: '600'}}>
          Pagamento
        </Text>
        <Text style={{color: '#000000', fontSize: 14, fontWeight: '400'}}>
          Qui visualizzi i dati inseriti sul conto bancario a cui invieremo i
          pagamenti.
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#00807a',
            borderRadius: 30,
            marginVertical: 10,
            marginHorizontal: 50,
          }}>
          <Text
            style={{
              color: '#00807a',
              fontSize: 14,
              fontWeight: '600',
              textAlign: 'center',
              padding: 10,
            }}>
            Aggiorna coordinate bancarie
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CentroAssistenza = () => {
  return (
    <View style={{marginHorizontal: 20, marginTop: 30}}>
      <Text style={{color: '#000000', fontSize: 18, fontWeight: '700'}}>
        Centro assistenza
      </Text>
      <Text
        style={{
          color: '#000000',
          fontSize: 14,
          fontWeight: '600',
          textAlign: 'center',
          marginTop: 30,
        }}>
        Hai bisogno di aiuto?
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#00807a',
          borderRadius: 30,
          margin: 10,
          marginBottom: 20,
          marginHorizontal: 30,
          shadowOffset: {width: 10, height: 10},
          shadowColor: '#000000',
          shadowOpacity: 1,
          elevation: 10,
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 16,
            fontWeight: '600',
            textAlign: 'center',
            paddingVertical: 5,
          }}>
          Contattaci
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BusinessHomeScreen;
