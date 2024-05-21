//import liraries
import {FilterSearch, SearchNormal} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Colors from '../theme/color';
import {useNavigation} from '@react-navigation/native';
import {FILTERCHARACTERS, SEARCHCHARACTERS} from '../utils/routes';

// create a component
const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate(SEARCHCHARACTERS)}
        style={styles.button}>
        <SearchNormal size={27} color={Colors.BLACK} />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate(FILTERCHARACTERS)}
        style={styles.button}>
        <FilterSearch size={27} color={Colors.BLACK} />
      </Pressable>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  button: {
    marginHorizontal: 5,
  },
});

//make this component available to the app
export default HeaderRight;
