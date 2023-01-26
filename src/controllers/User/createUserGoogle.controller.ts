import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { instanceToPlain } from "class-transformer";
import createUserGoogleService from "../../services/User/createUserGoogle.service";

const createUserGoogleController = async (req: Request, res: Response) => {
    try {
        const {email} = req.body;
        const user = await createUserGoogleService({email});
        return res.status(201).json(instanceToPlain({data: {
            message: "New user created",
            user
        }}));
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}

export default createUserGoogleController;