import { Request, Response } from "express";
import { INote } from "../../interfaces/Note";
import updateNoteService from "../../services/Note/updateNote.service";

const updateNoteController = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {title, content}:INote = req.body;

        const note = await updateNoteService({title, content}, id);

        return res.status(200).json({data: {
            message: "Note updated succesfully",
            note
        }});
    } catch (error) {
        console.log(error)
    }
}

export default updateNoteController;