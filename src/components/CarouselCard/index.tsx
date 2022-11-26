import {
  Animated,
  Easing,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Styles} from './style';
import React, {useEffect, useState} from 'react';
import {PromotionModel} from '../../api/models/promotion-model';

interface CarouselCardProps {
  item: PromotionModel;
  index: number;

  onPress: (promotionId: number) => void;
  ITEM_SIZE: number;
  activeIndex: number;
}

export function CarouselCard(props: CarouselCardProps) {
  const {item, index, onPress, ITEM_SIZE, activeIndex} = props;
  const animatedValue = new Animated.Value(0);
  const [scaleValue, setScaleValue] = useState(1);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [scaleValue]);

  useEffect(() => {
    if (activeIndex === index) {
      setScaleValue(1.1);
    } else {
      setScaleValue(1);
    }
  }, [activeIndex, index]);

  return (
    <View>
      <View style={[{width: ITEM_SIZE}, Styles.imageContainer]}>
        <TouchableOpacity onPress={() => onPress(item.Id)}>
          <Animated.View
            style={[
              Styles.imageView,
              {
                transform: [
                  {
                    scaleX: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, scaleValue],
                    }),
                  },
                  {
                    scaleY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, scaleValue],
                    }),
                  },
                ],
              },
            ]}>
            <View
              style={[
                Styles.imageBottom,
                {backgroundColor: item.PromotionCardColor},
              ]}
            />
            <View style={[Styles.bottomContainer, {height: 320}]}>
              <View>
                <View style={Styles.remainingTextContainer}>
                  <Text style={Styles.remainingText}>{item.RemainingText}</Text>
                </View>
                <Image
                  resizeMode={'contain'}
                  source={{uri: item.ImageUrl}}
                  style={Styles.image}
                />
              </View>

              <View style={Styles.titleContainer}>
                <Text style={Styles.title}>{item?.Title}</Text>
                <Text
                  style={[Styles.bottomText, {color: item.PromotionCardColor}]}>
                  Daha Daha
                </Text>
              </View>
              <View style={Styles.brandIconContainer}>
                <Image
                  resizeMode={'contain'}
                  source={{uri: item.BrandIconUrl}}
                  style={Styles.brandIcon}
                />
              </View>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
