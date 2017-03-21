import { ServiceLib } from './service-lib'
import { ETypeUser } from '../interfaces'
import * as chai from 'chai'
const assert = chai.assert
chai.should()

const serviceLib = new ServiceLib()

describe ('ServiceLib', () => {
  describe('Cpf/cnpj', () => {
    let cpf: string
    let cnpj: string
    it('A classe é instanciável?', ( done: Function ) => {
      assert(serviceLib instanceof ServiceLib)
      done()
    })

    it('Gerando cpf', ( done: Function ) => {
      cpf = serviceLib.cpf.generate()
      assert.isString(cpf)
      assert.equal(cpf.length, 11)
      done()
    })

    it('Validando cpf gerado', ( done: Function ) => {
      let isValid = serviceLib.cpfCnpjValidator(cpf)
      assert.isBoolean(isValid)
      assert.isTrue(isValid)
      done()
    })

    it('Validando cpf errado', ( done: Function ) => {
      let isValid = serviceLib.cpfCnpjValidator('123')
      assert.isBoolean(isValid)
      assert.isFalse(isValid)
      done()
    })

    it('Gerando cnpj', ( done: Function ) => {
      cnpj = serviceLib.cnpj.generate()
      assert.isString(cnpj)
      assert.equal(cnpj.length, 14)
      done()
    })

    it('Validando cnpj gerado', ( done: Function ) => {
      let isValid = serviceLib.cpfCnpjValidator(cnpj)
      assert.isBoolean(isValid)
      assert.isTrue(isValid)
      done()
    })

    it('Validando cnpj errado', ( done: Function ) => {
      let isValid = serviceLib.cpfCnpjValidator('123')
      assert.isBoolean(isValid)
      assert.isFalse(isValid)
      done()
    })
  })

  describe('Limitando dados para atualização', () => {
    it('Gerando novo json para atualização', ( done: Function ) => {
      let jsonRequisicao: any = {
        name: 'João',
        numDocFed: serviceLib.cpf.generate(),
        email: 'novo_email@local.com',
        phone: '123456',
        tpUser: ETypeUser.ADMIN
      }
      let jsonUpdate: any = serviceLib.fieldsUpValidator(
        jsonRequisicao, Object.keys(jsonRequisicao), ['name', 'phone'])

      assert.isObject(jsonUpdate)
      assert.isString(jsonUpdate.name)
      assert.isString(jsonUpdate.phone)
      assert.isUndefined(jsonUpdate.numDocFed)
      assert.isUndefined(jsonUpdate.email)
      assert.isUndefined(jsonUpdate.tpUser)
      done()
    })
  })
})
