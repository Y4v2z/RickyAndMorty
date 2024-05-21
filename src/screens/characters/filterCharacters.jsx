//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import CustomButton from '../../components/uı/customButton';
import Colors from '../../theme/color';
import {genders, status} from '../../utils/constant';
import {useDispatch} from 'react-redux';
import {getCharacterList} from '../../store/actions/characterActions';
import {useNavigation} from '@react-navigation/native';

// create a component
const FilterCharacters = () => {
  const [filterGender, setFilterGender] = useState(null);
  const [filterStatus, setFilterStatus] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const filterCharacters = () => {
    const params = {
      gender: filterGender,
      status: filterStatus,
    };
    dispatch(getCharacterList(params));
    navigation.goBack();
  };
  const clearFilters = () => {
    dispatch(getCharacterList());
    navigation.goBack();
  };
  return (
    <View style={screensStyle.container}>
      <View style={{flex: 1}}>
        <ScrollView>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: Colors.BROWN,
              marginVertical: 10,
            }}>
            Gender
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {genders.map(item => (
              <TouchableOpacity
                onPress={() => setFilterGender(item.value)}
                key={item.id}
                style={{
                  backgroundColor:
                    filterGender == item.value ? Colors.GREEN : Colors.BROWN,
                  padding: 10,
                  margin: 3,
                  borderRadius: 5,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: Colors.TİTLECOLOR}}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: Colors.BROWN,
              marginVertical: 10,
            }}>
            Status
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {status.map(item => (
              <TouchableOpacity
                onPress={() => setFilterStatus(item.value)}
                key={item.id}
                style={{
                  backgroundColor:
                    filterStatus == item.value ? Colors.GREEN : Colors.BROWN,
                  padding: 10,
                  margin: 3,
                  borderRadius: 5,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: Colors.TİTLECOLOR}}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row'}}>
        <CustomButton
          onPress={filterCharacters}
          titleColor={Colors.TİTLECOLOR}
          title="Filter"
          backColor={Colors.GREEN}
        />
        <CustomButton
          onPress={clearFilters}
          title="Clear"
          backColor={Colors.TİTLECOLOR}
        />
      </View>
    </View>
  );
};

//make this component available to the app
export default FilterCharacters;
