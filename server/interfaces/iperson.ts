import { Interfaces } from 'js-data-dao'
import { IUser } from '../interfaces'

/**
 * Interface para pessoa com as descrições de seus atributos
 *
 * @export
 * @interface IPerson
 * @extends {Interfaces.IBaseModel}
 * @extends {IAddress}
 */
export interface IPerson extends Interfaces.IBaseModel, IAddress {
  /**
   * Dados de usuário da pessoa
   *
   * @type {IUser}
   * @memberOf IPerson
   */
  user: IUser
  /**
   * Nome da pessoa
   *
   * @type {string}
   * @memberOf IPerson
   */
  name: string
  /**
   * Nome fantasia
   * Geralmente associado a empresas
   *
   * @type {string}
   * @memberOf IPerson
   */
  fantasyName: string
  /**
   * Número do documento cpf ou cnpj
   *
   * @type {string}
   * @memberOf IPerson
   */
  numDocFed: string
  /**
   * Telefone fixo
   *
   * @type {string}
   * @memberOf IPerson
   */
  phone: string
  /**
   * Telefone celular
   *
   * @type {string}
   * @memberOf IPerson
   */
  cellPhone: string
  /**
   * alternativeEmail
   *
   * @type {string}
   * @memberOf IPerson
   */
  email: string
  /**
   * Email alternativo
   *
   * @type {string}
   * @memberOf IPerson
   */
  alternativeEmail: string
  /**
   * Data de nascimento ou data que a empresa iniciou suas atividades
   *
   * @type {string}
   * @memberOf IPerson
   */
  dateBirth: string
  /**
   * Sexo da pessoa
   *
   * @type {string}
   * @memberOf IPerson
   */
  sexo: string,
  /**
   * Foto
   *
   * @type {string}
   * @memberOf IPerson
   */
  photo: string
}

/**
 * Interface para os endereços das entidades
 *
 * @export
 * @interface IAddress
 */
export interface IAddress {
  /**
   * Cep
   *
   * @type {string}
   * @memberOf IAddress
   */
  zipCode: string
  /**
   * Endereço rua ou avenida
   *
   * @type {string}
   * @memberOf IAddress
   */
  address: string
  /**
   * Número
   *
   * @type {string}
   * @memberOf IAddress
   */
  number: string
  /**
   * Complemento para o endereço
   *
   * @type {string}
   * @memberOf IAddress
   */
  complement: string
  /**
   * Bairro
   *
   * @type {string}
   * @memberOf IAddress
   */
  neighbor: string
  /**
   * Cidade
   *
   * @type {string}
   * @memberOf IAddress
   */
  city: string
  /**
   * Estado
   *
   * @type {string}
   * @memberOf IAddress
   */
  state: string
  /**
   * País
   *
   * @type {string}
   * @memberOf IAddress
   */
  country: string
}
