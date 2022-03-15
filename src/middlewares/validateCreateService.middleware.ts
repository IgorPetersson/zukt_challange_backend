import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../utils/error";

export const validateCreateService = (req: Request, res: Response, next: NextFunction) => {
    
    const requiredKeys = ["localization", "problem"]

    for(let i = 0; i < requiredKeys.length; i++){
        if(Object.keys(req.body).includes(requiredKeys[i]) == false){
            next(new ErrorHandler(400, "localization and problem are required"))
        }
    }

    const {localization, problem} = req.body

    req.body = {
        localization: localization,
        problem: problem
    }

    next()
}