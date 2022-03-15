import { Express, Router } from "express";
import { createServiceController, listAllServiceController, listServiceByStatusController, updateStatusServiceController } from "../controllers/service.controller";
import { serviceNotFound, validateStatus, validateCreateService } from "../middlewares";

const route = Router();

export const serviceRoute = (app: Express) => {
    route.post("",validateCreateService, createServiceController)
    route.get("", listAllServiceController)
    route.get("/status",validateStatus, listServiceByStatusController)
    route.patch("/:uuid",serviceNotFound, validateStatus, updateStatusServiceController)
    app.use("/services", route)
}