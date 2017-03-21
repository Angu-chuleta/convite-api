import * as JSData from 'js-data'
import { UserController } from '../controllers'
import { Routes, Config } from 'js-data-dao'
import { IUser } from '../interfaces'
import { Router } from 'express'

export class UserRouter extends Routes.PersistRouter<IUser, UserController> {
  controller: UserController
  router: Router

  constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    let ctrl = new UserController(store, appConfig)
    super(store, ctrl)
  }
}
