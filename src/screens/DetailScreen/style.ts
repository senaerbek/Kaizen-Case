import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  body: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: '#1D1E1C',
    zIndex: 1,
    top: 50,
    left: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonImage: {
    width: 15,
    height: 15,
  },
  htmlContentStyle: {
    marginHorizontal: 15,
  },
  image: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 120,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginHorizontal: 15,
    marginVertical: 15,
    color: '#1D1E1C',
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
  buttonContainer: {
    height: 56,
    backgroundColor: '#F40000',
    borderRadius: 28,
    marginBottom: 20,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
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
});
