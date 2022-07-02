import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/SignedIn/TabScreens/HomeScreen';
import SearchScreen from '../../screens/SignedIn/TabScreens/SearchScreen';
import FavoriteScreen from '../../screens/SignedIn/TabScreens/FavoritesScreen';
import SettingsScreen from '../../screens/SignedIn/TabScreens/SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const signedInScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
  tabBarStyle: {
    backgroundColor: '#00807a',
  },
  tabBarLabelStyle: {
    fontWeight: '700',
    color: '#06e3d9',
  },
  tabBarActiveTintColor: '#ffffff',
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
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home-outline" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Ricerca"
        component={SearchScreen}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="magnify" size={30} />,
        }}
      />
      <Tab.Screen
        name="Preferiti"
        component={FavoriteScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="heart-outline" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Altro"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="dots-horizontal" size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export {SignedInStack, MainStack};
