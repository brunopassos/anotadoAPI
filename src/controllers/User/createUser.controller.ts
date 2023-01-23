import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import createUserService from "../../services/User/createUser.service";

const createUserController = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        const user = await createUserService({email, password});
        return res.status(201).json({data: {
            message: "New user created",
            user
        }});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}

export default createUserController;