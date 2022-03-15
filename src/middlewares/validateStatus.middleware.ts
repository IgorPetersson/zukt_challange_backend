import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../utils/error";
import { transformFirstLetterUppercase } from "../utils/transform";

export const validateStatus = (req: Request, res: Response,  next: NextFunction) => {
    
    const statusAvailable = ["Aberto", "Em Atendimento", "Concluído"]

    const {status} = req.body;

    if(!status){
        next(new ErrorHandler(400, "status is required"))
    }

    if(statusAvailable.includes(transformFirstLetterUppercase(status)) == false){
        next(new ErrorHandler(400, "status only accepts the values: " + statusAvailable.join(", ")))
    }

    req.body = {status: transformFirstLetterUppercase(status)}
    
    next()
}