import { Interfaces } from 'js-data-dao'
import { IPerson } from '../interfaces'

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
}
