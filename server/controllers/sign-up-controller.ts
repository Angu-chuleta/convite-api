import { Request, Response, NextFunction } from 'express'
import { SignUp } from '../models/sign-up'
import { IUser } from '../interfaces'
import { Config, Services } from 'js-data-dao'
import * as JSData from 'js-data'

export class SignUpController {
  SignUp: SignUp

  constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    this.SignUp = new SignUp(store, appConfig)
  }

  /**
   * Cria um usuário
   *
   * @param {Request} req
   * @param {Response} res
   * @param {Function} [next]
   * @returns {Promise<ISignUp>}
   *
   * @memberOf SignUpController
   */
  public create (req: Request, res: Response, next?: NextFunction): Promise<IUser> {
    return this.SignUp.create(req.body)
      .then((user: IUser) => {
        res.status(201)
        return user
      })
      .catch((err: any) => {
        throw new Services.APIError('Erro ao inserir', 400, err)
      })
  }
}
