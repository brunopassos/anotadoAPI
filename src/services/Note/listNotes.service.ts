import { Note } from "../../entities/note.entity";
import { AppDataSource } from "../../data-source";
import { INoteCreate } from "../../interfaces/Note";

const listNotesService = async (): Promise<INoteCreate[]> => {
    const noteRepository = AppDataSource.getRepository(Note);
    const notes = await noteRepository.find();

    return notes;
}

export default listNotesService;