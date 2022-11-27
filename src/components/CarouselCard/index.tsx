import {Dimensions, Image, Text, View} from 'react-native';
import {Styles} from './style';
import React from 'react';
import {PromotionModel} from '../../api/models/promotion-model';
import RenderHtml from 'react-native-render-html';

const SIZE = Dimensions.get('window').width;

interface CarouselCardProps {
  item: PromotionModel;
}

export function CarouselCard(props: CarouselCardProps) {
  const {item} = props;

  return (
    <View style={Styles.container}>
      <View
        style={[Styles.imageBottom, {backgroundColor: item.PromotionCardColor}]}
      />
      <View style={Styles.imageContainer}>
        <View>
          <Image
            resizeMode={'stretch'}
            source={{uri: item.ImageUrl}}
            style={Styles.image}
          />
          <View style={Styles.remainingTextContainer}>
            <Text style={Styles.remainingText}>{item.RemainingText}</Text>
          </View>
          <View style={Styles.brandIconContainer}>
            <Image
              resizeMode={'contain'}
              source={{uri: item.BrandIconUrl}}
              style={Styles.brandIcon}
            />
          </View>
        </View>
        {item.Title.includes('<') && item.Title.includes('>') ? (
          <RenderHtml
            baseStyle={Styles.htmlContentStyle}
            tagsStyles={{
              p: {color: '#000000', textAlign: 'center'},
              li: {color: '#000000', textAlign: 'center'},
              h6: {color: '#000000', textAlign: 'center'},
              h5: {color: '#000000', textAlign: 'center'},
              h4: {color: '#000000', textAlign: 'center'},
              h3: {color: '#000000', textAlign: 'center'},
              h2: {color: '#000000', textAlign: 'center'},
              h1: {color: '#000000', textAlign: 'center'},
              span: {color: '#000000', textAlign: 'center'},
            }}
            contentWidth={SIZE}
            source={{
              html: item?.Title ?? '',
            }}
          />
        ) : (
          <Text style={Styles.title}>{item.Title}</Text>
        )}
        <Text style={[Styles.bottomText, {color: item.PromotionCardColor}]}>
          Daha Daha
        </Text>
      </View>
    </View>
  );
}
