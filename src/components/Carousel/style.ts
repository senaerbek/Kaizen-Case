import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

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
});
