import { Router } from "express";

const userRoutes = Router();

import createUserController from "../../controllers/User/createUser.controller";

userRoutes.post("/user", createUserController);

export default userRoutes;