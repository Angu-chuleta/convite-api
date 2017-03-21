import { Config, Interfaces, Models, Services } from 'js-data-dao'
import { IUser, ETypeUser, IPerson, IAgenda } from '../interfaces'
import * as JSData from 'js-data'
/**
 * Model User
 *
 * @class User
 * @implements {Model.DAO<Model.User>}
 */

export class User extends Models.BaseModel implements IUser {
  name: string
  companyAlias: string
  email: string
  username: string
  password: string
  isAdmin: boolean
  personId: string
  person: IPerson
  tpUser: ETypeUser
  createdAgendas: Array<IAgenda>
  constructor (obj: IUser) {
    super(obj)
    this.name = obj.name
    this.companyAlias = obj.companyAlias
    this.email = obj.email
    this.username = obj.username
    this.password = obj.password
    this.personId = obj.personId
    this.tpUser = obj.tpUser >= 0 ? obj.tpUser : ETypeUser.DEFAULT
    this.isAdmin = this.tpUser === ETypeUser.ADMIN
  }
}

export class UserDAO extends Models.DAO<IUser> {
  constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    const schema = {
      type: 'object',
      properties: {
        name: { type: 'string' },
        companyAlias: { type: 'string' },
        email: { type: 'string' },
        username: { type: 'string' },
        password: { type: 'string' },
        isAdmin: { type: 'boolean' },
        personId: { type: 'string' },
        tpUser: { type: 'number' }
      },
      required: ['name', 'companyAlias', 'email', 'username', 'password', 'isAdmin', 'personId', 'tpUser']
    }
    const relations = {
      belongsTo: {
        persons: {
          localField: 'person',
          foreignKey: 'personId'
        }
      },
      hasMany: {
        agendas: {
          localField: 'createdAgendas',
          foreignKey: 'userAgendaId'
        }
      }
    }
    const joins: Array<string> = ['persons']
    super(store, appConfig.getUsersTable(), schema, relations, joins)
  }

  /**
   * Método para para facilitar a criação dos usuários
   *
   * @param {*} val
   * @returns {IUser}
   *
   * @memberOf UserDAO
   */
  public parseModel (val: any): IUser {
    return new User(val)
  }

  public update (id: string, user: Interfaces.IBaseUser, obj: IUser): Promise<IUser> {
    throw new Services.APIError('Não é possível atualizar os dados de usuário', 403)
  }
}
