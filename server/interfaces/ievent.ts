import { Interfaces } from 'js-data-dao'
import { IAddress } from './iaddress'

export interface IEvent extends Interfaces.IBaseModel {
  /**
   * Nome do evento
   *
   * @type {string}
   * @memberof IEvent
   */
  name: string
  /**
   * Data do evento
   *
   * @type {Date}
   * @memberof IEvent
   */
  date: Date
  /**
   * Horário do evento
   *
   * @type {IEventTime}
   * @memberof IEvent
   */
  time: IEventTime
  /**
   * Link do convite
   *
   * @type {string}
   * @memberof IEvent
   */
  link: string
  /**
   * Texto do convite
   *
   * @type {string}
   * @memberof IEvent
   */
  invitationText: string
  /**
   * Se o evento foi cancelado
   *
   * @type {boolean}
   * @memberof IEvent
   */
  canceled: boolean
  /**
   * Local do evento
   *
   * @type {IEventsPlace}
   * @memberof IEvent
   */
  eventsPlace: IEventsPlace
}

export interface IEventTime {
  /**
   * Hora de início do evento
   *
   * @type {number}
   * @memberof IEventTime
   */
  start: number
  /**
   * Hora do fim do evento
   *
   * @type {number}
   * @memberof IEventTime
   */
  end: number
}

export interface IEventsPlace extends IAddress {
  /**
   * Nome do local
   *
   * @type {string}
   * @memberof IEventsPlace
   */
  name: string
  /**
   * Capacidade do local
   *
   * @type {number}
   * @memberof IEventsPlace
   */
  capacity: number
}
