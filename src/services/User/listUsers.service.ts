import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";
import { IUserCreate } from "../../interfaces/User";

const listUsersService = async (): Promise<IUserCreate[]> => {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    return users;
}

export default listUsersService;