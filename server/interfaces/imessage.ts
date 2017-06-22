import { Interfaces } from 'js-data-dao'

export interface IMessage extends Interfaces.IBaseModel {
  text: string
  subject: string
  isRead: boolean
}
