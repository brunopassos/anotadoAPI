import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { Note } from "../../entities/note.entity";
import { AppError } from "../../errors/appError";
import { IUserListOne, IUserNotes } from "../../interfaces/User"
import jwt from "jsonwebtoken";

const listUserNotesService = async ({authorization}:IUserListOne)=> {
    const noteRepository = AppDataSource.getRepository(Note);
    const userRepository = AppDataSource.getRepository(User);

    const notes = await noteRepository.find();
    const users = await userRepository.find();

    if(!authorization){
        throw new AppError(404, "No authorization token found");
    }

    const token = authorization.split(" ")[1];

    const account:any = jwt.verify(token, String(process.env.JWT_SECRET), (err, decoded) => {
        if(!decoded){
            throw new AppError(404, "Invalid token");
        }

        const user = users.find(user => user.email === (<any>decoded).email);

        return user
    })


    const notesOwner = notes.filter((note) => (note.user.id) === account!.id);
    
    return notesOwner

}

export default listUserNotesService;