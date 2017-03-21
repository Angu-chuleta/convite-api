import { Interfaces } from 'js-data-dao'
import { IPerson, IAgenda } from '../interfaces'

/**
 * Interface para usuário com as descrições de seus atributos
 *
 * @export
 * @interface IUser
 * @extends {Interfaces.IBaseModel}
 * @extends {Interfaces.IBaseUser}
 */
export interface IUser extends Interfaces.IBaseModel, Interfaces.IBaseUser {
  /**
   * Id de pessoa com o complemento dos dados do usuário
   *
   * @type {string}
   * @memberOf IUser
   */
  personId: string
  /**
   * Dados complementares do usuário
   *
   * @type {IPerson}
   * @memberOf IUser
   */
  person: IPerson
  /**
   * Tipo de usuário para acessar o sistema
   *
   * @type {ETypeUser}
   * @memberOf IUser
   */
  tpUser: ETypeUser
  /**
   * Lista dos agendamentos que o usuário criou
   *
   * @type {Array<IAgenda>}
   * @memberOf IUser
   */
  createdAgendas: Array<IAgenda>
}

/**
 * Enum com os tipos de usuários
 *
 * @export
 * @enum {number}
 */
export enum ETypeUser {
  /**
   * Administrador
   */
  ADMIN,
  /**
   * Construtora
   */
  CONSTRUTURA,
  /**
   * Administradora de condomínio
   */
  ADMCONDOMINIO,
  /**
   * Síndico
   */
  SINDICO,
  /**
   * Sub-síndico
   */
  SUBSINDICO,
  /**
   * Padrão morador
   */
  DEFAULT
}
