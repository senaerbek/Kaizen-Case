import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {TagModel} from '../../api/models/tag-model';
import {Tag} from '../Tag';

interface TagListProps {
  tagList: TagModel[];
  selectTag: (tag: TagModel) => void;
}

export function TagList(props: TagListProps) {
  const {tagList, selectTag} = props;

  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={tagList}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => selectTag(item)}>
            <Tag tag={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
