import { instanceToPlain } from "class-transformer";
import { Response, Request } from "express";
import { AppError, handleError } from "../../errors/appError";
import createNoteService from "../../services/Note/createNote.service";
import jwt from "jsonwebtoken";

const createNoteController = async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;
        const token = req.headers.authorization?.split(" ")[1];
        let id = "";

        jwt.verify(token as string, process.env.JWT_SECRET as string, (err: any, decoded: any) => {
            id = decoded.id
        })

        const note = await createNoteService({title, content}, id!);
        
        return res.status(201).json(instanceToPlain(note));

    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res)
          }
    }
}

export default createNoteController;