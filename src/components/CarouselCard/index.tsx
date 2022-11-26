import {Animated, Image, Text, TouchableOpacity, View} from 'react-native';
import {Styles} from './style';
import React from 'react';
import {PromotionModel} from '../../api/models/promotion-model';

interface CarouselCardProps {
  item: PromotionModel;
  index: number;
  translateY: any;
  onPress: (promotionId: number) => void;
  ITEM_SIZE: number;
}

export function CarouselCard(props: CarouselCardProps) {
  const {item, index, translateY, onPress, ITEM_SIZE} = props;
  return (
    <View>
      <View style={[{width: ITEM_SIZE}, Styles.imageContainer]}>
        <TouchableOpacity onPress={() => onPress(item.Id)}>
          <Animated.View
            style={[Styles.imageView, {transform: [{translateY}]}]}>
            <View
              style={[
                Styles.imageBottom,
                {backgroundColor: item.PromotionCardColor},
              ]}
            />
            <View
              style={[
                Styles.bottomContainer,
                index !== 1 ? {height: 320} : {height: 370},
              ]}>
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
