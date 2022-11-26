import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ExtrazoneService} from '../../api/services/extrazone-service';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {PromotionDetailModel} from '../../api/models/promotion-detail-model';
import {Style} from './style';
import {Styles} from '../../components/Carousel/style';
import RenderHtml from 'react-native-render-html';

const width = Dimensions.get('window').width;

type Props = {
  route?: RouteProp<{params: {promotionId: number}}, 'params'>;
};

export function DetailScreen(props: Props) {
  const {promotionId} = props.route?.params || {};
  const navigation = useNavigation();
  const [promotionDetail, setPromotionDetail] =
    useState<PromotionDetailModel | null>(null);

  const goBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    ExtrazoneService.getPromotionDetail(promotionId)
      .then(response => {
        setPromotionDetail(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [promotionId]);

  return (
    <View style={Style.container}>
      <ScrollView>
        <TouchableOpacity style={Style.backButton} onPress={goBackPress}>
          <Image
            source={require('./images/Back.png')}
            style={Style.backButtonImage}
          />
        </TouchableOpacity>

        <View style={Style.body}>
          <Image
            style={Style.image}
            source={{uri: promotionDetail?.ImageUrl}}
          />
          <View style={Style.brandIconContainer}>
            <Image
              resizeMode={'contain'}
              source={{uri: promotionDetail?.BrandIconUrl}}
              style={Styles.brandIcon}
            />
          </View>
          <View style={Styles.remainingTextContainer}>
            <Text style={Styles.remainingText}>
              {promotionDetail?.RemainingText}
            </Text>
          </View>
        </View>
        <Text style={Style.title}>{promotionDetail?.Title}</Text>
        <RenderHtml
          baseStyle={Style.htmlContentStyle}
          tagsStyles={{
            p: {color: '#555'},
            li: {color: '#555'},
            h6: {color: '#555'},
            h5: {color: '#555'},
            h4: {color: '#555'},
            h3: {color: '#555'},
            h2: {color: '#555'},
            h1: {color: '#555'},
            span: {color: '#555'},
          }}
          contentWidth={width}
          source={{
            html: promotionDetail?.Description ?? '<></>',
          }}
        />
      </ScrollView>
      <View style={Style.buttonContainer}>
        <Text style={Style.buttonText}>Hemen Katıl</Text>
      </View>
    </View>
  );
}
