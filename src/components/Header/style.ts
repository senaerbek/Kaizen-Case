import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    minHeight: 50,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15,
  },
  middle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 15,
  },
  loginButton: {
    backgroundColor: '#F40000',
    width: 90,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  userIconView: {
    width: 40,
    height: 40,
    backgroundColor: '#1D1E1C',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userIcon: {
    width: 15,
    height: 15,
    tintColor: '#FFFFFF',
  },
  logo: {
    width: 60,
    height: 30,
  },
});
