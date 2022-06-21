import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay/src';
import Loader from 'react-native-modal-loader';

const RegistrationScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [emailAlert, setEmailAlert] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [registrationConfirmation, setRegistrationConfirmation] =
    useState(false);

  const createUser = async values => {
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
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Indietro</Text>
      </TouchableOpacity>
      <Text>Registrazione</Text>
      <View>
        {emailAlert ? <Text>Email obbligatoria</Text> : null}
        <View style={{marginTop: 20, backgroundColor: '#ffffff'}}>
          <TextInput
            placeholder="Email"
            style={{width: '100%', fontSize: 20}}
            placeholderTextColor={'#3d3d3d'}
            autoCapitalize={'none'}
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </View>
        {passwordAlert ? <Text>Password obbligatoria</Text> : null}
        <View style={{marginTop: 20, backgroundColor: '#ffffff'}}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={{width: '100%', fontSize: 20}}
            placeholderTextColor={'#3d3d3d'}
            value={password}
            onChangeText={value => setPassword(value)}
          />
        </View>
        {registrationConfirmation ? (
          <Text style={{marginTop: 20, textAlign: 'center'}}>
            Utente creato correttamente
          </Text>
        ) : null}
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            if (email == '') {
              setEmailAlert(true);
            } else if (password == '') {
              setPasswordAlert(true);
            } else {
              const requestPayload = {
                email: email,
                password: password,
              };
              setIsVisible(true);
              createUser(requestPayload)
                .then(() => {
                  setIsVisible(false);
                  setRegistrationConfirmation(true);
                })
                .catch(error => console.log(error));
            }
          }}>
          <Text style={{textAlign: 'center'}}>Crea account</Text>
        </TouchableOpacity>
      </View>
      <Spinner
        visible={isVisible}
        textContent={'Loading...'}
        // textStyle={styles.spinnerTextStyle}
      />
      <Loader loading={isVisible} color="#FC0D0C" title="loading" />
    </SafeAreaView>
  );
};

export default RegistrationScreen;
