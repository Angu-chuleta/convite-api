import { Config, Interfaces, Models, Services } from 'js-data-dao'
import { IUser } from '../interfaces'
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
  constructor (obj: IUser) {
    super(obj)
    this.name = obj.name
    this.companyAlias = obj.companyAlias
    this.email = obj.email
    this.username = obj.username
    this.password = obj.password
    this.isAdmin = obj.isAdmin
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
        password: { type: 'string' }
      },
      required: ['name', 'email', 'username', 'password']
    }
    const relations = {
      belongsTo: {
      }
    }
    const joins: Array<string> = []
    super(store, User, appConfig.getUsersTable(), schema, relations, joins)
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
