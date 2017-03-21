import { Interfaces } from 'js-data-dao'

export interface IEvent extends Interfaces.IBaseModel {
  permission: EPermissionEvent
}

/**
 * Enum para as permissões das pessoas no evento
 * TOdo Futuramente os organizadores poderão convidar as pessoas para ajudarem na organização do evento
 *
 * @export
 * @enum {number}
 */
export enum EPermissionEvent {
  /**
   * Organizador do evento(convida as pessoas)
   */
  ORGANIZADOR,
  /**
   * Pessoas convidadas para o evento
   */
  DEFAULT
}
