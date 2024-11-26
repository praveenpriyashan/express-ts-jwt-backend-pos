import UserModel from "../../model/UserModel";

export interface UserService {
    getAllUsers(): Promise<UserModel[]>;

    getUserById(userId: string): Promise<UserModel>;

    createUser(user: UserModel): Promise<UserModel>;

    updateUser(userId: string, user: UserModel): Promise<UserModel>;

    deleteUser(userId: string): Promise<void>;
}