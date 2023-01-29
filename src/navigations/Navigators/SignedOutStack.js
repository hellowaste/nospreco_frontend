import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RegistrationScreen from '../../screens/SignedOut/RegistrationScreen';
import LoginScreen from '../../screens/SignedOut/LoginScreen';
import BusinessRegistrationScreen from '../../screens/SignedOut/BusinessRegistrationScreen';
import ForgotPasswordScreen from '../../screens/SignedOut/ForgotPasswordScreen';
import TermsScreen from '../../screens/SignedOut/TermsScreen';
import PrivacyPolicyScreen from '../../screens/SignedOut/PrivacyPolicyScreen';
import WelcomeScreen from '../../screens/SignedOut/Onboarding/WelcomeScreen';
import RegisterScreen from '../../screens/SignedOut/Access/RegisterScreen';
import AccessScreen from '../../screens/SignedOut/Access/AccessScreen';
import RecoverPassword from '../../screens/SignedOut/Recovery/RecoverPassword';
import ConfirmRecovery from '../../screens/SignedOut/Recovery/ConfirmRecovery';
import SetupPassword from '../../screens/SignedOut/Recovery/SetupPassword';

const Stack = createStackNavigator();

const signedOutScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={signedOutScreenOptions}>
      <Stack.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen name="TermsScreen" component={TermsScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen
        name="BusinessRegistrationScreen"
        component={BusinessRegistrationScreen}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="AccessScreen" component={AccessScreen} />
      <Stack.Screen name="RecoverPasswordScreen" component={RecoverPassword} />
      <Stack.Screen name="ConfirmRecoveryScreen" component={ConfirmRecovery} />
      <Stack.Screen name="SetupPasswordScreen" component={SetupPassword} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedOutStack;
