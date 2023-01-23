import { Router } from "express";

const userRoutes = Router();

import createUserController from "../../controllers/User/createUser.controller";
import listOneUserController from "../../controllers/User/listOneUser.controller";

userRoutes.post("/user", createUserController);
userRoutes.get("/user/:id", listOneUserController);

export default userRoutes;