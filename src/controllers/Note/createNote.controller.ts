import { instanceToPlain } from "class-transformer";
import { Response, Request } from "express";
import { AppError, handleError } from "../../errors/appError";
import createNoteService from "../../services/Note/createNote.service";

const createNoteController = async (req: Request, res: Response) => {
    try {
        const { title, content, user } = req.body;

        const note = await createNoteService({title, content, user});
        
        return res.status(201).json(instanceToPlain({data: {
            message: "New note created",
            note
        }}));

    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res)
          }
    }
}

export default createNoteController;