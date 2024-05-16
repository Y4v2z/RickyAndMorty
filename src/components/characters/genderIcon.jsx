//import liraries
import React, {Component} from 'react';
import {View} from 'react-native';
import {Man, Woman, Command} from 'iconsax-react-native';
import Colors from '../../theme/color';
import {genderType} from '../../utils/constant';

// create a component
const GenderIcon = ({gender, size}) => {
  if (gender == genderType.MALE)
    return (
      <View>
        <Man size={size} color={Colors.BLACK} />
      </View>
    );
  if (gender == genderType.FEMALE)
    return (
      <View>
        <Woman size={size} color={Colors.BLACK} />
      </View>
    );
  if (gender == genderType.UNKNOWN)
    return (
      <View>
        <Command size={size} color={Colors.BLACK} />
      </View>
    );
};

export default GenderIcon;
