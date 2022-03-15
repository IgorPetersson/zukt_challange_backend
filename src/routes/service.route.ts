import { Express, Router } from "express";
import { createServiceController, listAllServiceController, listServiceByStatusController, updateStatusServiceController } from "../controllers/service.controller";
import { serviceNotFound } from "../middlewares";

const route = Router();

export const serviceRoute = (app: Express) => {
    route.post("", createServiceController)
    route.get("", listAllServiceController)
    route.get("/status", listServiceByStatusController)
    route.patch("/:uuid",serviceNotFound, updateStatusServiceController)
    app.use("/services", route)
}