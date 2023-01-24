import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listOneUserService from "../../services/User/listOneUser.service";

const listOneUserController = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;

        const user = await listOneUserService(id);

        return res.status(200).json(instanceToPlain({data: {
            message: "Success",
            user
        }}));
        
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}

export default listOneUserController;