import React, {useCallback} from 'react';
import {Animated, Dimensions, Platform, View} from 'react-native';
import {Styles} from './style';
import {PromotionModel} from '../../api/models/promotion-model';
import {useNavigation} from '@react-navigation/native';
import {CarouselCard} from '../CarouselCard';

interface Props {
  imageList: PromotionModel[];
}

const {width} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.82 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export function Carousel(props: Props) {
  const {imageList} = props;
  const navigation = useNavigation();
  const scrollX = React.useRef(new Animated.Value(1)).current;

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
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        renderItem={({item, index}) => {
          if (index === 0) {
            return <View style={{width: EMPTY_ITEM_SIZE}} />;
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [70, 70, 70],
          });

          return (
            <CarouselCard
              item={item}
              translateY={translateY}
              onPress={navigateToDetailScreen}
              ITEM_SIZE={ITEM_SIZE}
              index={index}
            />
          );
        }}
      />
    </View>
  );
}
