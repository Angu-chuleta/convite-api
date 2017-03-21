import { Config, Interfaces, Models } from 'js-data-dao'
import { IPerson, ETypePerson, IUser } from '../interfaces'
import { ServiceLib } from '../services/service-lib'
import * as JSData from 'js-data'
const serviceLib: ServiceLib = new ServiceLib()
/**
 * Model Person
 *
 * @class Person
 * @implements {Model.DAO<Model.Person>}
 */

export class Person extends Models.BaseModel implements IPerson {
  tpPerson: ETypePerson
  user: IUser
  name: string
  numDocFed: string
  phone: string
  cellPhone: string
  email: string
  alternativeEmail: string
  zipCode: string
  address: string
  number: string
  complement: string
  neighbor: string
  city: string
  state: string
  country: string
  photo: string
  webSite: string
  // Fornecedor de materiais, Adm condomínio, Prestadores de serviços, Fornecedor de equipamentos e Construtora
  fantasyName: string
  contact: string
  // Adm condomínio
  startActivities: string
  // Projetista, Fornecedor de materiais, Prestadores de serviços, Fornecedor de equipamentos e Construtora
  creaCau: string
  inActivity: boolean
  // Projetista
  formation: string
  // Morador
  role: string
  startRole: string
  endRole: string
  // Síndico e Morador
  profession: string
  dateBirth: string
  constructor (obj: IPerson) {
    super(obj)
    this.name = obj.name
    this.numDocFed = obj.numDocFed
    this.phone = obj.phone
    this.cellPhone = obj.cellPhone
    this.email = obj.email
    this.alternativeEmail = obj.alternativeEmail
    this.zipCode = obj.zipCode
    this.address = obj.address
    this.number = obj.number
    this.complement = obj.complement
    this.neighbor = obj.neighbor
    this.city = obj.city
    this.state = obj.state
    this.country = obj.country
    this.photo = obj.photo
    this.webSite = obj.webSite
    this.tpPerson = obj.tpPerson >= 0 ? obj.tpPerson : ETypePerson.DEFAULT
    this.dadosTpPerson(obj)
  }

  private dadosTpPerson (obj: IPerson): void {
    switch (this.tpPerson) {
      case ETypePerson.ADMCONDOMINIO:
        this.fantasyName = obj.fantasyName
        this.contact = obj.contact
        this.startActivities = obj.startActivities
        break
      case ETypePerson.CONSTRUTURA || ETypePerson.FORNECEDOR || ETypePerson.PRESTADOR:
        this.fantasyName = obj.fantasyName
        this.contact = obj.contact
        this.creaCau = obj.creaCau
        this.inActivity = obj.inActivity
        break
      case ETypePerson.PROJETISTA:
        this.creaCau = obj.creaCau
        this.inActivity = obj.inActivity
        this.formation = obj.formation
        break
      case ETypePerson.SINDICO || ETypePerson.SUBSINDICO:
        this.profession = obj.profession
        this.dateBirth = obj.dateBirth
        break
      case ETypePerson.DEFAULT:
        this.role = obj.role
        this.startRole = obj.startRole
        this.endRole = obj.endRole
        this.profession = obj.profession
        this.dateBirth = obj.dateBirth
        break
    }
  }
}

export class PersonDAO extends Models.DAO<IPerson> {
  constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    const schema = {
      type: 'object',
      properties: {
        tpPerson: { type: 'number' },
        name: { type: 'string' },
        numDocFed: { type: 'string' },
        phone: { type: 'string' },
        cellPhone: { type: 'string' },
        email: { type: 'string' },
        alternativeEmail: { type: 'string' },
        zipCode: { type: 'string' },
        address: { type: 'string' },
        number: { type: 'string' },
        complement: { type: 'string' },
        neighbor: { type: 'string' },
        city: { type: 'string' },
        state: { type: 'string' },
        country: { type: 'string' },
        photo: { type: 'string' },
        webSite: { type: 'string' },
        fantasyName: { type: 'string' },
        contact: { type: 'string' },
        startActivities: { type: 'string' },
        creaCau: { type: 'string' },
        inActivity: { type: 'boolean' },
        formation: { type: 'string' },
        role: { type: 'string' },
        startRole: { type: 'string' },
        endRole: { type: 'string' },
        profession: { type: 'string' },
        dateBirth: { type: 'string' }
      },
      required: [
        'tpPerson', 'name', 'numDocFed', 'cellPhone', 'email', 'zipCode', 'address',
        'number', 'neighbor', 'city', 'state']
    }
    const relations = {
      hasOne: {
        users: {
          localField: 'user',
          foreignKey: 'personId'
        }
      },
      belongsTo: {
        reforms: {
          localField: 'reform',
          foreignKey: 'designerId'
        }
      }
    }
    const joins: Array<string> = []
    super(store, 'persons', schema, relations, joins)
  }

  /**
   * Método para para facilitar a criação da pessoa
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
    const fieldsNotUp: Array<string> = ['numDocFed', 'email', 'alternativeEmail', 'tpPerson']
    const data: IPerson = serviceLib.fieldsUpValidator(obj, fieldsObj, fieldsNotUp)

    return super.update(id, user, data)
  }
}
