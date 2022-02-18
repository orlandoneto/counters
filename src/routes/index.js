import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { TouchableOpacity } from 'react-native';
import ArrowLeftIcon from '~/assets/svg/arrow-left.svg';

import Counters from '~/pages/Counters';
import Config from '~/pages/Counters/components/Config';

const Stack = createStackNavigator();

const AppStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName='Counter'>
      <Stack.Screen
        name='Counter'
        component={Counters}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Counters',
        })}
      />

      <Stack.Screen
        name='Config'
        component={Config}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Config',
          headerLeft: () => (
            <TouchableOpacity
              style={{
                paddingLeft: 15,
                paddingRight: 10,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.goBack()}
            >
              <ArrowLeftIcon />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const Routes = () => <AppStackScreen />;

export default Routes;
