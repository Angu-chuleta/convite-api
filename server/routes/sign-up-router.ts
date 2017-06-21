import { SignUpController } from '../controllers'
import { Routes, Config } from 'js-data-dao'
import { Request, Response, Router, NextFunction } from 'express'
import * as JSData from 'js-data'

export class SignUpRouter extends Routes.BaseRouter {
  Controller: SignUpController
  store: JSData.DataStore
  router: Router

  constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    super()
    this.Controller = new SignUpController(store, appConfig)
    this.store = store
    this.router = Router()
    this.routers()
  }

  public routers () {
    let ctrl = this
    this.router.post('/', (req: Request, res: Response, next: NextFunction) =>
      this.respond(ctrl.Controller.create(req, res, next), res, next))
  }

  public getRouter (): Router {
    return this.router
  }
}
