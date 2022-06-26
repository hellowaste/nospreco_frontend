import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {logout} from '../../../state/features/user';
import { useDispatch } from "react-redux";

const SettingsScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Text>Settings</Text>
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => dispatch(logout())}>
        <Text style={{textAlign: 'center'}}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;
