import {UserServiceImpl} from "../service/custom/impl/UserServiceImpl"

export enum ServiceType {
    USER,
    // ORDER,
    // PRODUCT,
    // Add more service types as needed
}

export class ServiceFactory {
    private static readonly serviceFactory = new ServiceFactory();

    private constructor() {
    }

    static getInstance(): ServiceFactory {
        return ServiceFactory.serviceFactory;
    }

    getService(type: ServiceType) {
        switch (type) {
            case ServiceType.USER:
                return new UserServiceImpl();
        }
    }
}