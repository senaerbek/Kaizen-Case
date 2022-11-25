import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {ExtrazoneService} from '../api/services/extrazone-service';
import {TagModel} from '../api/models/tag-model';
import {TagList} from '../components/TagList';
import {PromotionModel} from '../api/models/promotion-model';
import {Carousel} from '../components/Carousel';

export function MainScreen() {
  const [tagList, setTagList] = useState<TagModel[]>([]);
  const [promotion, setPromotion] = useState<PromotionModel[]>([]);

  const selectTag = useCallback((tag: TagModel) => {
    ExtrazoneService.getPromotions(tag.Id)
      .then(response => {
        setPromotion(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
      <TagList tagList={tagList} selectTag={selectTag} />
      <Carousel imageList={promotion.map(i => i.ImageUrl)} />
    </View>
  );
}
