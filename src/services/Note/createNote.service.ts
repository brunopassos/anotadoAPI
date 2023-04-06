import { AppDataSource } from "../../data-source";
import { Note } from "../../entities/note.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { INote, INoteCreate } from "../../interfaces/Note";


const createNoteService = async ({title, content}:INote, id:string):  Promise<INoteCreate> => {
    const noteRepository = AppDataSource.getRepository(Note);
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOne({where: { id : id}});

    if(!findUser){
        throw new AppError(404, "User not found")
    }

    const newNote = noteRepository.create({
        title,
        content,
        user: findUser
    })

    await noteRepository.save(newNote);

    return newNote;
}

export default createNoteService;