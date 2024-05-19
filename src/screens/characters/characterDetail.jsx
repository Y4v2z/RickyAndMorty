//import liraries
import React, {useEffect} from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  getSingleCharacter,
  resetData,
} from '../../store/actions/characterActions';
import Spinner from '../../components/uı/spinner';
import {characterDetailStyle} from '../../styles/characterStyle';
import {statusType} from '../../utils/constant';
import {ArrowDown3} from 'iconsax-react-native';
import Colors from '../../theme/color';

// create a component
const CharacterDetail = ({route}) => {
  const {characterID} = route.params;
  const dispatch = useDispatch();
  const {singleCharacter, singleCharacterPending} = useSelector(
    state => state.characters,
  );
  // console.log(JSON.stringify(singleCharacter, 0, 2));
  useEffect(() => {
    dispatch(getSingleCharacter(characterID));

    return () => {
      dispatch(resetData());
    };
  }, []);

  return (
    <View style={screensStyle.container}>
      {singleCharacterPending ? (
        <Spinner />
      ) : (
        <ScrollView>
          <View style={characterDetailStyle.imageContainer}>
            <Image
              style={[
                characterDetailStyle.image,
                singleCharacter.status == statusType.ALIVE
                  ? characterDetailStyle.imageAliveStatusBorder
                  : characterDetailStyle.imageDeadStatusBorder,
              ]}
              source={{
                uri: singleCharacter.image,
              }}
            />
            <View
              style={
                singleCharacter.status == statusType.ALIVE
                  ? characterDetailStyle.aliveStatusContainer
                  : characterDetailStyle.deadthStatusContainer
              }>
              <Text style={characterDetailStyle.status}>
                {singleCharacter.status}
              </Text>
            </View>
          </View>
          <View style={characterDetailStyle.nameContainer}>
            <Text style={characterDetailStyle.name}>
              {singleCharacter.name}
            </Text>
          </View>
          <View style={characterDetailStyle.sectionContainer}>
            <Text style={characterDetailStyle.sectionTitle}>PROPERTIES</Text>
            <View style={characterDetailStyle.detailPageeRows}>
              <View style={characterDetailStyle.detailPageeLeft}>
                <Text>Gender</Text>
              </View>
              <View style={characterDetailStyle.detailPageRight}>
                <Text>{singleCharacter.gender}</Text>
              </View>
            </View>
            <View style={characterDetailStyle.detailPageeRows}>
              <View style={characterDetailStyle.detailPageeLeft}>
                <Text>Species</Text>
              </View>
              <View style={characterDetailStyle.detailPageRight}>
                <Text>{singleCharacter.species}</Text>
              </View>
            </View>
            <View style={characterDetailStyle.detailPageeRows}>
              <View style={characterDetailStyle.detailPageeLeft}>
                <Text>Status</Text>
              </View>
              <View style={characterDetailStyle.detailPageRight}>
                <Text>{singleCharacter.status}</Text>
              </View>
            </View>
          </View>
          <View style={characterDetailStyle.sectionContainer}>
            <Text style={characterDetailStyle.sectionTitle}>WHEREABOUTS</Text>
            <View style={characterDetailStyle.detailPageeRows}>
              <View style={characterDetailStyle.detailPageeLeft}>
                <Text>Origin</Text>
              </View>
              <View style={characterDetailStyle.whereAboutRight}>
                <Text>{singleCharacter?.origin?.name}</Text>
                <TouchableOpacity style={{position: 'absolute', right: 5}}>
                  <ArrowDown3 size={18} color={Colors.BLACK} variant="Bold" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={characterDetailStyle.detailPageeRows}>
              <View style={characterDetailStyle.detailPageeLeft}>
                <Text>Location</Text>
              </View>
              <View style={characterDetailStyle.whereAboutRight}>
                <Text>{singleCharacter?.location?.name}</Text>
                <TouchableOpacity style={{position: 'absolute', right: 5}}>
                  <ArrowDown3 size={18} color={Colors.BLACK} variant="Bold" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={characterDetailStyle.sectionContainer}>
            <Text style={characterDetailStyle.sectionTitle}>
              FEATURE CHAPTERS
            </Text>
            <View style={characterDetailStyle.detailPageeRows}>
              <View style={characterDetailStyle.detailPageeLeft}>
                <Text>Created</Text>
              </View>
              <View style={characterDetailStyle.detailPageRight}>
                <Text>{singleCharacter.created}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

// define your styles

//make this component available to the app
export default CharacterDetail;
