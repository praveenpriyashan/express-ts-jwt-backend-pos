import {UserRepository} from "../UserRepository";
import UserModel from "../../../model/UserModel";

export class UserRepositoryImpl implements UserRepository {

    constructor() {
    }

    deleteById(id: String): Promise<void> {
        return Promise.resolve(undefined);
    }

    exists(model): Promise<boolean> {
        return Promise.resolve(false);
    }

   async findAll(): Promise<UserModel[]> {
       try {
           return await this.UserModel.findAll();
       } catch (e) {
           console.error("Error while fetching all users", e);
       }
    }


    findById(id: String): Promise<| null> {
        // return Promise.resolve(undefined);
        return
    }

   async save(model): Promise<String> {

    }

    update(model): Promise<void> {
        return Promise.resolve(undefined);
    }
}