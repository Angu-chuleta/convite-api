import { Interfaces } from 'js-data-dao'

export interface IPost extends Interfaces.IBaseModel {
  eventId: string
  title: string
  text: string
  date: Date
  approval: false | IApproval
}

export interface IApproval {
  by: string
  date: Date
}
