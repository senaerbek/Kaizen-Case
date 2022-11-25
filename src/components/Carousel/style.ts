import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.82 : width * 0.74;
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: ITEM_SIZE - 20,
    height: 220,
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomStartRadius: 120,
    borderBottomEndRadius: 20,
    margin: 0,
    marginBottom: 10,
  },
  imageBottom: {
    position: 'absolute',
    marginHorizontal: 10,
    justifyContent: 'flex-start',
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
    height: 50,
    bottom: -15,
    left: -10,
    width: ITEM_SIZE - 21,
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
  brandIcon: {
    width: 54,
    height: 54,
  },
  brandIconContainer: {
    position: 'absolute',
    bottom: 120,
    left: 10,
    width: 58,
    height: 58,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
