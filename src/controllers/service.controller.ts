import { NextFunction, Request, Response } from "express";
import { createService, listAllService } from "../services";

export const createServiceController = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const serviceCreated = await createService(data)
    res.status(201).send(serviceCreated)
}

export const listAllServiceController = async (req: Request, res: Response, next: NextFunction) => {
    const services = await listAllService()
    res.send(services)
}