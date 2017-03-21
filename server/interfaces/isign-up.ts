import { IUser, IPerson } from './index'

/**
 * Interface para sing-up do usuário com as descrições de seus atributos
 *
 * @export
 * @interface ISignUp
 */
export interface ISignUp {
  /**
   * Dados de usuário
   *
   * @type {IUser}
   * @memberOf ISignUp
   */
  user: IUser
  /**
   * Dados complementares de usuário
   *
   * @type {IPerson}
   * @memberOf ISignUp
   */
  person: IPerson
}
