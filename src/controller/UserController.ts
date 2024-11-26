// import {NextFunction, RequestHandler, Request, Response} from "express";
// import UserModel from "../model/UserModel"
// import createHttpError from "http-errors";
// import mongoose from "mongoose";
//
// export const findAll: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const users = await UserModel.find().exec();
//         if (!users) throw createHttpError(404, "users not found")
//         res.status(200).json(users)
//     } catch (e) {
//         next(e)
//     }
// }
//
// export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
//     const {userId} = req.params
//     try {
//         if (!mongoose.isValidObjectId(userId)) {
//             throw createHttpError(400, "Invalid user id")
//         }
//         const user = await UserModel.findById(userId).exec();
//         if (!user)  throw createHttpError(404, "User not found");
//         res.status(200).json(user)
//     } catch (e) {
//         next(e)
//     }
// }
// export const createUser=async (req:Request, res:Response,next:NextFunction) => {
//      const {username,password,email} = req.body;
//      if (username || password || email) {
//          throw createHttpError(400, "Missing required fields")
//      }
// }




class UserController{
    constructor(req: Request, res: Response) {
    }


}