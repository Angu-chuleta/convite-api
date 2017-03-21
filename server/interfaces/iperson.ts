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
   * Tipo de pessoa
   *
   * @type {ETypePerson}
   * @memberOf IPerson
   */
  tpPerson: ETypePerson
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
   * Foto
   *
   * @type {string}
   * @memberOf IPerson
   */
  photo: string
  /**
   * webSite
   *
   * @type {string}
   * @memberOf IPerson
   */
  webSite: string
  // Adm condomínio, Fornecedor de materiais, Prestadores de serviços, Fornecedor de equipamentos e Construtora
  /**
   * Nome fantasia
   * Geralmente associado a empresas
   *
   * @type {string}
   * @memberOf IPerson
   */
  fantasyName: string
  /**
   * Contado da empresa
   *
   * @type {string}
   * @memberOf IPerson
   */
  contact: string
  // Adm condomínio
  /**
   * Data do início das atividades
   *
   * @type {string}
   * @memberOf IPerson
   */
  startActivities: string
  // Projetista, Fornecedor de materiais, Prestadores de serviços, Fornecedor de equipamentos e Construtora
  /**
   * CREA/CAU da empresa ou projetista
   *
   * @type {string}
   * @memberOf IPerson
   */
  creaCau: string
  /**
   * Se está em atividades
   *
   * @type {boolean}
   * @memberOf IPerson
   */
  inActivity: boolean
  // Projetista
  /**
   * Discilpina do projetista
   *
   * @type {string}
   * @memberOf IPerson
   */
  formation: string
  // Morador
  /**
   * Função que o morador irá desempenhar no condomínio
   *
   * @type {string}
   * @memberOf IPerson
   */
  role: string
  /**
   * Data de início da função
   *
   * @type {string}
   * @memberOf IPerson
   */
  startRole: string
  /**
   * Data final da função
   *
   * @type {string}
   * @memberOf IPerson
   */
  endRole: string
  // Síndico e Morador
  /**
   * Profissão do morador/síndico/sub-síndico
   *
   * @type {string}
   * @memberOf IPerson
   */
  profession: string
  /**
   * Data de nascimento do morador/síndico/sub-síndico
   *
   * @type {string}
   * @memberOf IPerson
   */
  dateBirth: string
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

/**
 * Enum para o tipo de pessoa
 *
 * @export
 * @enum {number}
 */
export enum ETypePerson {
  /**
   * Admin
   */
  ADMIN,
  /**
   * Construtora
   */
  CONSTRUTURA,
  /**
   * Adminstradora de condomínio
   */
  ADMCONDOMINIO,
  /**
   * Projetista
   */
  PROJETISTA,
  /**
   * Fornecedor
   */
  FORNECEDOR,
  /**
   * Prestador de serviços
   */
  PRESTADOR,
  /**
   * Síndico
   */
  SINDICO,
  /**
   * Sub-síndico
   */
  SUBSINDICO,
  /**
   * Morador
   */
  DEFAULT
}
