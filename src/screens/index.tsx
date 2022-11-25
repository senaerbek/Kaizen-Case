import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {ExtrazoneService} from '../api/services/extrazone-service';
import {TagModel} from '../api/models/tag-model';
import {TagList} from '../components/TagList';

export function MainScreen() {
  const [tagList, setTagList] = useState<TagModel[]>([]);
  console.log(tagList[0]);
  useEffect(() => {
    ExtrazoneService.getTagList()
      .then(response => {
        setTagList(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <TagList tagList={tagList} />
    </View>
  );
}
