import { AppDataSource } from "../../data-source";
import { Note } from "../../entities/note.entity";

const listUserNotesService = async (email:string)=> {
    const noteRepository = AppDataSource.getRepository(Note);

    const notes = await noteRepository.find();

    const notesOwner = notes.filter((note) => (note.user.email) === email);
    
    return notesOwner

}

export default listUserNotesService;