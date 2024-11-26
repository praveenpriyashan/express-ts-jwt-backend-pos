import {UserService} from "../UserService";
import UserModel from "../../../model/UserModel";
import {RepositoryFactory, RepositoryType} from "../../../repository/RepositoryFactory";

class UserServiceImpl implements UserService{

    private userRepo;

    constructor() {
        this.userRepo = RepositoryFactory.getInstance().getRepository(RepositoryType.USER);
    }

    createUser(user): Promise<any> {
        return Promise.resolve(undefined);
    }

    deleteUser(userId: string): Promise<void> {
        return Promise.resolve(undefined);
    }

   async getAllUsers(): Promise<UserModel[]> {
         const usersResult = await this.userRepo.findAll();
    }

    getUserById(userId: string): Promise<any> {
        return Promise.resolve(undefined);
    }

    updateUser(userId: string, user): Promise<any> {
        return Promise.resolve(undefined);
    }

}