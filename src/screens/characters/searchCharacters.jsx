//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
} from '../../store/actions/characterActions';
import Colors from '../../theme/color';
import SearchItem from '../../components/characters/searchCharacter';
import CustomButton from '../../components/uı/customButton';

// create a component
const SearchCharacters = () => {
  const dispatch = useDispatch();
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );
  const [searchText, setSearchText] = useState(null);
  useEffect(() => {
    dispatch(getCharacterList(params));
  }, []);
  const handleSubmit = () => {
    dispatch(changeParams({name: searchText}));
  };
  const ListHeaderComponent = () => {
    return (
      <View>
        <TextInput
          placeholder="Search Character"
          // value={params.name}
          value={searchText}
          returnKeyType="search"
          clearButtonMode="while-editing"
          // onSubmitEditing={handleSubmit}
          // onChangeText={text => {
          //   dispatch(changeParams({name: text}));
          // }}
          onChangeText={text => {
            setSearchText(text);
          }}
          style={{
            backgroundColor: Colors.TİTLECOLOR,
            width: '95%',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: Colors.BROWN,
            borderRadius: 30,
            padding: 10,
          }}
        />
        <CustomButton
          title="Search"
          backColor={Colors.GREEN}
          titleColor={Colors.TİTLECOLOR}
          onPress={() => handleSubmit()}
        />
      </View>
    );
  };

  return (
    <View style={screensStyle.container}>
      <FlatList
        data={characterList}
        renderItem={({item}) => <SearchItem key={item.id} item={item} />}
        ListHeaderComponent={ListHeaderComponent}

        // onEndReachedThreshold={0.5}
        // onEndReached={handleMoreLoad}
        // ListFooterComponent={<Spinner />}
      />
    </View>
  );
};

export default SearchCharacters;
