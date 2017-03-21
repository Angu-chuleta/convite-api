import { Config, Interfaces, Models } from 'js-data-dao'
import { IPerson, IUser } from '../interfaces'
import { ServiceLib } from '../services/service-lib'
import * as JSData from 'js-data'
const serviceLib: ServiceLib = new ServiceLib()

/**
 * Classe Person
 *
 * @export
 * @class Person
 * @extends {Models.BaseModel}
 * @implements {IPerson}
 */
export class Person extends Models.BaseModel implements IPerson {
  user: IUser
  name: string
  fantasyName: string
  numDocFed: string
  phone: string
  cellPhone: string
  email: string
  alternativeEmail: string
  dateBirth: string
  sex: string
  photo: string
  zipCode: string
  address: string
  number: string
  complement: string
  neighbor: string
  city: string
  state: string
  country: string
  constructor (obj: IPerson) {
    super(obj)
    this.name = obj.name
    this.fantasyName = obj.fantasyName
    this.numDocFed = obj.numDocFed
    this.phone = obj.phone
    this.cellPhone = obj.cellPhone
    this.email = obj.email
    this.alternativeEmail = obj.alternativeEmail
    this.dateBirth = obj.dateBirth
    this.sex = obj.sex
    this.photo = obj.photo
    this.zipCode = obj.zipCode
    this.address = obj.address
    this.number = obj.number
    this.complement = obj.complement
    this.neighbor = obj.neighbor
    this.city = obj.city
    this.state = obj.state
    this.country = obj.country
  }
}

export class PersonDAO extends Models.DAO<IPerson> {
  constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    const schema = {
      type: 'object',
      properties: {
        name: { type: 'string' },
        fantasyName: { type: 'string' },
        numDocFed: { type: 'string' },
        phone: { type: 'string' },
        cellPhone: { type: 'string' },
        email: { type: 'string' },
        alternativeEmail: { type: 'string' },
        dateBirth: { type: 'string' },
        sex: { type: 'string' },
        photo: { type: 'string' },
        zipCode: { type: 'string' },
        address: { type: 'string' },
        number: { type: 'string' },
        complement: { type: 'string' },
        neighbor: { type: 'string' },
        city: { type: 'string' },
        state: { type: 'string' },
        country: { type: 'string' }
      },
      required: ['name', 'fantasyName', 'numDocFed', 'phone', 'cellPhone', 'email',
        'alternativeEmail','dateBirth', 'sex', 'photo', 'zipCode', 'address',
        'number', 'neighbor', 'city', 'state', 'country']
    }
    const relations = {
      hasOne: {
        users: {
          localField: 'user',
          foreignKey: 'personId'
        }
      }
    }
    const joins: Array<string> = ['users']
    super(store, 'persons', schema, relations, joins)
  }

  /**
   * Método para facilitar a criação de pessoa
   *
   * @param {*} val
   * @returns {IPerson}
   *
   * @memberOf PersonDAO
   */
  public parseModel (val: any): IPerson {
    return new Person(val)
  }

  public update (id: string, user: Interfaces.IBaseUser, obj: IPerson): Promise<IPerson> {
    const fieldsObj: Array<string> = Object.keys(obj)
    const fieldsNotUp: Array<string> = ['numDocFed', 'email', 'alternativeEmail']
    const data: IPerson = serviceLib.fieldsUpValidator(obj, fieldsObj, fieldsNotUp)

    return super.update(id, user, data)
  }
}
