import { Controllers, Config } from 'js-data-dao'
import { OrganizationDAO } from '../models/organization'
import { IOrganization } from '../interfaces'
import * as JSData from 'js-data'

export class OrganizationController extends Controllers.BasePersistController<IOrganization> {
  public constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    super(new OrganizationDAO(store, appConfig))
  }
}
