import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";
import { IUserCreate } from "../../interfaces/User";

const listOneUserService = async (id: string): Promise<IUserCreate> => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({where: {id:id}});

    if(!user){
        throw new AppError(404, "User not found");
    }

    return user;
}

export default listOneUserService;