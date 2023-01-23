import { AppDataSource } from "../../data-source";
import { Note } from "../../entities/note.entity";

const deleteNoteService = async (id:string): Promise<boolean> => {
    const noteRepository = AppDataSource.getRepository(Note);

    const note = await noteRepository.findOne({where: { id : id}});

    await noteRepository.delete(note!.id);

    return true;
}

export default deleteNoteService;