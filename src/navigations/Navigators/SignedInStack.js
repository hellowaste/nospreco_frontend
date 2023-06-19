import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/SignedIn/TabScreens/HomeScreen';
import SearchScreen from '../../screens/SignedIn/TabScreens/SearchScreen';
import FavoriteScreen from '../../screens/SignedIn/TabScreens/OrdersScreen';
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
import BusinessHomeScreen from '../../screens/SignedIn/BusinessTabScreens/BusinessHomeScreen';
import BusinessSettingsScreen from '../../screens/SignedIn/BusinessTabScreens/BusinessSettingsScreen';
import BusinessAccountDetailsScreen from '../../screens/SignedIn/BusinessPagesScreens/Settings/BusinessAccountDetails/BusinessAccountDetailsScreen';
import ShopScreen from '../../screens/SignedIn/PagesScreens/Shop/ShopScreen';
import SuggestedStoreScreen from '../../screens/SignedIn/PagesScreens/Store/SuggestedStoreScreen';
import CategoriesScreen from '../../screens/SignedIn/TabScreens/CategoriesScreen';
import StoreCreationScreen from '../../screens/SignedIn/PagesScreens/StoreCreation/StoreCreationScreen';
import StorePayoutDetailsScreen from '../../screens/SignedIn/PagesScreens/StoreCreation/StorePayoutDetailsScreen';
import OrdersScreen from '../../screens/SignedIn/TabScreens/OrdersScreen';
import SearchStoresScreen from '../../screens/SignedIn/Customer/Explore/SearchStoresScreen';
import StoresFiltersScreen from '../../screens/SignedIn/Customer/Explore/StoresFiltersScreen';
import StoreBagsScreen from '../../screens/SignedIn/Customer/Store/StoreBagsScreen';
import HeroBagScreen from '../../screens/SignedIn/Customer/Store/HeroBagScreen';
import Addcreditcard from '../../screens/SignedIn/Customer/Store/Addcreditcard';

import Account from '../../screens/SignedIn/Customer/Settings/Account';
import AppNotifications from '../../screens/SignedIn/Customer/Settings/AppNotifications';
import PaymentMethods from '../../screens/SignedIn/Customer/Settings/PaymentMethods';
import BusinessOnboarding from '../../screens/SignedIn/BusinessOnboarding/BusinessOnboarding';
import BusinessRegister from '../../screens/SignedIn/BusinessAccess/BusinessRegister';
import BusinessRegisterOwner from '../../screens/SignedIn/BusinessAccess/BusinessRegisterOwner';
import BusinessRegisterSummary from '../../screens/SignedIn/BusinessAccess/BusinessSummary';
import BusinessWeekSettings from '../../screens/SignedIn/Business/BusinessWeekSettings';
import BusinessNotificationCenter from '../../screens/SignedIn/Business/BusinessNotificationCenter';
import BusinessNavigationMenu from '../../screens/SignedIn/Business/BusinessNavigationMenu';
import BusinessDay from '../../screens/SignedIn/Business/BusinessDay';
import BusinessWeek from '../../screens/SignedIn/Business/BusinessWeek';
import BusinessOrders from '../../screens/SignedIn/Business/BusinessOrders';
import BusinessWallet from '../../screens/SignedIn/Business/BusinessWallet';
import BusinessStatistics from '../../screens/SignedIn/Business/BusinessStatistics';
import BusinessSettings from '../../screens/SignedIn/Business/BusinessSettings';
import BusinessAddBag from '../../screens/SignedIn/Business/BusinessAddBag';
import BusinessUpdateBag from '../../screens/SignedIn/Business/BusinessUpdateBag';
import MapSettings from '../../screens/SignedIn/Customer/Explore/MapSettings';
import UpdateAccount from "../../screens/SignedIn/Customer/Settings/UpdateAccount";
import EditPaymentMethod from "../../screens/SignedIn/Customer/Settings/EditPaymentMethod";
import UserPreferences from "../../screens/SignedIn/PagesScreens/Settings/Preferences/UserPreferences";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const signedInScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
  tabBarStyle: {
    backgroundColor: '#ffffff',
  },
  tabBarLabelStyle: {
    
  },
  tabBarActiveTintColor: '#21B861',
  tabBarInactiveTintColor: '#A3AEB4',
};

const MainStack = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={signedInScreenOptions}>
        <Stack.Screen
          name="StorePayoutDetailsScreen"
          component={StorePayoutDetailsScreen}
        />
        <Stack.Screen
          name="StoreCreationScreen"
          component={StoreCreationScreen}
        />
        <Stack.Screen
          name="SuggestedStoreScreen"
          component={SuggestedStoreScreen}
        />
        <Stack.Screen name="ShopScreen" component={ShopScreen} />
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
        <Stack.Screen name="Business" component={BusinessSignedOut} />
        <Stack.Screen
          name="SearchStoresScreen"
          component={SearchStoresScreen}
        />
        <Stack.Screen name="MapSettings" component={MapSettings} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />

        <Stack.Screen
          name="StoresFiltersScreen"
          component={StoresFiltersScreen}
        />
        <Stack.Screen name="StoreBagsScreen" component={StoreBagsScreen} />
        <Stack.Screen name="HeroBagScreen" component={HeroBagScreen} />
        <Stack.Screen name="Addcreditcard" component={Addcreditcard} />

        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="UpdateAccount" component={UpdateAccount} />
        <Stack.Screen name="AppNotifications" component={AppNotifications} />
        <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
        <Stack.Screen name="EditPaymentMethod" component={EditPaymentMethod} />
        <Stack.Screen name="UserPreferences" component={UserPreferences} />
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
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={30}
              color={focused ? '#21B861' : '#A3AEB4'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Esplora"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'map' : 'map-outline'}
              size={30}
              color={focused ? '#21B861' : '#A3AEB4'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ordini"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'shopping' : 'shopping-outline'}
              size={30}
              color={focused ? '#21B861' : '#A3AEB4'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Categorie"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'shape' : 'shape-outline'}
              size={30}
              color={focused ? '#21B861' : '#A3AEB4'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profilo"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'account-circle' : 'account-circle-outline'}
              size={30}
              color={focused ? '#21B861' : '#A3AEB4'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const BusinessSignedOut = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="BusinessOnboarding"
        screenOptions={signedInScreenOptions}>
        <Stack.Screen
          name="BusinessOnboarding"
          component={BusinessOnboarding}
        />
        <Stack.Screen name="BusinessRegister" component={BusinessRegister} />
        <Stack.Screen
          name="BusinessRegisterOwner"
          component={BusinessRegisterOwner}
        />
        <Stack.Screen
          name="BusinessRegisterSummary"
          component={BusinessRegisterSummary}
        />
        <Stack.Screen name="BusinessSignedIn" component={BusinessUserStack} />
        <Stack.Screen
          name="BusinessWeekSettings"
          component={BusinessWeekSettings}
        />
        <Stack.Screen
          name="BusinessNotificationCenter"
          component={BusinessNotificationCenter}
        />
        <Stack.Screen
          name="BusinessNavigationMenu"
          component={BusinessNavigationMenu}
        />
        <Stack.Screen name="BusinessDay" component={BusinessDay} />
        <Stack.Screen name="BusinessWeek" component={BusinessWeek} />
        <Stack.Screen name="BusinessOrders" component={BusinessOrders} />
        <Stack.Screen name="BusinessWallet" component={BusinessWallet} />
        <Stack.Screen
          name="BusinessStatistics"
          component={BusinessStatistics}
        />
        <Stack.Screen name="BusinessSettings" component={BusinessSettings} />
        <Stack.Screen name="BusinessAddBag" component={BusinessAddBag} />
        <Stack.Screen name="BusinessUpdateBag" component={BusinessUpdateBag} />
      </Stack.Navigator>
    </NavigationContainer>
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
            <MaterialCommunityIcons
              name="store-outline"
              size={30}
              color={focused ? '#00807a' : '#000000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Altro"
        component={BusinessSettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={30}
              color={focused ? '#00807a' : '#000000'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export {SignedInStack, MainStack, BusinessUserStack, BusinessSignedOut};
