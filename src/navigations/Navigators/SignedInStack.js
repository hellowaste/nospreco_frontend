import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const signedInScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
  tabBarStyle: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    borderRadius: 25,
    marginBottom: 20,
    marginHorizontal: 10,
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
    },
    shadowRadius: 3.5,
  },
  tabBarLabelStyle: {
    fontSize: 8,
    marginHorizontal: 2,
    marginBottom: -10,
  },
  tabBarActiveTintColor: '#009dff',
};

const MainStack = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={signedInScreenOptions}>
        <Stack.Screen name="Main" component={NotificationsScreen} />
        <Stack.Screen name="Auth" component={SignedInStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const SignedInStack = ({navigation}) => {
  return (
    <Tab.Navigator screenOptions={signedInScreenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Servizi" component={GetHelpScreen} />
      <Tab.Screen
        name="Ordini & Contratti"
        component={OrdersAndContractsScreen}
      />
      <Tab.Screen name="Professionista" component={BecomeProfessionalScreen} />
    </Tab.Navigator>
  );
};

export {SignedInStack, MainStack};
