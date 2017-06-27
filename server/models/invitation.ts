import { Config, Models } from 'js-data-dao'
import { IInvitation } from '../interfaces'
import * as JSData from 'js-data'

/**
 * Model Invitation
 *
 * @export
 * @class Invitation
 * @extends {Models.BaseModel}
 * @implements {IInvitation}
 */
export class Invitation extends Models.BaseModel implements IInvitation {

  event: string
  guest: string
  date: Date
  deadline: Date
  isConfirmed: boolean

  /**
   * Creates an instance of Invitation.
   * @param {IInvitation} obj
   * @memberof Invitation
   */
  constructor (obj: IInvitation) {
    super(obj)
    this.event = obj.event
    this.guest = obj.guest
    this.date = obj.date
    this.date = obj.date
    this.deadline = obj.deadline
    this.isConfirmed = obj.isConfirmed
  }

}

/**
 * DAO Invitation
 *
 * @export
 * @class InvitationDAO
 * @extends {Models.DAO<IInvitation>}
 */
export class InvitationDAO extends Models.DAO<IInvitation> {
  constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    const collectionName: string = 'invitations'
    const schema = {
      type: 'object',
      properties: {
        event: { type: 'string' },
        guest: { type: 'string' },
        date: { type: 'date', default: new Date() },
        deadline: { type: 'date' },
        isConfirmed: { type: ['boolean', null] }
      },
      required: ['event', 'guest', 'deadline']
    }
    const relations = {
      belongsTo: {}
    }
    const joins: Array<string> = []
    super(store, Invitation, collectionName, schema, relations, joins)
  }

  /**
   * Método para para facilitar a criação dos usuários
   *
   * @param {*} val
   * @returns {IUser}
   *
   * @memberOf UserDAO
   */
  public parseModel (val: any): IInvitation {
    return new Invitation(val)
  }

}
