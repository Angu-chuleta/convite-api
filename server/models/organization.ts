import { Config, Models } from 'js-data-dao'
import { IOrganization, ETypeOrganizer } from '../interfaces'
import * as JSData from 'js-data'

/**
 * Model Organization
 *
 * @export
 * @class Organization
 * @extends {Models.BaseModel}
 * @implements {IOrganization}
 */
export class Organization extends Models.BaseModel implements IOrganization {

  event: string
  user: string
  type: ETypeOrganizer

  constructor (obj: IOrganization) {
    super(obj)
    this.event = obj.event
    this.user = obj.user
    this.type = obj.type
  }

}

/**
 * DAO Organization
 *
 * @export
 * @class InvitationDAO
 * @extends {Models.DAO<IOrganization>}
 */
export class OrganizationDAO extends Models.DAO<IOrganization> {
  constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    const collectionName: string = 'organization'
    const schema = {
      type: 'object',
      properties: {
        event: { type: 'string' },
        user: { type: 'string' },
        type: { type: 'number' }
      },
      required: ['event', 'user', 'type']
    }
    const relations = {
      belongsTo: {}
    }
    const joins: Array<string> = []
    super(store, Organization, collectionName, schema, relations, joins)
  }

  /**
   * Método para para facilitar a criação dos usuários
   *
   * @param {*} val
   * @returns {IUser}
   *
   * @memberOf UserDAO
   */
  public parseModel (val: any): IOrganization {
    return new Organization(val)
  }

}
