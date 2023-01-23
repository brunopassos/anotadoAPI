import { AppDataSource } from "../../data-source";
import { Note } from "../../entities/note.entity";
import { INoteCreate, INote } from "../../interfaces/Note";

const updateNoteService = async ({title,content}:INote, id:string) => {
    const noteRepository = AppDataSource.getRepository(Note);

    const note = await noteRepository.findOne({where: { id : id }});

    const noteToUpadate = {
        title: title ? title : note?.title,
        content: content,
    }

    await noteRepository.update(id, noteToUpadate);

    return noteToUpadate;
}

export default updateNoteService;