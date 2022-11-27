import React, {useCallback, useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  runOnJS,
} from 'react-native-reanimated';
import {PromotionModel} from '../../api/models/promotion-model';
import {CarouselCard} from '../CarouselCard';
import {Styles} from './style';
import {TouchableComponent} from '../TouchableComponent';
import {useNavigation} from '@react-navigation/native';

const SIZE = Dimensions.get('window').width;
const CAROUSEL_ITEM_SIZE = SIZE * 0.8;
const SPACING = (SIZE - CAROUSEL_ITEM_SIZE) / 2;

interface Props {
  promotion: PromotionModel[];
}

export function Carousel(props: Props) {
  const {promotion} = props;
  const newData = [{key: 'left-spacer'}, ...promotion, {key: 'right-spacer'}];
  const [index, setIndex] = useState(0);
  const sharedValue = useSharedValue(0);

  const applyAnimation = useCallback(() => {
    const CustomAnimation = {
      duration: 200,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.scaleX,
        springDamping: 0.7,
      },
      update: {
        type: LayoutAnimation.Types.linear,
        springDamping: 0.7,
      },
    };
    LayoutAnimation.configureNext(CustomAnimation);
  }, []);

  const setSharedValue = useCallback(
    (event: NativeScrollEvent) => {
      sharedValue.value = event.contentOffset.x;
    },
    [sharedValue],
  );

  let setPageIndex: (page: number) => void;
  setPageIndex = useCallback((page: number) => {
    setIndex(page);
    applyAnimation();
  }, []);

  const onScroll = useAnimatedScrollHandler(event => {
    runOnJS(setSharedValue)(event);
    runOnJS(setPageIndex)(
      Math.round(event.contentOffset.x / CAROUSEL_ITEM_SIZE),
    );
  });

  return (
    <>
      <Animated.View>
        <View>
          <Animated.ScrollView
            onScroll={onScroll}
            scrollEventThrottle={16}
            decelerationRate="fast"
            snapToInterval={CAROUSEL_ITEM_SIZE}
            horizontal={true}
            bounces={false}
            showsHorizontalScrollIndicator={false}>
            {newData.map((item, index) => {
              if (!item?.Id) {
                return <View style={{width: SPACING}} key={index} />;
              }
              return (
                <CarouselItem
                  item={item}
                  index={index}
                  sharedValue={sharedValue}
                />
              );
            })}
          </Animated.ScrollView>
        </View>
      </Animated.View>
      <View style={Styles.sliderContainer}>
        {promotion.map((item, i) => (
          <View
            style={[
              Styles.sliderDot,
              i === index ? Styles.sliderDotActive : Styles.sliderDotPassive,
            ]}
          />
        ))}
      </View>
    </>
  );
}

interface CarouselItemProps {
  item: PromotionModel;
  index: number;
  sharedValue: Animated.SharedValue<number>;
}

function CarouselItem(props: CarouselItemProps) {
  const {item, index, sharedValue} = props;
  const navigation = useNavigation();

  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      sharedValue.value,
      [
        (index - 2) * CAROUSEL_ITEM_SIZE,
        (index - 1) * CAROUSEL_ITEM_SIZE,
        index * CAROUSEL_ITEM_SIZE,
      ],
      [0.88, 1, 0.88],
    );
    return {
      transform: [{scale}],
    };
  });

  const navigateToDetailScreen = useCallback(() => {
    navigation.navigate('DetailScreen', {promotionId: item.Id});
  }, [item.Id, navigation]);

  return (
    <View style={{width: CAROUSEL_ITEM_SIZE}} key={index}>
      <Animated.View style={[style]}>
        <TouchableComponent onPress={navigateToDetailScreen}>
          <CarouselCard item={item} />
        </TouchableComponent>
      </Animated.View>
    </View>
  );
}
