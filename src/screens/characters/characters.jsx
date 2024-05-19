//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
  loadMoreCharecters,
} from '../../store/actions/characterActions';
import Spinner from '../../components/uı/spinner';
import CharacterCard from '../../components/characters/characterCard';

// create a component
const Characters = () => {
  const dispatch = useDispatch();
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );
  useEffect(() => {
    dispatch(getCharacterList(params));
  }, []);
  const handleMoreLoad = () => {
    let page = params.page + 1;
    dispatch(changeParams({page: page}));
    dispatch(loadMoreCharecters(params));
    // console.log(page);
  };

  return (
    <View style={screensStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={characterList}
          renderItem={({item}) => <CharacterCard key={item.id} item={item} />}
          onEndReachedThreshold={0.5}
          onEndReached={handleMoreLoad}
          ListFooterComponent={<Spinner />}
        />
      )}
    </View>
  );
};

export default Characters;
