import { Express, Router } from "express";
import { createServiceController } from "../controllers/service.controller";

const route = Router();

export const serviceRoute = (app: Express) => {
    route.post("", createServiceController)
    app.use("/services", route)
}