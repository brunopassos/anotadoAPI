import { Router } from "express";

const userRoutes = Router();

import createUserController from "../../controllers/User/createUser.controller";
import createUserGoogleController from "../../controllers/User/createUserGoogle.controller";
import listOneUserController from "../../controllers/User/listOneUser.controller";
import listUserNotesController from "../../controllers/User/listUserNotes.controller";
import listUsersController from "../../controllers/User/listUsers.controller";
import userLoginGoogleController from "../../controllers/User/userLogginGoogle.controller";
import userLoginController from "../../controllers/User/userLogin.controller";
import authUser from "../../middlewares/authUser.middleware";


userRoutes.post("/user", createUserController);
userRoutes.post("/userGoogle", createUserGoogleController);
userRoutes.post("/user/login", userLoginController);
userRoutes.post("/user/loginGoogle", userLoginGoogleController);
userRoutes.get("/user/me", authUser, listOneUserController);
userRoutes.get("/user", listUsersController);
userRoutes.get("/user/notes/me", authUser, listUserNotesController);

export default userRoutes; 