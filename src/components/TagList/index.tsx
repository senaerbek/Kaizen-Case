import React, {useCallback, useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {TagModel} from '../../api/models/tag-model';
import {Tag} from '../Tag';

interface TagListProps {
  tagList: TagModel[];
  selectTag: (tag: TagModel) => void;
}

export function TagList(props: TagListProps) {
  const {tagList, selectTag} = props;
  const [selectedTag, setSelectedTag] = useState<TagModel | null>(null);

  const onSelectTag = useCallback(
    (tagItem: TagModel) => {
      selectTag(tagItem);
      setSelectedTag(tagItem);
    },
    [selectTag],
  );

  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={tagList}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => onSelectTag(item)}>
            <Tag tag={item} selectedTag={selectedTag} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
