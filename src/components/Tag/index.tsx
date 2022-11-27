import React from 'react';
import {View, Text, Image} from 'react-native';
import {TagModel} from '../../api/models/tag-model';
import {Styles} from './style';

interface TagProps {
  tag: TagModel;
  selectedTag: TagModel | null;
}

export function Tag(props: TagProps) {
  const {tag, selectedTag} = props;

  return (
    <View
      style={[
        Styles.tagContainer,
        selectedTag?.Id === tag.Id
          ? Styles.selectedTagBorder
          : Styles.tagBorder,
      ]}>
      <Image
        style={Styles.tagImage}
        source={{
          uri: tag.IconUrl,
        }}
      />
      <Text style={Styles.tagText}>{tag.Name}</Text>
    </View>
  );
}
