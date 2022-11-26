import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  Text,
  View,
  ViewToken,
} from 'react-native';
import {Styles} from './style';
import {PromotionModel} from '../../api/models/promotion-model';
import {useNavigation} from '@react-navigation/native';
import {CarouselCard} from '../CarouselCard';

interface Props {
  imageList: PromotionModel[];
}

const {width} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.82 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 3;

export function Carousel(props: Props) {
  const {imageList} = props;
  const navigation = useNavigation();
  const scrollX = React.useRef(new Animated.Value(1)).current;
  const [activeIndex, setActiveIndex] = useState(0);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
    waitForInteraction: true,
    minimumViewTime: 1,
  });

  const onViewableItemsChanged = React.useRef(({changed}) => {
    if (changed && changed.length > 0) {
      setActiveIndex(changed[0].index);
    }
  });

  const navigateToDetailScreen = useCallback(
    (promotionId: number) => {
      // @ts-ignore
      navigation.navigate('DetailScreen', {promotionId});
    },
    [navigation],
  );

  return (
    <View style={Styles.container}>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={imageList}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        snapToInterval={ITEM_SIZE}
        onViewableItemsChanged={onViewableItemsChanged?.current}
        viewabilityConfig={viewabilityConfig?.current}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        renderItem={({item, index}) => {
          return (
            <>
              {index === 0 ? <View style={{width: EMPTY_ITEM_SIZE}} /> : null}
              <CarouselCard
                item={item}
                onPress={navigateToDetailScreen}
                ITEM_SIZE={ITEM_SIZE}
                index={index}
                activeIndex={activeIndex}
              />
              {index === imageList.length - 1 ? (
                <View style={{width: EMPTY_ITEM_SIZE}} />
              ) : null}
            </>
          );
        }}
      />
    </View>
  );
}
