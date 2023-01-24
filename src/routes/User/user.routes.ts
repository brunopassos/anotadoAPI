import { Router } from "express";

const userRoutes = Router();

import createUserController from "../../controllers/User/createUser.controller";
import listOneUserController from "../../controllers/User/listOneUser.controller";
import listUserNotesController from "../../controllers/User/listUserNotes.controller";
import listUsersController from "../../controllers/User/listUsers.controller";

userRoutes.post("/user", createUserController);
userRoutes.get("/user/:id", listOneUserController);
userRoutes.get("/user", listUsersController);
userRoutes.get("/user/notes/:id", listUserNotesController);

export default userRoutes;