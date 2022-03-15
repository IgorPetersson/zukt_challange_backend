import { Express, Router } from "express";
import { createServiceController, listAllServiceController } from "../controllers/service.controller";

const route = Router();

export const serviceRoute = (app: Express) => {
    route.post("", createServiceController)
    route.get("", listAllServiceController)
    app.use("/services", route)
}