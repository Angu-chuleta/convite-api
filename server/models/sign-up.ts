import { IUser, IPerson, ISignUp } from '../interfaces'
import { User } from '../models/user'
import { Person } from '../models/person'
import { Config, Services } from 'js-data-dao'
import * as JSData from 'js-data'
import * as _ from 'lodash'

export class SignUp {
  User: JSData.Mapper
  Person: JSData.Mapper
  constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    this.User = store.getMapper(process.env.USERS_TABLE)
    this.Person = store.getMapper('persons')
  }

	/**
	 * Cria um usuário via rota de signup
	 *
	 * @returns {Promise<IUser>}
	 *
	 * @memberOf SignupModel
	 */
  public create (obj: ISignUp): Promise<IUser> {
    let person: IPerson = new Person(obj.person)
    let user: IUser = new User(obj.user)

    let objFilter: any = { where: { email: { '|===': person.email }, numDocFed: { '|===': person.numDocFed } } }

    // Pesquisa por usuário com o email e/ou documento igual ao do novo usuário
    return this.Person.findAll(objFilter)
      .then((persons: Array<IPerson>) => {
        if (!_.isEmpty(persons)) {
          throw 'Email e/ou documento já existe(m) em outro(s) usuário(s).'
        }
        return this.Person.create(person)
      })
      .then((_person: IPerson) => {
        person = _person
        return Services.ServiceLib.hashPassword(user.password)
      })
      .then((passwordCrypted: string) => {
        user.personId = person.id
        user.password = passwordCrypted
        return this.User.create(user)
      })
      .then(() => person)
  }
}
