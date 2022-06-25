import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {logout} from '../../../state/features/user';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user);
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Text>Benvenuto {currentUser.email}</Text>
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => dispatch(logout())}>
        <Text style={{textAlign: 'center'}}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
