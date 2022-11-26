import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#ECEEEF',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  tabBarIcon: {
    width: 20,
    height: 20,
  },
  tabBarLabel: {
    fontSize: 10,
  },
  mainScreenIcon: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
});
