import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listUserNotesService from "../../services/User/listUserNotes.service";

const listUserNotesController = async (req: Request, res: Response) => {
    try {
        const email = req.userEmail;
        const notes = await listUserNotesService(email);

        return res.status(200).json(instanceToPlain({data: {
            message: "Success",
            notes
        }}));
        
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}

export default listUserNotesController;