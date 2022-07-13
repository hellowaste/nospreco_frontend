import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/SignedIn/TabScreens/HomeScreen';
import SearchScreen from '../../screens/SignedIn/TabScreens/SearchScreen';
import FavoriteScreen from '../../screens/SignedIn/TabScreens/FavoritesScreen';
import SettingsScreen from '../../screens/SignedIn/TabScreens/SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MagicBoxScreen from '../../screens/SignedIn/PagesScreens/MagicBox/MagicBoxScreen';
import MagicBoxListScreen from '../../screens/SignedIn/PagesScreens/MagicBox/MagicBoxListScreen';
import SupermarketScreen from '../../screens/SignedIn/PagesScreens/Supermarket/SupermarketScreen';
import AccountDetailsScreen from '../../screens/SignedIn/PagesScreens/Settings/AccountDetails/AccountDetailsScreen';
import AccountInformationsScreen from '../../screens/SignedIn/PagesScreens/Settings/AccountDetails/AccountInformationsScreen';
import PaymentsSetupScreen from '../../screens/SignedIn/PagesScreens/Settings/Payments/PaymentsSetupScreen';
import SuggestionsSetupScreen from '../../screens/SignedIn/PagesScreens/Settings/Suggestions/SuggestionsSetupScreen';
import OrdersHistoryScreen from '../../screens/SignedIn/PagesScreens/Settings/Orders/OrdersHistory/OrdersHistoryScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const signedInScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
  tabBarStyle: {
    backgroundColor: '#ffffff',
  },
  tabBarLabelStyle: {
    fontWeight: '700',
  },
  tabBarActiveTintColor: '#bcd0b1',
  tabBarInactiveTintColor: '#000000',
};

const MainStack = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={signedInScreenOptions}>
        <Stack.Screen name="OrdersHistory" component={OrdersHistoryScreen} />
        <Stack.Screen
          name="SuggestionsSetupScreen"
          component={SuggestionsSetupScreen}
        />
        <Stack.Screen
          name="PayoutSetupScreen"
          component={PaymentsSetupScreen}
        />
        <Stack.Screen
          name="AccountInformationsScreen"
          component={AccountInformationsScreen}
        />
        <Stack.Screen
          name="AccountDetailsScreen"
          component={AccountDetailsScreen}
        />
        <Stack.Screen name="SupermarketScreen" component={SupermarketScreen} />
        <Stack.Screen name="MagicBoxList" component={MagicBoxListScreen} />
        <Stack.Screen name="MagicBoxScreen" component={MagicBoxScreen} />
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
            <MaterialCommunityIcons
              name="home-outline"
              size={30}
              color={'#000000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ricerca"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="magnify"
              size={30}
              color={'#000000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Preferiti"
        component={FavoriteScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="heart-outline"
              size={30}
              color={'#000000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Altro"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={30}
              color={'#000000'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export {SignedInStack, MainStack};
