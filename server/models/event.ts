import { Config, Interfaces, Models } from 'js-data-dao'
import { ServiceLib } from '../services/service-lib'
import { IEvent, IEventTime, IEventsPlace } from '../interfaces'
import * as JSData from 'js-data'
const serviceLib: ServiceLib = new ServiceLib()

/**
 * Model Event
 *
 * @export
 * @class Event
 * @extends {Models.BaseModel}
 * @implements {IEvent}
 */
export class Event extends Models.BaseModel implements IEvent {

  name: string
  date: Date
  time: IEventTime
  link: string
  invitationText: string
  canceled: boolean
  eventsPlace: IEventsPlace

  /**
   * Creates an instance of Event.
   * @param {IEvent} obj
   * @memberof Event
   */
  constructor (obj: IEvent) {
    super(obj)
    this.name = obj.name
    this.date = obj.date
    this.time = obj.time
    this.link = obj.link
    this.invitationText = obj.invitationText
    this.canceled = obj.canceled
    this.eventsPlace = obj.eventsPlace
  }
}

/**
 * DAO Event
 *
 * @export
 * @class EventDAO
 * @extends {Models.DAO<IEvent>}
 */
export class EventDAO extends Models.DAO<IEvent> {
  constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    const collectionName: string = 'events'
    const schema = {
      type: 'object',
      properties: {
        name: { type: 'string' },
        date: { type: 'string' },
        time: { type: 'object', properties: {
          start: { type: 'string' },
          end: { type: 'string' }
        } },
        link: { type: ['string', null] },
        invitationText: { type: ['string', null] },
        canceled: { type: 'boolean' },
        eventsPlace: { type: 'object', properties: {
          name: { type: 'string' },
          capacity: { type: 'number' },
          zipCode: { type: 'string' },
          address: { type: 'string' },
          number: { type: 'string' },
          complement: { type: 'string' },
          neighbor: { type: 'string' },
          city: { type: 'string' },
          state: { type: 'string' },
          country: { type: 'string' }
        } }
      },
      required: ['name', 'date', 'time', 'eventsPlace']
    }
    const relations = {
      belongsTo: {}
    }
    const joins: Array<string> = []
    super(store, Event, collectionName, schema, relations, joins)
  }

  /**
   * Método para facilitar a instanciação do evento
   *
   * @param {*} val
   * @returns {IEvent}
   * @memberof EventDAO
   */
  public parseModel (val: any): IEvent {
    return new Event(val)
  }

  /**
   * Atualizarevento
   *
   * @param {string} id
   * @param {Interfaces.IBaseUser} user
   * @param {IEvent} obj
   * @returns {Promise<IEvent>}
   * @memberof EventDAO
   */
  public update (id: string, user: Interfaces.IBaseUser, obj: IEvent): Promise<IEvent> {
    const { date, time } = obj
    const fieldsObj: Array<string> = Object.keys(obj)
    const fieldsNotUp: Array<string> = ['id', 'link']
    let data: IEvent = serviceLib.fieldsUpValidator(obj, fieldsObj, fieldsNotUp)

    return super.find(id, user)
      .then((event: IEvent) => {

        // todo verificar se a data está sendo alterada para notificar convidados

        return super.update(id, user, data)
          .then((event: IEvent) => {
            // Ao atualizar evento verificar se data/hora foi alterado e notificar convidados
            if (date !== event.date || time !== event.time) {
              return this.notifyAllGuests(event)
            }
            return event
          })
      })
  }

  /**
   * Notificar todos os convidados
   *
   * @private
   * @param {IEvent} event
   * @returns {Promise<IEvent>}
   * @memberof EventDAO
   */
  private notifyAllGuests (event: IEvent): Promise<IEvent> {
    throw new Error('no implementation for notification')
  }
}
