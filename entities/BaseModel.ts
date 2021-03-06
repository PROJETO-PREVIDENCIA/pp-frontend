import { ObjectHelpers } from '@igortrindade/lazyfy'

export default class BaseModel {

  static fillable =  []

  public static getFillableKeys(data: any = {}) {
    return ObjectHelpers.filterObjectKeys(this.fillable, data)
  }

  public setFillableKeys(instance, keys, data) {
    for(const key of keys) {
      if(data[key]) instance[key] = data[key]
    }
  }

}