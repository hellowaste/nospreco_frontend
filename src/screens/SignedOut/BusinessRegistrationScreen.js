import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PhoneInput from 'react-native-phone-number-input';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay/src';
import Loader from 'react-native-modal-loader';

const createBusinessUser = async values => {
  let res;
  await axios
    .post('https://nospreco-backend.herokuapp.com/user/register', values)
    .then(response => {
      console.log(response.data);
      res = response.data;
    })
    .catch(error => console.log(error));
  return res;
};

const BusinessRegistrationScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [emailAlert, setEmailAlert] = useState(false);
  const [incorrectEmail, setIncorrectEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [passwordLengthAlert, setPasswordLengthAlert] = useState(false);
  const [registrationConfirmation, setRegistrationConfirmation] =
    useState(false);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#eee',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            color={'#00807a'}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 23,
            fontWeight: '600',
            color: '#000000',
            marginLeft: 20,
          }}>
          Registra il tuo store
        </Text>
      </View>
      <ScrollView
        style={{marginHorizontal: 20, marginTop: 20}}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 5,
            padding: 5,
            shadowOpacity: 0.5,
            shadowColor: '#bebebe',
            shadowRadius: 10,
          }}>
          <TextInput
            placeholder="Email"
            style={{width: '100%', fontSize: 18}}
            placeholderTextColor={'#3d3d3d'}
            autoCapitalize={'none'}
            value={email}
            onChangeText={value => {
              setEmail(value);
              setEmailAlert(false);
              setIncorrectEmail(false);
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 5,
            padding: 5,
            shadowOpacity: 0.5,
            shadowColor: '#bebebe',
            shadowRadius: 10,
            marginTop: 10,
          }}>
          <TextInput
            placeholder="Password"
            style={{width: '100%', fontSize: 18}}
            placeholderTextColor={'#3d3d3d'}
            autoCapitalize={'none'}
            value={email}
            secureTextEntry={true}
            onChangeText={value => {
              setEmail(value);
              setEmailAlert(false);
              setIncorrectEmail(false);
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 5,
            padding: 5,
            shadowOpacity: 0.5,
            shadowColor: '#bebebe',
            shadowRadius: 10,
            marginTop: 10,
          }}>
          <TextInput
            placeholder="Indirizzo"
            style={{width: '100%', fontSize: 18}}
            placeholderTextColor={'#3d3d3d'}
            autoCapitalize={'none'}
            value={email}
            onChangeText={value => {
              setEmail(value);
              setEmailAlert(false);
              setIncorrectEmail(false);
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 5,
            padding: 5,
            shadowOpacity: 0.5,
            shadowColor: '#bebebe',
            shadowRadius: 10,
            marginTop: 10,
          }}>
          <TextInput
            placeholder="Città"
            style={{width: '100%', fontSize: 18}}
            placeholderTextColor={'#3d3d3d'}
            autoCapitalize={'none'}
            value={email}
            onChangeText={value => {
              setEmail(value);
              setEmailAlert(false);
              setIncorrectEmail(false);
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 5,
            padding: 5,
            shadowOpacity: 0.5,
            shadowColor: '#bebebe',
            shadowRadius: 10,
            marginTop: 10,
          }}>
          <TextInput
            placeholder="Codice Postale"
            style={{width: '100%', fontSize: 18}}
            placeholderTextColor={'#3d3d3d'}
            autoCapitalize={'none'}
            value={email}
            onChangeText={value => {
              setEmail(value);
              setEmailAlert(false);
              setIncorrectEmail(false);
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 5,
            padding: 5,
            shadowOpacity: 0.5,
            shadowColor: '#bebebe',
            shadowRadius: 10,
            marginTop: 10,
          }}>
          <TextInput
            placeholder="Paese"
            style={{width: '100%', fontSize: 18}}
            placeholderTextColor={'#3d3d3d'}
            autoCapitalize={'none'}
            value={email}
            onChangeText={value => {
              setEmail(value);
              setEmailAlert(false);
              setIncorrectEmail(false);
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            flex: 1,
          }}>
          <PhoneInput
            defaultValue={''}
            defaultCode="IT"
            layout="second"
            onChangeText={text => {
              setValue(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            autoFocus={false}
            containerStyle={{borderRadius: 5, height: 75}}
            textContainerStyle={{borderRadius: 5, width: '100%'}}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#00807a',
            marginHorizontal: 40,
            borderRadius: 30,
            marginTop: 50,
            shadowOpacity: 0.5,
            shadowColor: '#8f8f8f',
          }}
          onPress={() => {
            const requestPayload = {
              email: email,
              password: password,
            };
            console.log(requestPayload);
          }}>
          <Text
            style={{
              textAlign: 'center',
              paddingVertical: 15,
              fontSize: 16,
              fontWeight: '700',
              color: '#ffffff',
            }}>
            Crea account
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Spinner
        visible={isVisible}
        textContent={'Loading...'}
        // textStyle={styles.spinnerTextStyle}
      />
      <Loader loading={isVisible} color="#FC0D0C" title="loading" />
    </SafeAreaView>
  );
};

export default BusinessRegistrationScreen;
