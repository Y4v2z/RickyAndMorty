//import liraries
import React, {useEffect} from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getSingleCharacter} from '../../store/actions/characterActions';
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
      console.log(characterID);
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 5,
              }}>
              <View
                style={{
                  backgroundColor: '#e5ded1',
                  padding: 10,
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Text>Gender</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#e5ded1',
                  padding: 10,
                  marginLeft: 10,
                  flex: 2,
                  alignItems: 'center',
                }}>
                <Text>{singleCharacter.gender}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 5,
              }}>
              <View
                style={{
                  backgroundColor: '#e5ded1',
                  padding: 10,
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Text>Species</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#e5ded1',
                  padding: 10,
                  marginLeft: 10,
                  flex: 2,
                  alignItems: 'center',
                }}>
                <Text>{singleCharacter.species}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 5,
              }}>
              <View
                style={{
                  backgroundColor: '#e5ded1',
                  padding: 10,
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Text>Status</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#e5ded1',
                  padding: 10,
                  marginLeft: 10,
                  flex: 2,
                  alignItems: 'center',
                }}>
                <Text>{singleCharacter.status}</Text>
              </View>
            </View>
          </View>
          <View style={characterDetailStyle.sectionContainer}>
            <Text style={characterDetailStyle.sectionTitle}>WHEREABOUTS</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 5,
              }}>
              <View
                style={{
                  backgroundColor: '#e5ded1',
                  padding: 10,
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Text>Origin</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#e5ded1',
                  padding: 10,
                  marginLeft: 10,
                  flex: 2,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text>{singleCharacter.origin.name}</Text>
                <TouchableOpacity style={{position: 'absolute', right: 5}}>
                  <ArrowDown3 size={18} color={Colors.BLACK} variant="Bold" />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 5,
              }}>
              <View
                style={{
                  backgroundColor: '#e5ded1',
                  padding: 10,
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Text>Location</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#e5ded1',
                  padding: 10,
                  marginLeft: 10,
                  flex: 2,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text>{singleCharacter.location.name}</Text>
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 5,
              }}>
              <View
                style={{
                  backgroundColor: '#e5ded1',
                  padding: 10,
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Text>Created</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#e5ded1',
                  padding: 10,
                  marginLeft: 10,
                  flex: 2,
                  alignItems: 'center',
                }}>
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
