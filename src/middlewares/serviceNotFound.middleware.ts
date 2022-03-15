import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Service } from "../entities/service";
import { ErrorHandler } from "../utils/error";

export const serviceNotFound = async (req: Request, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    const serviceRepository = getRepository(Service)
    const services = await serviceRepository.find()

    const service = services.filter((serv) => serv.uuid == uuid)

    if(service.length == 0){
        next(new ErrorHandler(404, "service not found"))
    }

    next()

}