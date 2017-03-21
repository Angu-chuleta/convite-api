import { IPerson, ETypePerson } from '../interfaces'
import { Person, PersonDAO } from './person'
import { Config } from 'js-data-dao'
import { ServiceLib } from '../services/service-lib'
import * as chai from 'chai'
import * as JSData from 'js-data'
import * as chaiAsPromised from 'chai-as-promised'
const assert = chai.assert
const expect = chai.expect
chai.use( chaiAsPromised )
chai.should()

const appConfig = new Config.AppConfig()
const Lib = new ServiceLib()

const handleJSData = (appConfig: Config.AppConfig): JSData.DataStore => {
  /**
   * Definindo o adaptador JSData para o projeto
   */
  const store: JSData.DataStore = new JSData.DataStore()
  store.registerAdapter(appConfig.dbConfig.getDatabase(), appConfig.dbConfig.getAdapter(), { 'default': true } )
  return store
}

const store: JSData.DataStore = handleJSData(appConfig)
const personDao = new PersonDAO(store, appConfig)
const personDefault: IPerson = new Person({
  tpPerson: ETypePerson.DEFAULT,
  user: null,
  name: 'Pessoa Default',
  numDocFed: Lib.cpf.generate(),
  phone: '2733334444',
  cellPhone: '27988887777',
  email: 'pessoa_default@local.com',
  alternativeEmail: 'pessoa_default_alt@local.com',
  zipCode: '12345678',
  address: 'Rua José Alexandre Buaiz',
  number: '274',
  complement: 'Ed. London O.T. - Sala 205',
  neighbor: 'Santa Helena',
  city: 'Vitória',
  state: 'ES',
  country: 'Brasil',
  photo: '',
  webSite: '',
  fantasyName: undefined,
  contact: undefined,
  startActivities: undefined,
  inActivity: undefined,
  creaCau: undefined,
  formation: undefined,
  role: 'Porteiro',
  startRole: (new Date()).toISOString(),
  endRole: (new Date()).toISOString(),
  profession: 'Faz nada',
  dateBirth: (new Date()).toISOString()
})
const personSindico: IPerson = new Person(Object.assign({}, personDefault, {
  tpPerson: ETypePerson.SINDICO,
  name: 'Pessoa Sindico',
  numDocFed: Lib.cpf.generate(),
  email: 'pessoa_sindico@local.com',
  alternativeEmail: 'pessoa_sindico_alt@local.com',
  role: undefined,
  startRole: undefined,
  endRole: undefined
}))
const personAdmCondominio: IPerson = new Person(Object.assign({}, personSindico, {
  tpPerson: ETypePerson.ADMCONDOMINIO,
  name: 'Pessoa AdmCondominio',
  numDocFed: Lib.cnpj.generate(),
  email: 'pessoa_admcomdominio@local.com',
  alternativeEmail: 'pessoa_admcomdominio_alt@local.com',
  contact: 'Pessoa Gerente',
  startActivities: (new Date()).toISOString(),
  inActivity: true,
  profession: undefined,
  dateBirth: undefined
}))
const personProjetista: IPerson = new Person(Object.assign({}, personDefault, {
  tpPerson: ETypePerson.PROJETISTA,
  name: 'Pessoa Projetista',
  numDocFed: Lib.cpf.generate(),
  email: 'pessoa_admcomdominio@local.com',
  alternativeEmail: 'pessoa_admcomdominio_alt@local.com',
  creaCau: '123qwe',
  RrtArt: 'asdzxc',
  discipline: 'A',
  profession: undefined,
  dateBirth: undefined
}))

describe( 'PersonDAO', () => {
  it( 'A classe é instanciável?', ( done: Function ) => {
    assert( personDao instanceof PersonDAO )
  } )

  describe( 'Morador', () => {
    it( 'Cadastrando pessoa default', ( done: Function ) => {
      personDao.create( personDefault, null )
        .then( ( person: IPerson ) => {
          return ( assert.isObject(person) &&
            expect( person ).to.have.property( 'tpPerson' ).equal( ETypePerson.DEFAULT ) &&
            expect( person ).to.have.property( 'name' ).equal( personDefault.name ) &&
            expect( person ).to.have.property( 'numDocFed' ).equal( personDefault.numDocFed ) &&
            expect( person ).to.have.property( 'email' ).equal( personDefault.email ) )
        } )
        .should.be.fulfilled
        .and.notify( done )
    } )
    it( 'Deletando pessoa default', ( done: Function ) => {
      personDao.delete(personDefault.id, null)
        .then( ( isDelete: boolean ) => {
          return ( assert.isBoolean( isDelete ) &&
            assert.isTrue( isDelete ) )
        })
        .should.be.fulfilled
        .and.notify( done )
    } )
  } )

  describe( 'Síndico', () => {
    it( 'Cadastrando pessoa sindico', ( done: Function ) => {
      personDao.create( personSindico, null )
        .then( ( person: IPerson ) => {
          return ( assert.isObject(person) &&
            expect( person ).to.have.property( 'tpPerson' ).equal( ETypePerson.SINDICO ) &&
            expect( person ).to.have.property( 'name' ).equal( personDefault.name ) &&
            expect( person ).to.have.property( 'numDocFed' ).equal( personDefault.numDocFed ) &&
            expect( person ).to.have.property( 'email' ).equal( personDefault.email ) )
        } )
        .should.be.fulfilled
        .and.notify( done )
    } )
    it( 'Deletando pessoa sindico', ( done: Function ) => {
      personDao.delete( personSindico.id, null )
        .then( ( isDelete: boolean ) => {
          return ( assert.isBoolean (isDelete ) &&
            assert.isTrue( isDelete ) )
        } )
        .should.be.fulfilled
        .and.notify( done )
    } )
  } )

  describe( 'Adm Condomínio', () => {
    it( 'Cadastrando pessoa admcondominio', ( done: Function ) => {
      personDao.create( personAdmCondominio, null )
        .then( ( person: IPerson ) => {
          return ( assert.isObject( person ) &&
            expect( person ).to.have.property( 'tpPerson' ).equal( ETypePerson.ADMCONDOMINIO ) &&
            expect( person ).to.have.property( 'name' ).equal( personDefault.name ) &&
            expect( person ).to.have.property( 'numDocFed' ).equal( personDefault.numDocFed ) &&
            expect( person ).to.have.property( 'email' ).equal( personDefault.email ) )
        } )
        .should.be.fulfilled
        .and.notify( done )
    } )
    it( 'Deletando pessoa admcondominio', ( done: Function ) => {
      personDao.delete( personAdmCondominio.id, null )
        .then( ( isDelete: boolean ) => {
          return ( assert.isBoolean( isDelete ) &&
            assert.isTrue( isDelete ) )
        })
        .should.be.fulfilled
        .and.notify( done )
    } )
  } )

  describe( 'Projetista', () => {
    it( 'Cadastrando pessoa projetista', ( done: Function ) => {
      personDao.create( personProjetista, null )
        .then( ( person: IPerson ) => {
          return ( assert.isObject( person ) &&
            expect( person ).to.have.property( 'tpPerson' ).equal( ETypePerson.PROJETISTA ) &&
            expect( person ).to.have.property( 'name' ).equal( personDefault.name ) &&
            expect( person ).to.have.property( 'numDocFed' ).equal( personDefault.numDocFed ) &&
            expect( person ).to.have.property( 'email' ).equal( personDefault.email ) )
        } )
        .should.be.fulfilled
        .and.notify( done )
    } )
    it( 'Deletando pessoa projetista', ( done: Function ) => {
      personDao.delete( personProjetista.id, null )
        .then( ( isDelete: boolean ) => {
          return ( assert.isBoolean( isDelete ) &&
            assert.isTrue( isDelete ) )
        })
        .should.be.fulfilled
        .and.notify( done )
    } )
  } )
})
