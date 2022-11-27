import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sliderDot: {
    margin: 3,

    height: 8,
    borderRadius: 50,
  },
  sliderDotPassive: {width: 8, backgroundColor: '#D8D8D8'},
  sliderDotActive: {
    width: 18,
    backgroundColor: '#F40000',
  },
});
