import * as JSData from 'js-data'
import { PersonController } from '../controllers'
import { Routes, Config } from 'js-data-dao'
import { IPerson } from '../interfaces'
import { Router } from 'express'

export class PersonRouter extends Routes.PersistRouter<IPerson, PersonController> {
  controller: PersonController
  router: Router

  constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    let ctrl = new PersonController(store, appConfig)
    super(store, ctrl)
  }
}
