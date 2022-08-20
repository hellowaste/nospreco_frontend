import React, {useState} from 'react';
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
import NotificationsSetupScreen from '../../screens/SignedIn/PagesScreens/Settings/Notifications/NotificationsSetupScreen';
import ShopDetailsScreen from '../../screens/SignedIn/PagesScreens/Store/ShopDetailsScreen';
import UserPositionScreen from '../../screens/SignedIn/PagesScreens/Position/UserPositionScreen';
import {View} from 'react-native';
import BusinessHomeScreen from '../../screens/SignedIn/BusinessTabScreens/BusinessHomeScreen';
import BusinessSettingsScreen from '../../screens/SignedIn/BusinessTabScreens/BusinessSettingsScreen';
import BusinessAccountDetailsScreen from '../../screens/SignedIn/BusinessPagesScreens/Settings/BusinessAccountDetails/BusinessAccountDetailsScreen';

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
  tabBarActiveTintColor: '#00807a',
  tabBarInactiveTintColor: '#000000',
};

const MainStack = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={signedInScreenOptions}>
        <Stack.Screen
          name="BusinessAccountDetailsScreen"
          component={BusinessAccountDetailsScreen}
        />
        <Stack.Screen name="Preferiti" component={FavoriteScreen} />
        <Stack.Screen
          name="UserPositionScreen"
          component={UserPositionScreen}
        />
        <Stack.Screen name="ShopDetailsScreen" component={ShopDetailsScreen} />
        <Stack.Screen
          name="NotificationsSetupScreen"
          component={NotificationsSetupScreen}
        />
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
        <Stack.Screen name="Business" component={BusinessUserStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const SignedInStack = ({navigation}) => {
  const [homeColor, setHomeColor] = useState('');
  const [searchColor, setSearchColor] = useState('');
  const [settingsColor, setSettingsColor] = useState('');
  return (
    <Tab.Navigator screenOptions={signedInScreenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: homeColor,
                borderRadius: 20,
                paddingHorizontal: 10,
              }}>
              <MaterialCommunityIcons
                name="home-outline"
                size={30}
                color={focused ? '#00807a' : '#000000'}
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: () => {
            setHomeColor('rgba(0,128,122,0.15)');
            setTimeout(() => {
              setHomeColor('rgba(0,128,122,0)');
            }, 75);
          },
        }}
      />
      <Tab.Screen
        name="Esplora"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: searchColor,
                borderRadius: 20,
                paddingHorizontal: 10,
              }}>
              <MaterialCommunityIcons
                name="map"
                size={30}
                color={focused ? '#00807a' : '#000000'}
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: () => {
            setSearchColor('rgba(0,128,122,0.15)');
            setTimeout(() => {
              setSearchColor('rgba(0,128,122,0)');
            }, 75);
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: settingsColor,
                borderRadius: 20,
                paddingHorizontal: 10,
              }}>
              <MaterialCommunityIcons
                name="account-cog-outline"
                size={30}
                color={focused ? '#00807a' : '#000000'}
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: () => {
            setSettingsColor('rgba(0,128,122,0.15)');
            setTimeout(() => {
              setSettingsColor('rgba(0,128,122,0)');
            }, 75);
          },
        }}
      />
    </Tab.Navigator>
  );
};

const BusinessUserStack = () => {
  return (
    <Tab.Navigator screenOptions={signedInScreenOptions}>
      <Tab.Screen
        name="MyStore"
        component={BusinessHomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 20,
                paddingHorizontal: 10,
              }}>
              <MaterialCommunityIcons
                name="store-outline"
                size={30}
                color={focused ? '#00807a' : '#000000'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Altro"
        component={BusinessSettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 20,
                paddingHorizontal: 10,
              }}>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={30}
                color={focused ? '#00807a' : '#000000'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export {SignedInStack, MainStack, BusinessUserStack};
