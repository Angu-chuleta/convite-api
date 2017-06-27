import { UserRouter } from './user-router'
import { SignUpRouter } from './sign-up-router'
import { EventRouter } from './event-router'
import { InvitationRouter } from './invitation-router'
import { OrganizationRouter } from './organization-router'
import { Auth, Config, Routes } from 'js-data-dao'
import { Application, Request, Response, NextFunction } from 'express'
import * as JSData from 'js-data'

export namespace main {
  export const callRoutes = (app: Application, store: JSData.DataStore, passport: any, appConfig: Config.AppConfig): Application => {
    app.use('/api/v1/users', Auth.authenticate(passport, appConfig), new UserRouter(store, appConfig).getRouter())
    app.use('/api/v1/login', new Routes.LoginRouter(store, appConfig).getRouter())
    app.use('/api/v1/signup', new SignUpRouter(store, appConfig).getRouter())
    // app.use('/api/v1/forgot', new Routes.ForgotRouter(store, appConfig).getRouter())
    app.use( '/api/v1/events', Auth.authenticate( passport, appConfig ), new EventRouter( store, appConfig ).getRouter() )
    app.use( '/api/v1/invitations', Auth.authenticate( passport, appConfig ), new InvitationRouter( store, appConfig ).getRouter() )
    app.use( '/api/v1/organization', Auth.authenticate( passport, appConfig ), new OrganizationRouter( store, appConfig ).getRouter() )
    app.use('/api/v1/ping', (req: Request, res: Response, next: NextFunction) => res.json('pong'))
    return app
  }
}
