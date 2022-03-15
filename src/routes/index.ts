import express, {Express} from "express"

import { serviceRoute } from "./service.route"

export const routesApp = (app: Express) => {
    app.use(express.json())
    serviceRoute(app)
}