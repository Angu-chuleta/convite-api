import { Controllers, Config } from 'js-data-dao'
import { InvitationDAO } from '../models/invitation'
import { IInvitation } from '../interfaces'
import * as JSData from 'js-data'

export class InvitationController extends Controllers.BasePersistController<IInvitation> {
  public constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    super(new InvitationDAO(store, appConfig))
  }
}
