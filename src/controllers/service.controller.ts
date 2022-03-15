import { NextFunction, Request, Response } from "express";
import { createService, listAllService, listServiceByStatus, updateStatusService } from "../services";

export const createServiceController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const data = req.body;
        const serviceCreated = await createService(data)
        res.status(201).send(serviceCreated)
    }catch(err){
        next(err)
    }
}

export const listAllServiceController = async (req: Request, res: Response, next: NextFunction) => {
    try{
    const services = await listAllService()
    res.send(services)
    }catch(err){

    }
}

export const listServiceByStatusController = async (req: Request, res: Response, next: NextFunction) => {
    try{
    const status = req.body.status;
    const services = await listServiceByStatus(status)
    res.send(services)
    }catch(err){

    }
}

export const updateStatusServiceController = async (req: Request, res: Response, next: NextFunction) => {
    try{
    const uuid = req.params.uuid
    const data = req.body

    const serviceUpdated = await updateStatusService(uuid, data)

    res.send(serviceUpdated)
    }catch(err){
        next(err)
    }

}