import {NextFunction, RequestHandler, Request, Response} from "express";
import UserModel from "../model/UserModel"
import createHttpError from "http-errors";

export const getUsers: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await UserModel.find().exec();
        if (!users) throw createHttpError(404, "users not found")
        res.status(200).json(users)
    } catch (e) {
        next(e)
    }
}
