import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  tagContainer: {
    height: 36,
    minWidth: 105,
    borderWidth: 1.5,
    borderRadius: 8,
    marginRight: 5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  tagBorder: {
    borderColor: '#ECEEEF',
  },
  selectedTagBorder: {
    borderColor: '#F40000',
  },
  tagImage: {
    height: 24,
    width: 24,
    marginRight: 8,
    borderRadius: 7.2,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#1D1E1C',
  },
});
