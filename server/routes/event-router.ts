import * as JSData from 'js-data'
import { EventController } from '../controllers'
import { Routes, Config } from 'js-data-dao'
import { IEvent } from '../interfaces'

export class EventRouter extends Routes.PersistRouter<IEvent, EventController> {
  controller: EventController

  constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    let ctrl = new EventController(store, appConfig)
    super(store, ctrl)
  }

}
