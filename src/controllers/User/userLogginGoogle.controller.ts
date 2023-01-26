import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userLoginGoogleService from "../../services/User/userLoginGoogle.service";

const userLoginGoogleController = async (req: Request, res: Response) => {
    try {
        const {email} = req.body;

        const token = await userLoginGoogleService({email});

        return res.status(201).json({data: {
            message: "Login successfully",
            token
        }});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}

export default userLoginGoogleController;