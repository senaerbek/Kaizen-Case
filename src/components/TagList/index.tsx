import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {TagModel} from '../../api/models/tag-model';
import {Tag} from '../Tag';

interface TagListProps {
  tagList: TagModel[];
}

export function TagList(props: TagListProps) {
  const {tagList} = props;

  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={tagList}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Tag tag={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
