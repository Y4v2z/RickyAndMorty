//import liraries
import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Designtools,
  Location,
  PresentionChart,
  Setting4,
} from 'iconsax-react-native';
import {CHARACTERS, EPİSODES, LOCATIONS, SETTINGS} from '../../utils/routes';

// create a component
const TabIcon = ({name, focused, color, size}) => {
  if (name == CHARACTERS)
    return (
      <View>
        <Designtools
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      </View>
    );
  if (name == EPİSODES)
    return (
      <View>
        <PresentionChart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      </View>
    );
  if (name == LOCATIONS)
    return (
      <View>
        <Location
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      </View>
    );
  if (name == SETTINGS)
    return (
      <View>
        <Setting4
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      </View>
    );
};

export default TabIcon;
