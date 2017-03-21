import * as _ from 'lodash'
const cpfCnpj = require('cpf_cnpj')

export class ServiceLib {
  cpf: any
  cnpj: any
  constructor () {
    this.cpf = cpfCnpj.CPF
    this.cnpj = cpfCnpj.CNPJ
  }
  /**
   * Valida o documento do usuário
   * Para cpf ou cnpj
   *
   * @param {string} numDocFed
   * @returns {boolean}
   *
   * @memberOf UserDAO
   */
  public cpfCnpjValidator (numDocFed: string): boolean {
    return this.cpf.isValid(numDocFed) ? true : this.cnpj.isValid(numDocFed)
  }
  /**
   * Através de 'fieldsNotUp' um novo objeto é formado e somente os campos ditos nele serão atualizados.
   * Ou seja, permitindo que campos que não podem ser alterados fiquem seguros e inalterados na atualização.
   *
   * @param {*} obj
   * @param {Array<string>} fieldsObj
   * @param {Array<string>} fieldsNotUp
   * @returns {*}
   *
   */
  public fieldsUpValidator (obj: any, fieldsObj: Array<string>, fieldsNotUp: Array<string>): any {
    let newObj: any = {}

    fieldsObj.forEach(field => {
      if (_.indexOf(fieldsNotUp, field) === -1) {
        newObj[field] = obj[field]
      }
    })

    return newObj
  }
}
