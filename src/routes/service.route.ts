import { Express, Router } from "express";
import { createServiceController, listAllServiceController, listServiceByStatusController } from "../controllers/service.controller";

const route = Router();

export const serviceRoute = (app: Express) => {
    route.post("", createServiceController)
    route.get("", listAllServiceController)
    route.get("/:status", listServiceByStatusController)
    app.use("/services", route)
}