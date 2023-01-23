import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listOneUserService from "../../services/User/listOneUser.service";
import listUsersService from "../../services/User/listUsers.service";

const listUsersController = async (req: Request, res: Response) => {
    try {
        const users = await listUsersService();

        return res.status(200).json({data: {
            message: "Success",
            users
        }});
        
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}

export default listUsersController;