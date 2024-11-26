import {SuperRepository} from "./SuperRepository";

export interface CrudRepository<t, pk> extends SuperRepository{
    save(model: t): Promise<pk>;

    update(model: t): Promise<void>;

    deleteById(id: pk): Promise<void>;

    findById(id: pk): Promise<t | null>;

    findAll(): Promise<t[]>;

    exists(model: t): Promise<boolean>;
}