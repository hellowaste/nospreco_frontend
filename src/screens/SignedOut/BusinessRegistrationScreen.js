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
import appLogo from '../../assets/logo/app/app_logo.png';
import * as Animatable from 'react-native-animatable';

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

const FlippingImage = ({
  back = false,
  delay,
  duration = 4000,
  source,
  style = {},
}) => (
  <Animatable.Image
    animation={'flash'}
    duration={duration}
    delay={delay}
    easing="linear"
    iterationCount="infinite"
    useNativeDriver
    source={source}
    style={{
      ...style,
      backfaceVisibility: 'hidden',
      width: 110,
      height: 110,
    }}
  />
);

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
        backgroundColor: '#ffffff',
        paddingTop: 20,
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
      {isVisible ? (
        <View
          style={{
            position: 'absolute',
            width: 100,
            height: 100,
            paddingTop: 10,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            top: '50%',
            left: '35%',
            alignItems: 'center',
            justifyContent: 'center',
            shadowOffset: {width: 10, height: 10},
            shadowColor: '#000000',
            shadowOpacity: 1,
            elevation: 3,
          }}>
          <FlippingImage source={appLogo} delay={1} />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default BusinessRegistrationScreen;
