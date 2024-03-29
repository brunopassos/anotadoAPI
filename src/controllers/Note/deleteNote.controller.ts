import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import deleteNoteService from "../../services/Note/deleteNote.service";

const deleteNoteController = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const note = await deleteNoteService(id);
        return res.status(200).json({data: {
            message: "Note deleted successfully.",
        }});
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res)
          }
    }
}

export default deleteNoteController;