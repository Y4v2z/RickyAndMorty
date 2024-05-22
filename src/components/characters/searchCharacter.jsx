//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {ArrowCircleRight} from 'iconsax-react-native';
import Colors from '../../theme/color';
import {useNavigation} from '@react-navigation/native';
import {CHARAKTERDETAIL} from '../../utils/routes';

// create a component
const SearchItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(CHARAKTERDETAIL, {characterID: item.id})
      }
      style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <ArrowCircleRight size={25} color={Colors.BLACK} />
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: Colors.BROWN,
  },
  name: {
    fontSize: 18,
    padding: 5,
    margin: 5,
  },
});

//make this component available to the app
export default SearchItem;
