import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.82 : width * 0.74;
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 303,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  imageBottom: {
    position: 'absolute',
    marginHorizontal: 10,
    justifyContent: 'flex-start',
    backgroundColor: 'blue',
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
    height: 50,
    bottom: -4,
    left: -10,
    width: ITEM_SIZE - 20,
    transform: [{rotate: '3deg'}],
  },
  imageView: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageContainer: {
    position: 'relative',
  },
});
