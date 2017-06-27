import { Interfaces } from 'js-data-dao'

export interface IOrganization extends Interfaces.IBaseModel {
  /**
   * ID do evento
   *
   * @type {string}@memberof IOrganization
   */
  event: string

  /**
   * ID do usuário
   *
   * @type {string}@memberof IOrganization
   */
  user: string

  /**
   * Tipo do organizador
   *
   * @type {ETypeOrganizer}@memberof IOrganization
   */
  type: ETypeOrganizer
}

export enum ETypeOrganizer {
  /**
   * Organizador do evento
   */
  ORGANIZADOR,
  /**
   * Colaborador do evento
   */
  COLABORADOR
}
