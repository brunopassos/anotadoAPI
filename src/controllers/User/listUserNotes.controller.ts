import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listUserNotesService from "../../services/User/listUserNotes.service";

const listUserNotesController = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;

        const notes = await listUserNotesService(id);

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