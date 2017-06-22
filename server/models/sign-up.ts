import { IUser, ISignUp } from '../interfaces'
import { User } from '../models/user'
import { Config, Services } from 'js-data-dao'
import * as JSData from 'js-data'
import * as _ from 'lodash'

export class SignUp {
  User: JSData.Mapper
  constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    this.User = store.getMapper(process.env.USERS_TABLE)
  }

	/**
	 * Cria um usuário via rota de signup
	 *
	 * @returns {Promise<IUser>}
	 *
	 * @memberOf SignupModel
	 */
  public create (obj: ISignUp): Promise<IUser> {
    let user: IUser = new User(obj.user)

    let objFilter: any = { where: { email: { '|===': user.email }, numDocFed: { '|===': user.numDocFed } } }

    // Pesquisa por usuário com o email e/ou documento igual ao do novo usuário
    return this.User.findAll(objFilter)
      .then((persons: Array<IUser>) => {
        if (!_.isEmpty(persons)) {
          throw new Error('Email e/ou documento já existe(m) em outro(s) usuário(s).')
        }
        return this.User.create(user)
      })
      .then((_user: IUser) => {
        user = _user
        return Services.ServiceLib.hashPassword(user.password)
      })
      .then((passwordCrypted: string) => {
        user.password = passwordCrypted
        return this.User.create(user)
      })
      .then(() => {
        delete user.password
        return user
      })
  }
}
