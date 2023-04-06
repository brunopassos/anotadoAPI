import { instanceToPlain } from "class-transformer";
import { Response, Request } from "express";
import { AppError, handleError } from "../../errors/appError";
import listNotesService from "../../services/Note/listNotes.service";

const listNotesController = async (req: Request, res: Response) => {
    try {
        const notes = await listNotesService();
        return res.status(200).json(instanceToPlain({data: {
            message: "Success",
            notes
        }}));
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res)
          }
    }
}

export default listNotesController;