import React from 'react';
import {Animated, Dimensions, Image, Platform, View} from 'react-native';
import {Styles} from './style';

interface Props {
  imageList: string[];
}

const {width} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.82 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export function Carousel(props: Props) {
  const {imageList} = props;
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={Styles.container}>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={imageList}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
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
            outputRange: [70, 50, 70],
          });

          return (
            <>
              <View style={[{width: ITEM_SIZE}, Styles.imageContainer]}>
                <Animated.View
                  style={[Styles.imageView, {transform: [{translateY}]}]}>
                  <View style={Styles.imageBottom} />
                  <Image source={{uri: item}} style={Styles.image} />
                </Animated.View>
              </View>
            </>
          );
        }}
      />
    </View>
  );
}
