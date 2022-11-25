import {api} from '../request';
import {TagModel} from '../models/tag-model';

export class ExtrazoneService {
  static getTagList(): Promise<TagModel[]> {
    return api.get('tags/list').then(response => response.data);
  }
}
