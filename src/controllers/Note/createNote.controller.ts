import { Response, Request } from "express";
import { AppError, handleError } from "../../errors/appError";
import createNoteService from "../../services/Note/createNote.service";

const createNoteController = async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;
        const note = await createNoteService({title, content});
        return res.status(201).json({data: {
            message: "New note created",
            note
        }});

    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res)
          }
    }
}

export default createNoteController;