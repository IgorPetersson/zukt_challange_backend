import { getRepository } from "typeorm"
import { Service } from "../entities/service"

interface IServiceCreated {
    problem: string;
    localization: string;
}

interface IServiceUpdate {
    status: string;
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

export const listAllService =  async () => {
    const serviceRepository = getRepository(Service)
    const services =  await serviceRepository.find()
    return services
}

export const listServiceByStatus = async (status: string) => {
    const serviceRepository = getRepository(Service)

    const services = await serviceRepository.find({status: status})

    return services

}

export const updateStatusService = async (uuid: string, data: IServiceUpdate) => {
    const serviceRepository = getRepository(Service)
    const service = await serviceRepository.findOne(uuid)


    
    await serviceRepository.save({
        ...service, ...data
    })

    const serviceUpdated = await serviceRepository.findOne(uuid)

    return serviceUpdated;
}



