import {SuperRepository} from "./SuperRepository";
import {UserRepositoryImpl} from "./custom/impl/UserRepositoryImpl";

export enum RepositoryType {
    USER
}


export class RepositoryFactory {
    private static readonly repositoryFactory = new RepositoryFactory();

    private constructor() {
    }

    static getInstance(): RepositoryFactory {
        return RepositoryFactory.repositoryFactory;
    }

    getRepository(type: RepositoryType): SuperRepository | null {
        switch (type) {
            case RepositoryType.USER:
                return new UserRepositoryImpl()
        }
    }
}
