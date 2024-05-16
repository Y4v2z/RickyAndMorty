import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import {TABNAVIGATOR} from '../utils/routes';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={TABNAVIGATOR} component={TabNavigator} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
