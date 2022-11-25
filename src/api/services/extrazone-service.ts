import {api} from '../request';
import {TagModel} from '../models/tag-model';
import {PromotionModel} from '../models/promotion-model';

export class ExtrazoneService {
  static getTagList(): Promise<TagModel[]> {
    return api.get('tags/list').then(response => response.data);
  }

  static getPromotions(channel: number): Promise<PromotionModel[]> {
    return api
      .get(`promotions/list?Channel=${channel}`)
      .then(response => response.data);
  }
}
