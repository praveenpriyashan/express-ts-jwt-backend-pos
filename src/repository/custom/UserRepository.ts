import userModel from "../../model/UserModel";
import {CrudRepository} from "../CrudRepository";

export interface UserRepository extends CrudRepository<userModel, String>{

}
