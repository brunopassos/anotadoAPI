import { Router } from "express";

const userRoutes = Router();

import createUserController from "../../controllers/User/createUser.controller";
import listOneUserController from "../../controllers/User/listOneUser.controller";
import listUserNotesController from "../../controllers/User/listUserNotes.controller";
import listUsersController from "../../controllers/User/listUsers.controller";
import userLoginController from "../../controllers/User/userLogin.controller";
import authUser from "../../middlewares/authUser.middleware";


userRoutes.post("/user", createUserController);
userRoutes.post("/user/login", userLoginController);
userRoutes.get("/user/me", authUser, listOneUserController);
userRoutes.get("/user", listUsersController);
userRoutes.get("/user/notes/me", authUser, listUserNotesController);

export default userRoutes; 