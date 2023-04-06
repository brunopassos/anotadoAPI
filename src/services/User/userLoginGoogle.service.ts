import { IUserGoogle } from "../../interfaces/User";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError";

const userLoginGoogleService = async ({email}: IUserGoogle) => {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    const account = users.find(user => user.email === email);

    if(!account){
        throw new AppError(404, "Wrong email/password");
    }

    const token = jwt.sign(
        {email: email},
        String(process.env.JWT_SECRET),
        {expiresIn: "1d"}
    )

    return token;
}

export default userLoginGoogleService;