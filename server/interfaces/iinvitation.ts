import { Interfaces } from 'js-data-dao'

export interface IInvitation extends Interfaces.IBaseModel {
  /**
   * ID do evento
   *
   * @type {string}
   * @memberof IInvitation
   */
  event: string
  /**
   * ID do convidado
   *
   * @type {string}
   * @memberof IInvitation
   */
  guest: string
  /**
   * Data do convite
   *
   * @type {Date}
   * @memberof IInvitation
   */
  date: Date
  /**
   * Prazo de confirmação
   *
   * @type {Date}
   * @memberof IInvitation
   */
  deadline: Date
  /**
   * Se o convite foi confirmado pelo convidado
   *
   * @type {boolean}
   * @memberof IInvitation
   */
  isConfirmed: boolean
}
