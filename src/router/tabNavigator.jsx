import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Charakters from '../screens/characters/characters';
import Episodes from '../screens/episodes/episedes';
import Locations from '../screens/locations/locations';
import Settings from '../screens/settings/settings';
import Colors from '../theme/color';
import {tabBarStyle} from '../styles/tabBarStyle';
import {CHARACTERS, EPİSODES, LOCATIONS, SETTINGS} from '../utils/routes';
import TabIcon from '../components/icons/tabIcon';
import Characters from '../screens/characters/characters';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            name={route?.name}
            focused={focused}
            color={color}
            size={size}
          />
        ),

        headerTitleAlign: 'center',
        headerStyle: tabBarStyle.headerStyle,
        tabBarStyle: tabBarStyle.tabBarStyle,
        tabBarActiveTintColor: Colors.PRIMARY,
      })}>
      <Tab.Screen name={CHARACTERS} component={Characters} />
      <Tab.Screen name={EPİSODES} component={Episodes} />
      <Tab.Screen name={LOCATIONS} component={Locations} />
      <Tab.Screen name={SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
}
