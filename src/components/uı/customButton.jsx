//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../theme/color';

// create a component
const CustomButton = props => {
  const {title, backColor, titleColor = Colors.BLACK} = props;
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: backColor}]}>
      <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  title: {
    fontSize: 20,
    color: Colors.WHITE,
  },
});

//make this component available to the app
export default CustomButton;
