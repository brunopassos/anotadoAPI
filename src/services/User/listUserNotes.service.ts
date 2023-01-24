import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { Note } from "../../entities/note.entity";
import { AppError } from "../../errors/appError";
import { IUserNotes } from "../../interfaces/User"

const listUserNotesService = async (id: string): Promise<IUserNotes[]> => {
    const noteRepository = AppDataSource.getRepository(Note);
    const userRepository = AppDataSource.getRepository(User);

    const notes = await noteRepository.find();

    const user = await userRepository.findOne({where: {id:id}})   
    
    if(!user){
        throw new AppError(404, "User no found");
    }

    const notesOwner = notes.filter((note) => (note.user.id) === user!.id);
    
    return notesOwner

}

export default listUserNotesService;