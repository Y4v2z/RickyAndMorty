import {StyleSheet} from 'react-native';
import Colors from '../theme/color';

export const characterDetailStyle = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
    borderWidth: 3,
  },
  imageAliveStatusBorder: {
    borderColor: Colors.GREEN,
  },
  imageDeadStatusBorder: {
    borderWidth: 2,
    borderColor: Colors.RED,
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    color: Colors.BLACK,
  },
  aliveStatusContainer: {
    backgroundColor: Colors.GREEN,
    borderRadius: 5,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: -5,
  },
  deadthStatusContainer: {
    backgroundColor: Colors.RED,
    paddingHorizontal: 20,
    borderRadius: 5,
    position: 'absolute',
    bottom: -5,
  },
  status: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: '500',
  },
  sectionContainer: {
    margin: 5,
  },
  sectionTitle: {
    color: Colors.BROWN,
    textAlign: 'center',
    marginVertical: 10,
  },
});
