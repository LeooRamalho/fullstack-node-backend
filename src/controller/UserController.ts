import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"

export const getUsers = async (req: Request, res: Response) => {
    const users = await AppDataSource.getRepository(User).find()
    return res.json(users)
}