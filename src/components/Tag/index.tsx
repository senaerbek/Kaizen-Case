import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {TagModel} from '../../api/models/tag-model';
import {styles} from './style';

interface TagProps {
  tag: TagModel;
}

export function Tag(props: TagProps) {
  const {tag} = props;

  return (
    <View style={styles.tagContainer}>
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
