import { AppDataSource } from "../../data-source";
import { Note } from "../../entities/note.entity";
import { AppError } from "../../errors/appError";
import { INoteCreate, INote, INoteUpdate } from "../../interfaces/Note";

const updateNoteService = async ({title,content}:INote, id:string): Promise<INoteUpdate> => {
    const noteRepository = AppDataSource.getRepository(Note);

    const note = await noteRepository.findOne({where: { id : id }});

    if(!note){
        throw new AppError(404, "Note not found")
    }

    const noteToUpadate = {
        title: title ? title : note?.title,
        content: content,
    }

    await noteRepository.update(id, noteToUpadate);

    return noteToUpadate;
}

export default updateNoteService;