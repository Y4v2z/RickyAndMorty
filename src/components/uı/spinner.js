//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import Colors from '../../theme/color';

// create a component
const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={Colors.BLACK} />
      <Text>Loading...</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Spinner;
