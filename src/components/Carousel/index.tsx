import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import {Styles} from './style';
import {PromotionModel} from '../../api/models/promotion-model';
import {Text} from 'react-native';

interface Props {
  imageList: PromotionModel[];
}

const {width} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.82 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export function Carousel(props: Props) {
  const {imageList} = props;
  const scrollX = React.useRef(new Animated.Value(1)).current;

  return (
    <View style={Styles.container}>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={imageList}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        // renderToHardwareTextureAndroid
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
            <View>
              <View style={[{width: ITEM_SIZE}, Styles.imageContainer]}>
                <TouchableOpacity>
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
                          <Text style={Styles.remainingText}>
                            {item.RemainingText}
                          </Text>
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
                          style={[
                            Styles.bottomText,
                            {color: item.PromotionCardColor},
                          ]}>
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
        }}
      />
    </View>
  );
}
