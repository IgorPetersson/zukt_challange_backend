import { getRepository } from "typeorm"
import { Service } from "../entities/service"

interface IServiceCreated {
    problem: string;
    localization: string;
}

export const createService = async (data: IServiceCreated) => {
    const serviceRepository = getRepository(Service)

    const serviceCreated = serviceRepository.create(
        { 
            "status": "aberto",
            ...data
        }
    )
    
    await serviceRepository.save(serviceCreated)

    return serviceCreated

}