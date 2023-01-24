import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const listOneUserService = async (email:string) => {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    const account = users.find(user => user.email === email);

    console.log(account);

    return account;
}

export default listOneUserService;