import { Controllers, Config } from 'js-data-dao'
import { EventDAO } from '../models/event'
import { IEvent } from '../interfaces'
import * as JSData from 'js-data'

export class EventController extends Controllers.BasePersistController<IEvent> {
  public constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    super(new EventDAO(store, appConfig))
  }
}
