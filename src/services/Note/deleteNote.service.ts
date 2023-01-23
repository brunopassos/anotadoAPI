import { AppDataSource } from "../../data-source";
import { Note } from "../../entities/note.entity";
import { AppError } from "../../errors/appError";

const deleteNoteService = async (id:string): Promise<boolean> => {
    const noteRepository = AppDataSource.getRepository(Note);

    const note = await noteRepository.findOne({where: { id : id}});

    if(!note){
        throw new AppError(404, "Note not found")
    }

    await noteRepository.delete(note!.id);

    return true;
}

export default deleteNoteService;