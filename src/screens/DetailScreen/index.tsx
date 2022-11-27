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
import {Styles} from './style';
import RenderHtml from 'react-native-render-html';

const SIZE = Dimensions.get('window').width;

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
    <View style={Styles.container}>
      <ScrollView>
        <TouchableOpacity style={Styles.backButton} onPress={goBackPress}>
          <Image
            source={require('./images/Back.png')}
            style={Styles.backButtonImage}
          />
        </TouchableOpacity>

        <View style={Styles.body}>
          <Image
            style={Styles.image}
            source={{uri: promotionDetail?.ImageUrl}}
          />
          <View style={Styles.brandIconContainer}>
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
        {promotionDetail?.Title.includes('<') &&
        promotionDetail?.Title.includes('>') ? (
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
              html: promotionDetail?.Title ?? '',
            }}
          />
        ) : (
          <Text style={Styles.title}>{promotionDetail?.Title}</Text>
        )}

        <RenderHtml
          baseStyle={Styles.htmlContentStyle}
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
          contentWidth={SIZE}
          source={{
            html: promotionDetail?.Description ?? '',
          }}
        />
      </ScrollView>
      <View style={Styles.buttonContainer}>
        <Text style={Styles.buttonText}>Hemen Katıl</Text>
      </View>
    </View>
  );
}
