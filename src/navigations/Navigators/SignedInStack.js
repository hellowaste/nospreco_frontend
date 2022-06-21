import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/SignedIn/TabScreens/HomeScreen';
import SearchScreen from '../../screens/SignedIn/TabScreens/SearchScreen';
import FavoriteScreen from '../../screens/SignedIn/TabScreens/FavoritesScreen';
import SettingsScreen from '../../screens/SignedIn/TabScreens/SettingsScreen';

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
  tabBarActiveTintColor: '#009dff',
};

const MainStack = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={signedInScreenOptions}>
        <Stack.Screen name="Auth" component={SignedInStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const SignedInStack = ({navigation}) => {
  return (
    <Tab.Navigator screenOptions={signedInScreenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} />
      <Tab.Screen name="Other" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export {SignedInStack, MainStack};
