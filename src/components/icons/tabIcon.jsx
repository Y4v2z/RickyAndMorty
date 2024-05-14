//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Home} from 'iconsax-react-native';
import {CHARAKTERS, EPİSODES, LOCATIONS, SETTINGS} from '../../utils/routes';

// create a component
const TabIcon = ({name, focused, color, size}) => {
  if (name == CHARAKTERS)
    return (
      <View>
        <Home
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      </View>
    );
  if (name == EPİSODES)
    return (
      <View>
        <Home
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      </View>
    );
  if (name == LOCATIONS)
    return (
      <View>
        <Home
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      </View>
    );
  if (name == SETTINGS)
    return (
      <View>
        <Home
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      </View>
    );
};

export default TabIcon;
