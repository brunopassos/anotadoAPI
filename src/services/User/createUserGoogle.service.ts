import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserCreate, IUserGoogle } from "../../interfaces/User";

const createUserGoogleService = async ({email}:IUserGoogle): Promise<IUserCreate> => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({where: { email: email}});

    if(user){
        throw new AppError(409, "User already exists");
    }

    const newUser = new User();

    newUser.email = email;
    

    userRepository.create(newUser);
    await userRepository.save(newUser);

    return newUser;
}

export default createUserGoogleService;