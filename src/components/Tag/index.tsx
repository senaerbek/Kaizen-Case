import React from 'react';
import {View, Text, Image} from 'react-native';
import {TagModel} from '../../api/models/tag-model';
import {styles} from './style';

interface TagProps {
  tag: TagModel;
  selectedTag: TagModel | null;
}

export function Tag(props: TagProps) {
  const {tag, selectedTag} = props;

  return (
    <View
      style={[
        styles.tagContainer,
        selectedTag?.Id === tag.Id
          ? styles.selectedTagBorder
          : styles.tagBorder,
      ]}>
      <Image
        style={styles.tagImage}
        source={{
          uri: tag.IconUrl,
        }}
      />
      <Text>{tag.Name}</Text>
    </View>
  );
}
