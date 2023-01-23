import { Response, Request } from "express";
import listNotesService from "../../services/Note/listNotes.service";

const listNotesController = async (req: Request, res: Response) => {
    try {
        const notes = await listNotesService();
        return res.status(200).json({data: {
            message: "Success",
            notes
        }});
    } catch (error) {
        console.log(error);
    }
}

export default listNotesController;