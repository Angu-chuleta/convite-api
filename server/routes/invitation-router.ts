import * as JSData from 'js-data'
import { InvitationController } from '../controllers'
import { Routes, Config } from 'js-data-dao'
import { IInvitation } from '../interfaces'

export class InvitationRouter extends Routes.PersistRouter<IInvitation, InvitationController> {
  controller: InvitationController

  constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    let ctrl = new InvitationController(store, appConfig)
    super(store, ctrl)
  }

}
