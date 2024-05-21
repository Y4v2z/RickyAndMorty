import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import {
  CHARAKTERDETAIL,
  FILTERCHARACTERS,
  SEARCHCHARACTERS,
  TABNAVIGATOR,
} from '../utils/routes';
import CharacterDetail from '../screens/characters/characterDetail';
import Colors from '../theme/color';
import FilterCharacters from '../screens/characters/filterCharacters';
import SearchCharacters from '../screens/characters/searchCharacters';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.BACKGROUND,
        },
        headerTitleAlign: 'center',
        // headerBackTitleVisible: true,
        // headerBackTitle: 'Back',
        // çalışmadı
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TABNAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen name={CHARAKTERDETAIL} component={CharacterDetail} />
      <Stack.Screen name={FILTERCHARACTERS} component={FilterCharacters} />
      <Stack.Screen name={SEARCHCHARACTERS} component={SearchCharacters} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
