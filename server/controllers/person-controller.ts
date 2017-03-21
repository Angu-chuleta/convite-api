import { PersonDAO } from '../models/person'
import { Controllers, Config } from 'js-data-dao'
import { IPerson } from '../interfaces'
import * as JSData from 'js-data'

export class PersonController extends Controllers.BasePersistController<IPerson> {
  public constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    super(new PersonDAO(store, appConfig))
  }
}
