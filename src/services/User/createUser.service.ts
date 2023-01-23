import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUser } from "../../interfaces/User";
import bcrypt from "bcrypt";

const createUserService = async ({email, password}:IUser) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({where: { email: email}});

    if(user){
        throw new AppError(409, "User already exists");
    }

    const newUser = new User();

    newUser.email = email;
    newUser.password = bcrypt.hashSync(password, 10);

    userRepository.create(newUser);
    await userRepository.save(newUser);

    return newUser;
}

export default createUserService;