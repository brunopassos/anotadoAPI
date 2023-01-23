import { Response, Request } from "express";
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
        console.log(error)
    }
}

export default createNoteController;