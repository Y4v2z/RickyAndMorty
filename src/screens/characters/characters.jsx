//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';

// create a component
const Charakters = () => {
  return (
    <View style={screensStyle.container}>
      <Text>Charakters</Text>
    </View>
  );
};

//make this component available to the app
export default Charakters;
