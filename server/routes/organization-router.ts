import * as JSData from 'js-data'
import { OrganizationController } from '../controllers'
import { Routes, Config } from 'js-data-dao'
import { IOrganization } from '../interfaces'

export class OrganizationRouter extends Routes.PersistRouter<IOrganization, OrganizationController> {
  controller: OrganizationController

  constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    let ctrl = new OrganizationController(store, appConfig)
    super(store, ctrl)
  }

}
