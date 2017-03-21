import { UserRouter } from './user-router'
import { PersonRouter } from './person-router'
import { SignUpRouter } from './sign-up-router'
import { Auth, Config, Routes } from 'js-data-dao'
// import { Passport } from 'passport'
import { Application, Request, Response, NextFunction } from 'express'
import * as JSData from 'js-data'

export namespace main {
  export const callRoutes = (app: Application, store: JSData.DataStore, passport: any, appConfig: Config.AppConfig): Application => {
    app.use('/api/v1/users', Auth.authenticate(passport, appConfig), new UserRouter(store, appConfig).getRouter())
    app.use('/api/v1/persons', Auth.authenticate(passport, appConfig), new PersonRouter(store, appConfig).getRouter())
    app.use('/api/v1/login', new Routes.LoginRouter(store, appConfig).getRouter())
    app.use('/api/v1/signup', new SignUpRouter(store, appConfig).getRouter())
    app.use('/api/v1/forgot', new Routes.ForgotRouter(store, appConfig).getRouter())
    app.use('/api/v1/ping', (req: Request, res: Response, next: NextFunction) => res.json('pong'))
    return app
  }
}
