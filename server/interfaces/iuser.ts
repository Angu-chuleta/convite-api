import { Interfaces } from 'js-data-dao'

/**
 * Interface para usuário com as descrições de seus atributos
 *
 * @export
 * @interface IUser
 * @extends {Interfaces.IBaseModel}
 * @extends {Interfaces.IBaseUser}
 */
export interface IUser extends Interfaces.IBaseModel, Interfaces.IBaseUser {
  numDocFed?: string
  rg?: string
}
