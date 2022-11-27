import {Dimensions, Platform, StyleSheet} from 'react-native';

const SIZE = Dimensions.get('window').width;
const IMAGE_SIZE = SIZE * 0.8;

export const Styles = StyleSheet.create({
  container: {
    height: 400,
  },
  imageContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    height: 350,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F4F6F5',
    padding: 2,
  },
  image: {
    width: '100%',
    height: 250,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 100,
    borderBottomEndRadius: 20,
  },
  imageBottom: {
    position: 'absolute',
    marginHorizontal: 10,
    justifyContent: 'flex-start',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 24,
    height: 50,
    bottom: 30,
    left: -8,
    width: IMAGE_SIZE - 4,
    transform: [{rotate: '2deg'}],
    zIndex: 0,
  },
  remainingTextContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    height: 32,
    backgroundColor: '#1D1E1C',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  remainingText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  brandIcon: {
    width: 54,
    height: 54,
  },
  brandIconContainer: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    width: 58,
    height: 58,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  bottomText: {
    fontSize: 12,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
  },
});
