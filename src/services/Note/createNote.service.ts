import { AppDataSource } from "../../data-source";
import { Note } from "../../entities/note.entity";
import { INote, INoteCreate } from "../../interfaces/Note";

const createNoteService = async ({title, content}:INote):  Promise<INoteCreate> => {
    const noteRepository = AppDataSource.getRepository(Note);

    const note = new Note();
    if(title){
        note.title = title;
    }
    note.content = content;

    noteRepository.create(note);
    await noteRepository.save(note);

    return note;
}

export default createNoteService;